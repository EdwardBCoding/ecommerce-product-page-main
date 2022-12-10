//! Selectors

const menuButton = document.querySelector('.menu-btn')
const closeButton = document.querySelector('#close-btn')
const navigation = document.querySelector('.navigation')
// const navigationLinks = document.querySelectorAll('.links')
const amountContainer = document.querySelector('.amount-container')
const amount = document.querySelector('.amount')
const cartButton = document.querySelector('.add-to-cart')
const cartIcon = document.querySelector('.cart-icon')
const cart = document.querySelector('.cart')
const cartContent = document.querySelector('.cart-content')
const cartEmpty = document.querySelector('.empty-cart')
const totalPrice = document.querySelector('.total-price')
const cartAmount = document.querySelector('.total-amount')
const trashCart = document.querySelector('.trash-cart')

// console.log(Array.from(navigation))

//! Constants

let totalAmount = 0

//! Event Listeners

menuButton.addEventListener('click', displayMenu)
closeButton.addEventListener('click', closeMenu)
amountContainer.addEventListener('click', amountCounter) 
cartButton.addEventListener('click', addToCart)
cartIcon.addEventListener('click', toggleCart)
trashCart.addEventListener('click', trash)




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
    if(totalAmount > 0){
        console.log('meme')
        cartEmpty.classList.add('display-none')
        cartAmount.innerText = "x " + totalAmount
        totalPrice.innerText = "$" + totalAmount * 125 + ".00"
        cartContent.classList.remove('display-none')
    }
    // if(totalAmount == 0){
    //     cartEmpty.classList.remove('display-none')
    //     cartContent.classList.add('display-none')
    // }
}

function toggleCart(){
    cart.classList.toggle('display-none')
}

function trash(){
    console.log('trashed')
    totalAmount = 0
    cartEmpty.classList.remove('display-none')
    cartContent.classList.add('display-none')
}