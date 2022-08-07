import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head title="Notes">
				<meta name="description" content="Notes" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
