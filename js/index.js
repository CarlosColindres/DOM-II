// Your code goes here

// Number 1
const headerImg = document.querySelectorAll('header img')

headerImg[0].addEventListener('mouseover', () => {
    headerImg[0].classList.add('off')
    headerImg[1].classList.remove('off')
})

headerImg[1].addEventListener('mouseover', () => {
    headerImg[0].classList.remove('off')
    headerImg[1].classList.add('off')
})

//Number 2

document.querySelector('.logo-heading').addEventListener('click', () => {
    document.querySelector('.logo-heading').textContent = 'You clicked me'
})

//Number 3 

document.querySelector('.intro h2').addEventListener('dblclick', () => {
    document.querySelector('.intro h2').textContent = 'You double clicked me'
})

//Number 4 

document.querySelector('.content-section h2').addEventListener('mouseenter', () => {
    document.querySelector('.content-section h2').textContent = 'You mouse enter'
})

//Number 5

document.querySelector('.content-section p').addEventListener('mouseleave', () => {
    document.querySelector('.content-section p').textContent = 'You mouse leave'
})

// Number 6

document.querySelector('.text-content p').addEventListener('auxclick', () => {
    document.querySelector('.text-content p').textContent = 'You Clicked'
})

//Number 7

window.addEventListener('copy', () => {
    document.querySelector('.content-destination p').textContent = 'You Copied'
})

// Number 8 

window.addEventListener('scroll', () => {
    document.querySelector('.content-destination p').textContent = 'You scrolled'
})

//Number 9

window.addEventListener('keydown', () => {
    document.querySelector('.content-destination h2').textContent = 'You pressed a key'
})

//Number 10

window.addEventListener('select', () => {
    document.querySelector('.content-destination h2').textContent = 'The Bus'
})


const aTags = document.querySelectorAll('a')

for(let i = 0; i > aTags.length; i++) {
    aTags[i].addEventListener('click', event => {
        event.preventDefault()
    }) 
}

