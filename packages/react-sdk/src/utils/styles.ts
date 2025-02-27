const formatStringToCamelCase = (str?: string) => {
  const splitted = str?.split("-") || [];
  if (splitted.length === 1) return splitted[0];
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  );
};

export const getStyleObjectFromString = (str?: string[]) => {
  const style = {} as Record<string, string>;

  if (!str || str.length < 1) return style;

  str.forEach((el) => {
    const [property, value] = el.split(":");
    if (!property && !value) return;

    if (property && value) {
      const formattedProperty = formatStringToCamelCase(property.trim());
      style[formattedProperty] = value.trim();
      return;
    }
    switch (property) {
      case "underline":
        style.textDecoration = "underline";
        break;
      case "line-through":
        style.textDecoration = "line-through";
        break;
      case "italic":
        style.fontStyle = "italic";
        break;
      case "bold":
        style.fontWeight = "bold";
        break;
      case "strike-through":
        style.textDecoration = "line-through";
        break;
      case "superscript":
        style.verticalAlign = "super";
        break;
      case "subscript":
        style.verticalAlign = "sub";
        break;
      default:
        break;
    }
  });

  return style;
};
