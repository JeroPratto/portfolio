import { ProjectInterface } from '@/models/Project.interface'
import styles from './styles/project.module.css'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ProjectInfo from './ProjectInfo'

export type ProjectProps = {
	project: ProjectInterface
}

const Project: React.FC<ProjectProps> = ({ project }) => {
	const [isHovered, setIsHovered] = useState(false)
	const ref = useRef(null)
	const isInView = useInView(ref)
	const variantsContainer = {
		inView: { opacity: 1, scale: 1 },
		notInView: { opacity: 1, scale: 0.908313 },
	}
	return (
		<motion.a
			href={project.urlDeploy}
			target='_blank'
			className={styles.containerProject}
			variants={variantsContainer}
			animate={isInView ? 'inView' : 'notInView'}
			transition={{ duration: 0.5 }}
			ref={ref}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<picture>
				<source srcSet={project.urlImageMobile} media='(max-width: 800px)' />
				<img
					src={project.urlImage[0]}
					alt={project.description}
					className={`${styles.image} ${styles.mainImage}`}
				/>
				<img
					src={project.urlImage[1] ? project.urlImage[1] : project.urlImage[0]}
					alt={project.description}
					className={`${styles.image} ${styles.secondImage}`}
				/>
			</picture>
			<ProjectInfo isHovered={isHovered} project={project} />
		</motion.a>
	)
}

export default Project
