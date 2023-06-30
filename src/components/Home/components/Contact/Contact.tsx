import styles from './styles/contact.module.css'
import linkedin from './images/linkedin.svg'
import github from './images/github.svg'
const Contact = () => {
	return (
		<div className={styles.container}>
			<a
				href='mailto:jeropratto@yahoo.com.ar'
				className={`${styles.link} link`}
				aria-label='send emial to jeronimo'
			>
				EMAIL
			</a>
			<div className={styles.containerSocials}>
				<a
					target='_blank'
					className={styles.containerImg}
					aria-label='go to jeronimo linkedin'
				>
					<img src={linkedin} alt='' />
				</a>
				<a
					target='_blank'
					className={styles.containerImg}
					href='https://github.com/JeroPratto'
					aria-label='go to jeronimo github'
				>
					<img src={github} alt='' />
				</a>
			</div>
		</div>
	)
}
export default Contact
