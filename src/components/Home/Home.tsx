import { useState } from 'react'
import styles from './styles/home.module.css'
import { ProjectList } from './components/ProjectList'
import { MainView } from './components/MainView'
import { Contact } from './components/Contact'

export type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
	const [clicked, setClicked] = useState(false)
	return (
		<>
			<div
				className={`${styles.container} ${
					clicked ? styles.containerClicked : ''
				}`}
			>
				<MainView clicked={clicked} setClicked={setClicked} />
				<ProjectList clicked={clicked} />
			</div>
			<Contact />
		</>
	)
}

export default Home
