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
fbButton.classList.add("new-class")
fbButton.style.color = 'blue' // same as in-line css styling
console.log(fbButton.classList)
console.log(fbButton.className)
console.log(fbButton)


// let buttons = document.querySelectorAll('button')
// console.log(buttons)
// .forEach can be used

// let buttonsByTagName = document.getElementsByTagName('button')
// console.log(buttonsByTagName)
// for loops must be used


