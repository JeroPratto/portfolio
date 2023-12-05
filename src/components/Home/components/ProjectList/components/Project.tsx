import { ProjectInterface } from '@/models/Project.interface'
import styles from './styles/project.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import ProjectInfo from './ProjectInfo'

export type ProjectProps = {
	project: ProjectInterface
}

const Project: React.FC<ProjectProps> = ({ project }) => {
	const [isHovered, setIsHovered] = useState(false)
	const variants = {
		hover: { opacity: 0.35 },
		notHover: { opacity: 1 },
	}
	return (
		<AnimatePresence>
			<motion.div
				className={styles.containerProject}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<picture>
					<source srcSet={project.urlImageMobile} media='(max-width: 800px)' />
					<motion.img
						src={project.urlImage}
						alt={project.description}
						className={styles.image}
						variants={variants}
						animate={isHovered ? 'hover' : 'notHover'}
						transition={{ duration: 0.3, ease: 'linear' }}
					/>
				</picture>
				<ProjectInfo isHovered={isHovered} project={project} />
			</motion.div>
		</AnimatePresence>
	)
}

export default Project
