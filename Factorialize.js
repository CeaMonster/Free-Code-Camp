
function factorialize(num) {
  factorial = 1;  
  for (var i = 1; i <= num; i++) {
       factorial = factorial * i;
    }  
  return factorial;
}

factorialize(5);
