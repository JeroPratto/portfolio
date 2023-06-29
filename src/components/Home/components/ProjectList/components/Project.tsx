import { ProjectInterface } from '@/models/Project.interface'
import styles from './styles/project.module.css'

export type ProjectProps = {
	project: ProjectInterface
}

const Project: React.FC<ProjectProps> = ({ project }) => {
	return (
		<div className={styles.containerProject}>
			<img
				src={project.urlImage}
				alt={project.description}
				className={styles.image}
			/>
			<div className={styles.containerInfo}>
				<p className={styles.tags}>{project.tags}</p>
				<div className={styles.containerTitleAndDescription}>
					<h2 className={styles.title}>{project.title}</h2>
					<p className={styles.description}>{project.description}</p>
				</div>
				<div className={styles.containerLinks}>
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
				</div>
			</div>
		</div>
	)
}

export default Project
