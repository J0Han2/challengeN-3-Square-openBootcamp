
const rootStyles = document.documentElement.style

const randomColor = () => Math.floor(Math.random() * 255)
const backgroundColor = () => {
  const RED =  randomColor()
  const GREEN = randomColor()
  const BLUE = randomColor()

  return `${RED} ${GREEN} ${BLUE}`
}

function Square() {
  // const squareBGColor = BackgroundColor()
  // const squareBGColor = rootStyles.setProperty(property, value)
  console.log(randomColor, backgroundColor)
	return <div className='square'>Square</div>
}

export default Square
