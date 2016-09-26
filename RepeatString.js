function repeatStringNumTimes(str, num) {
  // repeat after me
  var addStr = "";
  for (i = 0; i < num; i++) {
    addStr = addStr + str;
  }
  return addStr;
}

repeatStringNumTimes("abc", 3);

//Or another way is to creat an empty array and push them together

function repeatStringNumTimes(str, num) {
  // repeat after me
  var pieces = [];
  for (i = 0; i < num; i++) {
    pieces.push(str);
  }
  return pieces.join("");
}

repeatStringNumTimes("abc", 3);
