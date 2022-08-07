import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Countdown.module.css'

interface ICounterdown {
	count: number
}

const Countdown: NextPage = (props: ICounterdown) => {
	return (
		<div className={styles.timew}>
			<span className={styles.span1}>
				<b>{props.count}</b>
			</span>
			<span className={styles.span2}>seconds</span>
		</div>
	)
}

export default Countdown
