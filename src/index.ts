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

    block1.animate(
      [
        {
          transform: `translate(${-dx}px, ${-dy}px)`,
        },
        {
          transform: 'translate(0px, 0px)',
        },
      ],
      { duration: 400, fill: 'both', easing: 'ease-in-out' }
    )

    index = (index + 1) % positions.length
  })
}
