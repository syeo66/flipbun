import animate from './animate'

const experiment3 = () => {
  const elms = document.querySelectorAll<HTMLDivElement>('#test3 .block')

  elms.forEach((elm) => {
    elm.addEventListener('click', () => {
      const starts = Array.from(elms).map((e) => e.getBoundingClientRect())

      if (elm.classList.contains('fullscreen')) {
        // deselect element
        elm.classList.remove('fullscreen')
      } else {
        // select element
        elm.classList.add('fullscreen')
      }

      elm.style.zIndex = '10'

      elms.forEach((e, i) => {
        if (e !== elm) {
          e.style.zIndex = '0'
        }

        animate(e, starts[i])
      })
    })
  })
}

export default experiment3
