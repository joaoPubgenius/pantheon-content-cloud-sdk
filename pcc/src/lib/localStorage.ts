import { writeFileSync, readFileSync } from 'fs';
import { PCC_ROOT_DIR } from '../constants';
import { Credentials } from 'google-auth-library';
import AddOnApiHelper from './addonApiHelper';

export const AUTH_FILE_PATH = `${PCC_ROOT_DIR}/auth.json`;
export const getLocalAuthDetails = async (): Promise<Credentials | null> => {
  let credentials: Credentials;
  try {
    credentials = JSON.parse(
      readFileSync(AUTH_FILE_PATH).toString(),
    ) as Credentials;
  } catch (_err) {
    return null;
  }

  // Check if token is expired
  if (credentials.expiry_date && credentials.expiry_date > Date.now())
    return credentials;

  const newCred = await AddOnApiHelper.refreshToken(
    credentials.refresh_token as string,
  );
  persistAuthDetails(newCred);
  return newCred;
};

export const persistAuthDetails = async (
  payload: Credentials,
): Promise<void> => {
  writeFileSync(AUTH_FILE_PATH, JSON.stringify(payload, null, 2));
};
