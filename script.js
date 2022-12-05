//! Selectors

const menuButton = document.querySelector('.menu-btn')
const closeButton = document.querySelector('#close-btn')
const navigation = document.querySelectorAll('.links')

console.log(Array.from(navigation))

//! Constants

//! Event Listeners

menuButton.addEventListener('click', displayMenu)
// navigation.addEventListener('click', test)

//! Functions

function test() {
    console.log('webos')
}

function displayMenu(){
    document.querySelector('.navigation').classList.remove('display-none')
}

function closeMenu(){
    
}

