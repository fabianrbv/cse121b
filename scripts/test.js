// We can use 1 function*******************


// document.getElementById("myBtn").addEventListener("click", function () {
//     alert("Hello World!");
// });


// We can also use 2 functions to the same button *************


// var x = document.getElementById("myBtn");
// x.addEventListener("click", myFunction);
// x.addEventListener("click", someOtherFunction);

// function myFunction() {
//     alert("Hello World!");
// }

// function someOtherFunction() {
//     alert("This function was also executed!");
// }

// We can also add many events on the same button***************

var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
}