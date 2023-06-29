import Magnet from './components/Magnet'
import styles from './styles/mainView.module.css'

export type MainViewProps = {
	clicked: boolean
	setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const MainView: React.FC<MainViewProps> = ({ clicked, setClicked }) => {
	const handleClick = () => {
		setClicked(!clicked)
	}
	return (
		<div
			className={`${styles.containerMain} 
    ${clicked ? styles.containerMainClicked : ''}`}
		>
			<div className={styles.containerInfo}>
				<div className={styles.containerTitle}>
					<h1 className={styles.title}>JERÓNIMO PRATTO</h1>
					<p className={styles.description}>
						FRONTEND DEVELOPER / REACT DEVELOPER
					</p>
				</div>
				<button className={`${styles.button} link`} onClick={handleClick}>
					{clicked ? 'RETURN' : 'ENTER'}
				</button>
			</div>
			<Magnet maxParticles={2500} frequency={10} />
		</div>
	)
}

export default MainView
