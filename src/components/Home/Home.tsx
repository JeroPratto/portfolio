import { useState } from 'react'
import styles from './styles/home.module.css'
import { ProjectList } from './components/ProjectList'
import { MainView } from './components/MainView'
import { Contact } from './components/Contact'
import { motion } from 'framer-motion'

export type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
	const [clicked, setClicked] = useState(false)
	return (
		<>
			<motion.div
				animate={{ scale: clicked ? 0.55 : 1 }}
				transition={{
					duration: 0.6,
				}}
				className={`${styles.container} ${
					clicked ? styles.containerClicked : ''
				}`}
			>
				<MainView clicked={clicked} setClicked={setClicked} />
				<ProjectList clicked={clicked} />
			</motion.div>
			<Contact />
		</>
	)
}

export default Home
