import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>suniel.me</title>
				<meta name='description' content='Designer/Developer/Stargazer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.main}>
				<main>
					<div className={styles.logo}>
						<svg width='42px' viewBox='0 0 142 154' fill='none'>
							<path d='M142 52V0L94.0229 26.4906L142 52Z' fill='white' />
							<path d='M0.00621194 102L0.000148773 154L47.9801 127.509L0.00621194 102Z' fill='white' />
							<path
								d='M7.89732 13.8391C17.2995 59.805 174.66 55.3567 135.073 138.886C119.238 94.8972 -34.6596 95.3915 7.89732 13.8391Z'
								fill='white'
							/>
						</svg>
					</div>
					<h1 className={styles.title}>Suniel Khatri</h1>
					<p className={styles.description}>Designer/Developer</p>
				</main>

				<footer className={styles.footer}>
					<svg width='18' viewBox='0 0 74 64' fill='none'>
						<path d='M37 0L74 64H0L37 0Z' fill='white' />
					</svg>
					<span>100% recycled pixels.</span>
				</footer>
			</div>
		</div>
	);
}
