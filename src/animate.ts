interface Bounds {
  left: number
  top: number
  height: number
  width: number
}

const animate = <TElement extends Element, TStart extends Bounds>(elm: TElement, start: TStart) => {
  const end = elm.getBoundingClientRect()

  const dx = end.left - start.left
  const dy = end.top - start.top

  const dh = start.height / (end.height || 1)
  const dw = start.width / (end.width || 1)

  elm.animate(
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
}

export default animate
