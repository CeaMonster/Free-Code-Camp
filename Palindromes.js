
function palindrome(str) {
  // Good luck!
  var re = /[\W_]/g;
  var equalString = str.toLowerCase().replace(re, '');//.toLowerCase();
  var reverseArray = equalString.split("").reverse().join("");
//  return equalString + " " + reverseArray;// + " " + reverseArray;
  if (equalString === reverseArray) {
    return true;
  }
  else {
    return false;
  }
}



palindrome("Eye");
