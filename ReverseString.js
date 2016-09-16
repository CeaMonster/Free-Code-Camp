
function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

reverseString("hello");

//Simple version
function reverseString(str) {
  return str.split("").reverse().join("");  
}

reverseString("hello");
