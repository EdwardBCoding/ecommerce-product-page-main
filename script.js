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
const imageContainer = document.querySelector('.image-container')
const leftButton = document.querySelector('.left-btn')
const rightButton = document.querySelector('.right-btn')
const thumbOne = document.querySelector('.thumbnail-1')
const thumbTwo = document.querySelector('.thumbnail-2')
const thumbThree = document.querySelector('.thumbnail-3')
const thumbFour = document.querySelector('.thumbnail-4')


// console.log(Array.from(navigation))

//! Constants


let imageNumber = 1
let totalAmount = 0

//! Event Listeners

menuButton.addEventListener('click', displayMenu)
closeButton.addEventListener('click', closeMenu)
amountContainer.addEventListener('click', amountCounter) 
cartButton.addEventListener('click', addToCart)
cartIcon.addEventListener('click', toggleCart)
trashCart.addEventListener('click', trash)
leftButton.addEventListener('click', prevImage)
rightButton.addEventListener('click', nextImage)
imageContainer.addEventListener('click', thumbSwitcher)




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

function nextImage(){
    imageNumber++
    if(imageNumber == 5){imageNumber = 1}
    imageContainer.style.backgroundImage = "url(images/image-product-"+ imageNumber +".jpg)"
}

function prevImage(){
    imageNumber--
    if(imageNumber == 0){imageNumber = 4}
    imageContainer.style.backgroundImage = "url(images/image-product-"+ imageNumber +".jpg)"
}

function clearActiveThumb(){
    thumbOne.classList.remove('thumbnail-active')
    thumbTwo.classList.remove('thumbnail-active')
    thumbThree.classList.remove('thumbnail-active')
    thumbFour.classList.remove('thumbnail-active')
}

function thumbSwitcher(e){
    if(e.target.classList[0] == "thumbnail-1"){
        imageContainer.style.backgroundImage = "url(images/image-product-1.jpg)"
        clearActiveThumb()
        thumbOne.classList.add('thumbnail-active')
    }
    if(e.target.classList[0] == "thumbnail-2"){
        imageContainer.style.backgroundImage = "url(images/image-product-2.jpg)"
        clearActiveThumb()
        thumbTwo.classList.add('thumbnail-active')
    }
    if(e.target.classList[0] == "thumbnail-3"){
        imageContainer.style.backgroundImage = "url(images/image-product-3.jpg)"
        clearActiveThumb()
        thumbThree.classList.add('thumbnail-active')
    }
    if(e.target.classList[0] == "thumbnail-4"){
        imageContainer.style.backgroundImage = "url(images/image-product-4.jpg)"
        clearActiveThumb()
        thumbFour.classList.add('thumbnail-active')
    }
}