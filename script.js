const colors = ["#afc1fb", "#95efdb", "#D1F0ED", "#c3ef95", "#d4cbd0"]
// using math.random multiolied by colors length to select random number for index
const randomColor = Math.floor(Math.random() * colors.length);
//using DOM to make the body background a random color from the arrary 
const color = document.body.style.backgroundColor=colors[randomColor];


// const textColor = document.getElementsByClassName("box").style.color=("white");
// const color = colors[randomColor];

function showLinks() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onscroll = function() {stickNav()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("nav");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("nav");
  }
}


    window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
    formbutton("create", { action: "https://formspree.io/f/xbjppkpb" })