var isMatch = function (s: string, p: string) {
  if (p.endsWith("*") && p.startsWith(".")) {
    return true;
  }
};
