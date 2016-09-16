
function titleCase(str) {
  var lowerCase = str.toLowerCase();
  var splitString = lowerCase.split(" ");
  for (i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
  }
  return splitString.join(" ");
}

titleCase("I'm a little tea pot");
