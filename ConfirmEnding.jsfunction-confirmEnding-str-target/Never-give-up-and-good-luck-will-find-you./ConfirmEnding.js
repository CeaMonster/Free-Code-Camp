function confirmEnding(str, target) {
 
   endString = str.substr(-target.length);  
 }
 if (target == endString) {
   
  return true;
 }
else {
  return false;
} 
}

confirmEnding("Bastian", "n");
