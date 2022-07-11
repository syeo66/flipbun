const experiment1 = () => {
  const block1 = document.querySelector<HTMLDivElement>('#block1')

  const positions: Element[] = [
    document.querySelector('.middle'),
    document.querySelector('.end'),
    document.querySelector('.start'),
  ]
  let index = 0

  if (block1) {
    block1.addEventListener('click', () => {
      const start = block1.getBoundingClientRect()

      positions[index].appendChild(block1)

      const end = block1.getBoundingClientRect()

      const dx = end.left - start.left
      const dy = end.top - start.top
      const dh = start.height / end.height
      const dw = start.width / end.width

      block1.animate(
        [
          {
            transformOrigin: 'top left',
            transform: `translate(${-dx}px, ${-dy}px) scale(${dw}, ${dh})`,
          },
          {
            transformOrigin: 'top left',
            transform: 'none',
          },
        ],
        { duration: 400, fill: 'both', easing: 'ease-in-out' }
      )

      index = (index + 1) % positions.length
    })
  }
}

export default experiment1
