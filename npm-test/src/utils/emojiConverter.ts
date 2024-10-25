// Convert country code (like 'US') to a flag emoji
export const getFlagEmoji = (countryCode: string): string => {
    return countryCode
      .toUpperCase()
      .split('')
      .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
      .join('');
  };
  