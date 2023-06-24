// Your code goes here
//Event.addEventListener('DOMContentLoaded',function())
//console.log("JavaScript is so cool. It lets me add text to my page programmatically." )

const newElement = document.querySelector( 'p' )
console.log(newElement.textContent)
window.addEventListener("DOMContentLoaded", (event) => {
    newElement.textContent = "This is really cool!"
    console.log(newElement.textContent)
   });


