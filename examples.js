// let instructionsNode = document.getElementById('instructions');
// console.log(instructionsNode)

// let buttons = document.getElementsByTagName('button');
// console.log(buttons)

let instructions = document.querySelector('#instructions');
console.log(instructions)
instructions.innerText = "Choose a theme:";
instructions.className = "new-class";
console.log(instructions.className)
// instructions.innerHTML = "<p> Choose a theme: </p>"

let fbButton = document.querySelector('.facebook-button');
// fbButton.className = "new-class"
fbButton.classList.add("pizza-cat")
fbButton.style.background = 'blue'; // same as in-line css styling
fbButton.style.color = 'white';
console.log(fbButton.classList)
console.log(fbButton.className)
console.log(fbButton)

// let buttons = document.querySelectorAll('button')
// console.log(buttons)
// .forEach can be used

// let buttonsByTagName = document.getElementsByTagName('button')
// console.log(buttonsByTagName)
// for loops must be used
		
// function submit(){
//   alert('Post has been submitted!');
// }

// let submitButton = document.querySelector('.submit-button');
// submitButton.addEventListener('click', submit);

	
// Create variable to store the input value
// let inputValue = '';
// Add the event and function to handle the event
// document.getElementById('myInput')
// .addEventListener('change', function(event){
//     inputValue = event.target.value
//     console.log(inputValue);
// });

document.querySelector('header')
.addEventListener('click', () => alert('clicked the header'))
fbButton.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('clicked the facebook button');
})

// let myDiv = document.createElement('div');
// let ourText = document.createTextNode('My div text');
// myDiv.appendChild(ourText);
// console.log(myDiv)

// document.querySelector('main').appendChild(myDiv)
// myDiv.remove();