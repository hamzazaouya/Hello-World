function sayHi() {

  /*use strict*/

  var firstName = document.getElementById('demo1').value,
      lastName = document.getElementById('demo2').value;

  document.getElementById('demo3').innerHTML =
    "Hello " + "\"<span style='color:red'>" + firstName + " " + lastName + "</span>\"" + " how are you today";
  document.getElementById('demo4').innerHTML =
      "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborum.\"";
}
