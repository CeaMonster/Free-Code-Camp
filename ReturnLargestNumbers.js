function largestOfFour(arr) {
  // You can do this!s
  var largestArr = 0;
  
  for (i = 0; i < arr.length; i++) {
     
    for (j = 0; j < arr[i].length; i++) {
      largestArr = arr[i][j];
    }
  }  
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
