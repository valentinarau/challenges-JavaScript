// My Solution
var interpret = function(command) {
    return command.replaceAll("()","o").replaceAll("(al)","al");
};

/*
  I tried to do:
  var interpret = function(command) {
    command.replace("()","o");
    command.replace("(al)","al");
    return command;
  but didn't work because the command variable is not afected. 
  Replace is like a function that returns a value, but it does not affect what it receives.
  It returns a new string
  
  I also tried:
  var interpret = function(command) {
    return command.replaceAll("()","o").replaceAll("(al)","al");
};
  but it does not replace all the occations where it has to.

*/