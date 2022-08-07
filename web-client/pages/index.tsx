import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Countdown from '../components/Countdown'

async function doConfetti() {
	const volumeMeterEl = document.querySelector('.fooo')
	const stream = await navigator.mediaDevices.getUserMedia({
		audio: true,
		video: false,
	})
	const audioContext = new AudioContext()
	const mediaStreamAudioSourceNode =
		audioContext.createMediaStreamSource(stream)
	const analyserNode = audioContext.createAnalyser()
	mediaStreamAudioSourceNode.connect(analyserNode)

	const pcmData = new Float32Array(analyserNode.fftSize)
	const onFrame = () => {
		analyserNode.getFloatTimeDomainData(pcmData)
		let sumSquares = 0.0
		for (const amplitude of pcmData) {
			sumSquares += amplitude * amplitude
		}
		volumeMeterEl.value = Math.sqrt(sumSquares / pcmData.length)
		window.requestAnimationFrame(onFrame)
	}
	window.requestAnimationFrame(onFrame)
}

const Home: NextPage = () => {
	const [count, setCount] = useState(10)

	useEffect(() => {
		const timer = setInterval(() => {
			console.log('This will run after 1 second!')

			const newCount = count - 1
			if (newCount >= 0) setCount(newCount)

			if (newCount === 0) {
				doConfetti()
				clearTimeout(timer)
			}
		}, 1000)
		return () => clearTimeout(timer)
	}, [count])

	return (
		<div
			style={{
				display: 'grid',
				height: '100%',
				gridTemplateRows: '1fr auto',
			}}
		>
			<div
				className="primary-view"
				style={{
					margin: 5,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Countdown count={count} />
				<meter
					className="fooo"
					id="volumeMeter"
					high="0.25"
					max="1"
					value="0"
				></meter>
			</div>
			<footer
				style={{
					textAlign: 'center',
					marginBlockEnd: 2,
				}}
			>
				<span>Authored by: </span>
				<a
					className={styles.a}
					href="https://google.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Aaryan
				</a>

				<a
					className={styles.a}
					href="https://edwinkofler.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Edwin
				</a>

				<a
					className={styles.a}
					href="https://google.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Jubril
				</a>
			</footer>
		</div>
	)
}

export default Home
