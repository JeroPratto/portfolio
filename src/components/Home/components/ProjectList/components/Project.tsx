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
	const isInView = useInView(ref, { once: true })
	const variants = {
		hover: { opacity: 0.35 },
		notHover: { opacity: 1 },
	}
	const variantsContainer = {
		inView: { opacity: 1, scale: 1 },
		notInView: { opacity: 1, scale: 0.95 },
	}
	return (
		<motion.div
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
	)
}

export default Project
