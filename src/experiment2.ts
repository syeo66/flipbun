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

      const end1 = selected.getBoundingClientRect()
      const end2 = elm.getBoundingClientRect()

      const dx1 = end1.left - start1.left
      const dy1 = end1.top - start1.top
      const dx2 = end2.left - start2.left
      const dy2 = end2.top - start2.top

      selected.animate(
        [
          {
            transformOrigin: 'top left',
            transform: `translate(${-dx1}px, ${-dy1}px)`,
          },
          {
            transformOrigin: 'top left',
            transform: 'none',
          },
        ],
        { duration: 400, fill: 'both', easing: 'ease-in-out' }
      )

      elm.animate(
        [
          {
            transformOrigin: 'top left',
            transform: `translate(${-dx2}px, ${-dy2}px)`,
          },
          {
            transformOrigin: 'top left',
            transform: 'none',
          },
        ],
        { duration: 400, fill: 'both', easing: 'ease-in-out' }
      )

      selected.classList.remove('selected')
    })
  })
}

export default experiment2
