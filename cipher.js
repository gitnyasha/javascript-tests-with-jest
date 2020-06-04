const cipher = (string) =>
  string.replace(/([a-z])/gi, (char) => {
    let charNumber = char.charCodeAt(0);
    charNumber === 122
      ? (charNumber = 97)
      : charNumber === 90
      ? (charNumber = 65)
      : (charNumber += 1);
    return String.fromCharCode(charNumber);
  });
module.exports = cipher;
