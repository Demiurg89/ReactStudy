let sliderList = document.querySelector('.slider_items')
const slides = document.querySelectorAll('.slider_item')
let btnPrev = document.querySelector('.btn_prev')
let btnNext = document.querySelector('.btn_next')
let wrapper = document.getElementById('wrapper')
let styleList = window.getComputedStyle(wrapper)
let slideWidth = parseInt(styleList.width)
let temp = sliderList.children.length
let pos = 0
let count = 0
sliderList.style.width = slides.length * slideWidth + 'px'

let dotsList = document.querySelectorAll('input')
let dotPos = 0
let dotPosLast = 0

btnNext.addEventListener('click', nextClick)
btnPrev.addEventListener('click', prevClick)
dotsList.forEach((element) => element.addEventListener('change', dotClick))

function nextClick() {
  dotPosLast = dotPos
  pos++
  dotPos = pos
  if (pos > slides.length - 1) {
    count = count + slideWidth
    let children = sliderList.children

    if (temp > 0) {
      dotPos = dotPos - temp
      temp--
    } else {
      temp = sliderList.children.length
      dotPos = dotPos - temp
      temp--
    }

    sliderList.style.left = -slideWidth + 'px'
    sliderList.insertBefore(children[0], children[slides.length])

    pos--
  }
  requestAnimationFrame(function () {
    dotsList[dotPos].checked = true
    let timer = setInterval(function () {
      btnNext.setAttribute('disabled', 'disabled')
      btnPrev.setAttribute('disabled', 'disabled')
      if (sliderList.style.left == -(slideWidth * pos) + 'px') {
        clearInterval(timer)
        btnNext.removeAttribute('disabled', 'enabled')
        btnPrev.removeAttribute('disabled', 'enabled')
      } else {
        count = count - 5
        sliderList.style.left = count + 'px'
      }
    }, 1)
  })
  console.log(dotPos + 'позиция точки')
  console.log(dotPosLast + 'прошлая позиция точки')
  console.log(pos + 'позиция стрелочки')
}

function prevClick() {
  dotPosLast = dotPos
  pos--
  dotPos = pos

  if (pos < 0) {
    count = count - slideWidth
    let children = sliderList.children
    sliderList.style.left = -slideWidth + 'px'
    sliderList.insertBefore(children[slides.length - 1], children[0])
    pos++
  }
  requestAnimationFrame(function () {
    dotsList[pos].checked = true
    let timer = setInterval(function () {
      btnPrev.setAttribute('disabled', 'disabled')
      btnNext.setAttribute('disabled', 'disabled')
      if (sliderList.style.left == -slideWidth * pos + 'px') {
        clearInterval(timer)
        btnPrev.removeAttribute('disabled', 'enabled')
        btnNext.removeAttribute('disabled', 'enabled')
      } else {
        count = count + 5
        sliderList.style.left = count + 'px'
      }
    }, 1)
  })
}

function dotClick() {
  dotPosLast = dotPos
  for (i = 0; i < dotsList.length; i++) {
    if (dotsList[i].checked) {
      dotPos = i
    }
  }

  pos = dotPos
  if (dotPos < dotPosLast) {
    requestAnimationFrame(function () {
      let timer = setInterval(function () {
        btnPrev.setAttribute('disabled', 'disabled')
        btnNext.setAttribute('disabled', 'disabled')
        if (sliderList.style.left == -slideWidth * dotPos + 'px') {
          clearInterval(timer)
          btnPrev.removeAttribute('disabled', 'enabled')
          btnNext.removeAttribute('disabled', 'enabled')
        } else {
          count = count + 5
          sliderList.style.left = count + 'px'
        }
      }, 1)
    })
  } else {
    requestAnimationFrame(function () {
      dotPosLast = dotPos
      let timer = setInterval(function () {
        btnNext.setAttribute('disabled', 'disabled')
        btnPrev.setAttribute('disabled', 'disabled')
        if (sliderList.style.left == -(slideWidth * dotPos) + 'px') {
          clearInterval(timer)
          btnNext.removeAttribute('disabled', 'enabled')
          btnPrev.removeAttribute('disabled', 'enabled')
        } else {
          count = count - 5
          sliderList.style.left = count + 'px'
        }
      }, 1)
    })
  }
  console.log(dotPos + 'позиция точки')
  console.log(dotPosLast + 'прошлая позиция точки')
  console.log(pos + 'позиция стрелочки')
}
