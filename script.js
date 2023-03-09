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


const lightBox = document.querySelector('.light-box')
const lbImageContainer = document.querySelector('.lb-image-container')

const lbThumbOne = document.querySelector('.lb-thumbnail-1')
const lbThumbTwo = document.querySelector('.lb-thumbnail-2')
const lbThumbThree = document.querySelector('.lb-thumbnail-3')
const lbThumbFour = document.querySelector('.lb-thumbnail-4')

const lbClose = document.querySelector('.lb-close-btn')
const lbPrevious = document.querySelector('.lb-left-btn')
const lbNext = document.querySelector('.lb-right-btn')

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
lightBox.addEventListener('click', lbthumbSwitcher)



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

function nextImage(e){
    imageNumber++
    if(imageNumber == 5){imageNumber = 1}
    if(e.target.classList[0] == "close-btn"){
        imageContainer.style.backgroundImage = "url(images/image-product-"+ imageNumber +".jpg)"
    }

}

function prevImage(e){
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
    console.log(e.target.classList[0])
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
    if(e.target.classList[0] == "image-container" && window.innerWidth >= 800){
        lightBox.classList.remove('display-none')
    }
}

function clearActiveLBThumb(){
    lbThumbOne.classList.remove('thumbnail-active')
    lbThumbTwo.classList.remove('thumbnail-active')
    lbThumbThree.classList.remove('thumbnail-active')
    lbThumbFour.classList.remove('thumbnail-active')
}

function lbthumbSwitcher(e){
    console.log(e.target.classList[0])
    if(e.target.classList[0] == "lb-thumbnail-1"){
        lbImageContainer.style.backgroundImage = "url(images/image-product-1.jpg)"
        clearActiveLBThumb()
        lbThumbOne.classList.add('thumbnail-active')
    }
    if(e.target.classList[0] == "lb-thumbnail-2"){
        lbImageContainer.style.backgroundImage = "url(images/image-product-2.jpg)"
        clearActiveLBThumb()
        lbThumbTwo.classList.add('thumbnail-active')
    }
    if(e.target.classList[0] == "lb-thumbnail-3"){
        lbImageContainer.style.backgroundImage = "url(images/image-product-3.jpg)"
        clearActiveLBThumb()
        lbThumbThree.classList.add('thumbnail-active')
    }
    if(e.target.classList[0] == "lb-thumbnail-4"){
        lbImageContainer.style.backgroundImage = "url(images/image-product-4.jpg)"
        clearActiveLBThumb()
        lbThumbFour.classList.add('thumbnail-active')
    }

    if(e.target.classList[0] == "lb-right-btn"){
        lbImageContainer.style.backgroundImage = "url(images/image-product-4.jpg)"
        clearActiveLBThumb()
        thumbFour.classList.add('thumbnail-active')
    }
    if(e.target.classList[0] == "lb-left-btn"){
        lbImageContainer.style.backgroundImage = "url(images/image-product-4.jpg)"
        clearActiveLBThumb()
        thumbFour.classList.add('thumbnail-active')
    }
    if(e.target.classList[0] == "lb-close-btn"){
        lightBox.classList.add('display-none')
        clearActiveLBThumb()
    }
    if(e.target.classList[0] == "light-box"){
        lightBox.classList.add('display-none')
        clearActiveLBThumb()
    }
}