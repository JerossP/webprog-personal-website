function myFunction() {
  document.getElementById("demo").innerHTML = "What pet do I have?";
}

function myFunction2() {
  const element = document.getElementsByTagName("span"); 
  document.getElementById("demo").innerHTML = 'A ' + element[0].innerHTML; 
  
}
