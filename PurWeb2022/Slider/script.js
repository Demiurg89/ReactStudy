let sliderList = document.querySelector('.slider_items')
const slides = document.querySelectorAll('.slider_item')
let btnPrev = document.querySelector('.btn_prev')
let btnNext = document.querySelector('.btn_next')
let wrapper = document.getElementById('wrapper')
let styleList = window.getComputedStyle(wrapper)
let slideWidth = parseInt(styleList.width)
let pos = 0
let count = 0
sliderList.style.width = slides.length * slideWidth + 'px'

btnNext.addEventListener('click', nextClick)
btnPrev.addEventListener('click', prevClick)

function nextClick() {
  pos++
  if (pos > slides.length - 1) {
    count = count + slideWidth
    let children = sliderList.children
    sliderList.style.left = -slideWidth + 'px'
    sliderList.insertBefore(children[0], children[slides.length])
    pos--
  }
  requestAnimationFrame(function () {
    let timer = setInterval(function () {
      btnNext.setAttribute('disabled', 'disabled')
      btnPrev.setAttribute('disabled', 'disabled')
      if (sliderList.style.left == -(slideWidth * pos) + 'px') {
        clearInterval(timer)
        btnNext.removeAttribute('disabled', 'enabled')
        btnPrev.removeAttribute('disabled', 'enabled')
      } else {
        count = count - 1
        sliderList.style.left = count + 'px'
      }
    }, 1)
  })
}

function prevClick() {
  pos--

  if (pos < 0) {
    count = count - slideWidth
    let children = sliderList.children
    sliderList.style.left = -slideWidth + 'px'
    sliderList.insertBefore(children[slides.length - 1], children[0])
    pos++
  }
  requestAnimationFrame(function () {
    let timer = setInterval(function () {
      btnPrev.setAttribute('disabled', 'disabled')
      btnNext.setAttribute('disabled', 'disabled')
      if (sliderList.style.left == -slideWidth * pos + 'px') {
        clearInterval(timer)
        btnPrev.removeAttribute('disabled', 'enabled')
        btnNext.removeAttribute('disabled', 'enabled')
      } else {
        count = count + 1
        sliderList.style.left = count + 'px'
      }
    }, 1)
  })
}
