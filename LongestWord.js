
function findLongestWord(str) {
  var splitString = str.split(" ");
  var stringLength = splitString.map(function(val){
    return val.length;
  });
  var longestWord = stringLength.reduce(function(prevVal, currVal){
    return prevVal > currVal ? prevVal : currVal; 
  });
  return longestWord;
//  return splitString.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
