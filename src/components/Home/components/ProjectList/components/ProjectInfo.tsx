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
		<div className={styles.containerInfo}>
			<motion.p
				className={styles.tags}
				variants={variants}
				animate={isHovered ? ' hover' : 'notHover'}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				{project.tags}
			</motion.p>
			<motion.h2
				className={styles.title}
				variants={variants}
				animate={isHovered ? ' hover' : 'notHover'}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				{project.title}
			</motion.h2>
			<motion.p
				className={styles.description}
				variants={variants}
				animate={isHovered ? ' hover' : 'notHover'}
				transition={{ delay: 0.1, duration: 0.5, ease: 'easeInOut' }}
			>
				{project.description}
			</motion.p>
			<motion.div
				className={styles.containerLinks}
				variants={variants}
				animate={isHovered ? ' hover' : 'notHover'}
				transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
			>
				<a
					className={`${styles.link} link`}
					target='_blank'
					href={project.urlGithub}
				>
					GO TO CODE
				</a>
				<a
					className={`${styles.link} link`}
					target='_blank'
					href={project.urlDeploy}
				>
					VISIT THE PROJECT
				</a>
			</motion.div>
		</div>
	)
}

export default ProjectInfo
