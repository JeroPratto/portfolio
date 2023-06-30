import { ProjectInterface } from '@/models/Project.interface'

const getProjects = (): ProjectInterface[] => {
	const projetcs = [
		{
			urlImage: '/images/ProjectList/basement.webp',
			title: 'Basement',
			tags: '[ NEXTJS / REDUX TOOLKIT / TESTING ]',
			urlGithub: 'https://github.com/JeroPratto/basement-challenge',
			urlDeploy: 'https://basement-challenge-avl6jxuqz-jeropratto.vercel.app',
			description: 'Challenge de Basement',
		},
		{
			urlImage: '/images/ProjectList/blog.webp',
			title: 'Blog Personal',
			tags: '[ NEXTJS / TYPESCRIPT / TAILWIND ]',
			urlGithub: 'https://github.com/JeroPratto/blog-personal',
			urlDeploy: 'https://blog-personal-jero.vercel.app/',
			description: 'Un blog de soluciones simples',
		},
		{
			urlImage: '/images/ProjectList/meli-1.webp',
			title: 'Mercado Libre',
			tags: '[ REACT / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/mercado-libre',
			urlDeploy: 'https://mercado-libre-zeta.vercel.app/',
			description: 'Clon de Mercado Libre',
		},
		{
			urlImage: '/images/ProjectList/infobae.webp',
			title: 'Infobae',
			tags: '[ NEXTJS / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/clon-infobae',
			urlDeploy: '',
			description: 'Clon de Infobae',
		},
		{
			urlImage: '/images/ProjectList/portfolio.webp',
			title: 'Portfolio',
			tags: '[ REACT / TYPESCRIPT]',
			urlGithub: 'https://github.com/JeroPratto/portfolio.git',
			urlDeploy: 'https://portfolio-jeronimo-pratto.vercel.app/',
			description: 'Portfolio',
		},
		{
			urlImage: '/images/ProjectList/tablero.webp',
			title: 'Tablero Kanban',
			tags: '[ REACT / REDUX TOOLKIT / TYPESCRIPT]',
			urlGithub: 'https://github.com/JeroPratto/kanban-board',
			urlDeploy: 'https://kanban-board-phi-snowy.vercel.app/',
			description: 'Tablero totalmente personalizable',
		},
	]
	return projetcs
}
export default getProjects
