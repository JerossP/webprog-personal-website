function myFunction() {
  document.getElementById("demo").innerHTML = "What pet do i have?";
}

function myFunction2() {
  const element = document.getElementsByTagName("c");

  document.getElementById("demo").innerHTML = 'A ' ' + element[0].innerHTML;


}