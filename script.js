//! Selectors

const menuButton = document.querySelector('.menu-btn')
const closeButton = document.querySelector('#close-btn')
const navigation = document.querySelector('.navigation')
const navigationLinks = document.querySelectorAll('.links')

console.log(Array.from(navigation))

//! Constants

//! Event Listeners

menuButton.addEventListener('click', displayMenu)
closeButton.addEventListener('click', closeMenu)
navigation.addEventListener('click', e => {
    console.log(e.target.classList[0])
    if(e.target.classList[0] == "links-1"){
        console.log('memes')
        document.querySelector('.links-1').innerText = "cooolections"
    }
})

//! Functions

function test() {
    console.log('webos')
}

function displayMenu(){
    navigation.classList.remove('display-none')
}

function closeMenu(){
    navigation.classList.add('display-none')
}


