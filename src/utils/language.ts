import ISO6391 from "iso-639-1";

export function getPrettyName(languageCode: string): string {
  if (languageCode.toLowerCase() == "xx") {
    return "Other";
  }
  const result = ISO6391.getName(languageCode);
  if (result) {
    return result;
  }
  return `UNKNOWN - ${languageCode}`;
}
