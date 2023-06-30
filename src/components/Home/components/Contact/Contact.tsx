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
				<a target='_blank' className={styles.containerImg}>
					<img src={linkedin} alt='go to jeronimo linkedin' />
				</a>
				<a
					target='_blank'
					className={styles.containerImg}
					href='https://github.com/JeroPratto'
				>
					<img src={github} alt='go to jeronimo github' />
				</a>
			</div>
		</div>
	)
}
export default Contact
