//! Selectors

const menuButton = document.querySelector('.menu-btn')
const closeButton = document.querySelector('#close-btn')
const navigation = document.querySelector('.navigation')
// const navigationLinks = document.querySelectorAll('.links')
const amountContainer = document.querySelector('.amount-container')
const amount = document.querySelector('.amount')
const cartButton = document.querySelector('.add-to-cart')

// console.log(Array.from(navigation))

//! Constants

let totalAmount = 0

//! Event Listeners

menuButton.addEventListener('click', displayMenu)
closeButton.addEventListener('click', closeMenu)
amountContainer.addEventListener('click', amountCounter) 
cartButton.addEventListener('click', addToCart)




// navigation.addEventListener('click', e => {
//     console.log(e.target.classList[0])
//     if(e.target.classList[0] == "links-1"){
//         console.log('memes')
//         document.querySelector('.links-1').innerText = "cooolections"
//     }
// })

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

function amountCounter(e){
    console.log(e.target.classList[0])
    if(e.target.classList[0] == "plus"){
        amount.innerText = ++ amount.innerText 
        console.log(amount.innerText)
    }
    if(e.target.classList[0] == "minus"){
        if(amount.innerText == 0){
            return
        }
        amount.innerText = -- amount.innerText 
        console.log(amount.innerText)
    }
}

function addToCart(){
    totalAmount = totalAmount + Number(amount.innerText)
    // totalAmount = Number(totalAmount)
    console.log(totalAmount)
    amount.innerText = "0"
}