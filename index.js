module.exports = function repl(string) {
  if (typeof string !== "string") throw new TypeError("Enter string to replace!");
  return string.replace(/\s/g, "");
};
