import animate from './animate'

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

      animate(block1, start)

      index = (index + 1) % positions.length
    })
  }
}

export default experiment1
