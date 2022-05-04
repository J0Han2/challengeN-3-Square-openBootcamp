import { useEffect, useState } from 'react'
const rootStyles = document.documentElement.style

const randomColor = () => Math.floor(Math.random() * 255)

const backgroundColor = () => {
	const RED = randomColor()
	const GREEN = randomColor()
	const BLUE = randomColor()

	return `rgb(${RED},${GREEN},${BLUE})`
}

function Square() {
	const [isChangeBG, setIsChangeBG] = useState(false)

	const changeBGColor = () =>
		rootStyles.setProperty('--BgSquare', backgroundColor())

	const enableBGColorChange = () => setIsChangeBG(true)
	const disableBGColorChange = () => setIsChangeBG(false)

	useEffect(() => {
		const timerID = !isChangeBG ? null : setInterval(changeBGColor, 1000)

		return () => {
			clearInterval(timerID)
		}
	}, [isChangeBG])

	return (
		<div
			className='square'
			onMouseOver={enableBGColorChange}
			onMouseOut={disableBGColorChange}
      onDoubleClick={disableBGColorChange}
		/>
	)
}

export default Square
