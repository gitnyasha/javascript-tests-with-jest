const cipher = (string) => string.replace(/([a-z])/gi, (char) => {
  let charNumber = char.charCodeAt(0);
  if (charNumber === 122) {
    charNumber = 97;
  } else if (charNumber === 90) {
    charNumber = 65;
  } else {
    charNumber += 1;
  };
  return String.fromCharCode(charNumber);
});
module.exports = cipher;
