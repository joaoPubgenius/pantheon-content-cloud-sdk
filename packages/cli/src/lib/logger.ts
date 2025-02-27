import ora, { Ora } from "ora";

export class SpinnerLogger {
  logger: Ora | null;
  constructor(message: string, disabled = false) {
    if (!disabled) this.logger = ora(message);
    else this.logger = null;
  }

  start() {
    if (this.logger) this.logger.start();
  }
  stop() {
    if (this.logger) this.logger.stop();
  }

  succeed(message: string) {
    if (this.logger) this.logger.succeed(message);
  }
}

export class Logger {
  logger: Console;
  disabled: boolean;
  constructor(disabled = false) {
    this.logger = console;
    this.disabled = disabled;
  }

  log(...args: unknown[]) {
    if (!this.disabled) this.logger.log(...args);
  }
  error(...args: unknown[]) {
    this.logger.error(...args);
  }
}
