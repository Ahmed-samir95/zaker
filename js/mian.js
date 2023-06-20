// btn to up

let btn = document.querySelector('.btn-up')
let header = document.querySelector('header')

// show btn
window.onscroll = function () {
    if (window.scrollY >= 200) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

// move to up 
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}