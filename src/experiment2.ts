import animate from './animate'

const experiment2 = () => {
  const elms = document.querySelectorAll('#test2 .block')
  elms.forEach((elm) => {
    elm.addEventListener('click', () => {
      const selected = document.querySelector('#test2 .selected')

      if (selected && selected === elm) {
        // deselect element
        selected.classList.remove('selected')
        return
      }

      if (!selected) {
        // select element
        elm.classList.add('selected')
        return
      }

      // swap elements
      const start1 = selected.getBoundingClientRect()
      const start2 = elm.getBoundingClientRect()

      const after = selected.nextSibling
      selected.parentElement.insertBefore(selected, elm)
      selected.parentElement.insertBefore(elm, after)

      animate(selected, start1)
      animate(elm, start2)

      selected.classList.remove('selected')
    })
  })
}

export default experiment2
