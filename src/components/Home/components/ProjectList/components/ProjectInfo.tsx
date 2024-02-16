import { ProjectInterface } from '@/models/Project.interface'
import styles from './styles/ProjectInfo.module.css'
import { motion } from 'framer-motion'

export type ProjectInfoProps = {
	isHovered: boolean
	project: ProjectInterface
}
const ProjectInfo: React.FC<ProjectInfoProps> = ({ isHovered, project }) => {
	const variants = {
		hover: { opacity: 1, x: 0 },
		notHover: { opacity: 0, x: -20 },
	}
	return (
		<motion.div
			className={styles.containerInfo}
			variants={variants}
			animate={isHovered ? ' hover' : 'notHover'}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
		>
			<p className={styles.tags}>{project.tags}</p>
			<h2 className={styles.title}>{project.title}</h2>
			<div className={styles.containerLinks}>
				<a
					className={`${styles.link} link`}
					target='_blank'
					href={project.urlDeploy}
				>
					VISIT THE PROJECT
				</a>
				<a
					className={`${styles.link} link`}
					target='_blank'
					href={project.urlGithub}
				>
					GO TO CODE
				</a>
			</div>
		</motion.div>
	)
}

export default ProjectInfo
