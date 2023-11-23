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

// azkar filter
let filterBtns = document.querySelector('#filter-btns').children
let azkarContent = document.querySelector('.azkar-content').children

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function() {
      for (let j = 0; j < filterBtns.length; j++) {
          filterBtns[j].classList.remove('active')
      }
      this.classList.add('active')
      let target = this.getAttribute('data-target')

      for (let k = 0; k < azkarContent.length; k++) {
        azkarContent[k].style.display = 'none'
          if (target == azkarContent[k].getAttribute('data-id')) {
            azkarContent[k].style.display = 'block'
          }
          if (target == 'all') {
            azkarContent[k].style.display = 'block'
          }
      }
      
  })
}  









