import React from 'react'
import Project from './components/Project'
import styles from './styles/projectList.module.css'
import getProjects from './services/getProjects'

export type ProjectListProps = {
	clicked: boolean
}

const ProjectList: React.FC<ProjectListProps> = ({ clicked }) => {
	const projectList = getProjects()
	return (
		<div
			className={`${styles.containerProjects} ${
				clicked ? styles.containerProjectsClicked : ''
			}`}
		>
			{projectList.map((project) => (
				<Project key={project.urlGithub} project={project} />
			))}
		</div>
	)
}

export default ProjectList
