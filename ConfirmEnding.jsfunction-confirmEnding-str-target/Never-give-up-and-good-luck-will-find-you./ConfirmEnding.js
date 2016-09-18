function confirmEnding(str, target) {
 var endString = 0;
  for (i = 0; i < str.length; i++) {
   endString = str.substr(i);  
 }
 if (target == endString) {
   
  return true;
 }
else {
  return false;
} 
}

confirmEnding("Bastian", "n");
