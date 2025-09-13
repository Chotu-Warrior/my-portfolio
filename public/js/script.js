// var txt;
    if (confirm("Please note that browsers prevent playing sound unless the user interacts with the page first. So, before the test, just click somewhere on the page.")) {
        txt = "You pressed OK!";
        document.getElementById("content").style.display = "block"; // Show content
    } else {
        txt = "You pressed Cancel!";
        document.getElementById("content").style.display = "none"; // Hide content
    }
window.alert(txt);
        // Check if the key pressed is Right click (key code 123)
        document.addEventListener("DOMContentLoaded", function() {
          document.addEventListener("contextmenu", function(e) {
              e.preventDefault();
          });
      });
      document.addEventListener("keydown", function(e) {
          // Check if the key pressed is F12 (key code 123)
          if (e.key === "F12" || e.keyCode === 123) {
              e.preventDefault();
          }
      }); 

// nav links start //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

sections.forEach((section, index) => {
section.addEventListener('mouseover', function () {
console.log(`Hovering over section ${index + 1}`);

if (navLinks[index]) { // Assuming that the order of nav links matches sections
  navLinks[index].classList.add('active');
}
});

section.addEventListener('mouseout', function () {
if (navLinks[index]) {
  navLinks[index].classList.remove('active');
}
});
});
// nav links end //
var i = 0;
var j = 0;
var txt = ['Full Stack Developer','Web Developer','Web Designer','Python Devloper','Script Writer'];
var speed = 200;
function typeWriter() {
if(j< txt.length){
  if (i < txt[j].length) {
    document.getElementById("typing-animation").innerHTML += txt[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log(i)
  }else{
    console.log('thisis else');
    i=0
    j++;
    document.getElementById("typing-animation").innerHTML='';
    typeWriter();
    
  }
}else{
    console.log('second else');
    i=0
    j=0;
    document.getElementById("typing-animation").innerHTML='';
    typeWriter();
}
}
// myLinks //
typeWriter();
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// myLinks end //
// audio start //
const audio = document.getElementById('animtion_audio');
const c = document.querySelector('.c');

c.addEventListener('mouseover', () => {
    audio.play();
});
c.addEventListener('mouseout', () => {
    audio.pause();
    audio.currentTime = 0; // Optional: reset to start
});
const example_audio = document.getElementById('animtion_audio_1');
const sElements = document.querySelectorAll('.example'); // Use querySelectorAll instead of querySelector

sElements.forEach(example => {
  example.addEventListener('mouseover', () => {
      example_audio.play();
  });
  example.addEventListener('mouseout', () => {
      example_audio.pause();
      example_audio.currentTime = 0; // Optional: reset to start
  });
});
// audio end //
