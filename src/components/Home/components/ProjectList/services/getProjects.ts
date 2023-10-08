import { ProjectInterface } from '@/models/Project.interface'

const getProjects = (): ProjectInterface[] => {
	const projetcs = [
		{
			urlImage: '/images/ProjectList/basement.webp',
			urlImageMobile: '/images/ProjectList/basementMobile.webp',
			title: 'Basement',
			tags: '[ NEXTJS / REDUX TOOLKIT / TESTING ]',
			urlGithub: 'https://github.com/JeroPratto/basement-challenge',
			urlDeploy: 'https://basement-challenge-gamma.vercel.app/',
			description: 'Challenge de Basement',
		},
		{
			urlImage: '/images/ProjectList/the-line.webp',
			urlImageMobile: '/images/ProjectList/the-line-mobile.webp',
			title: 'The Line',
			tags: '[ VUE.JS / VUETIFY / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/the-line-clon',
			urlDeploy: 'https://the-line-clon.vercel.app/',
			description: 'The Line clon',
		},
		{
			urlImage: '/images/ProjectList/useform.webp',
			urlImageMobile: '/images/ProjectList/useform-mobile.webp',
			title: 'UseForm',
			tags: '[ REACT / VITE / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/useform-clon',
			urlDeploy: 'https://useform-clon.vercel.app/',
			description: 'Useform clon',
		},
		{
			urlImage: '/images/ProjectList/blog.webp',
			urlImageMobile: '/images/ProjectList/blogMobile.webp',
			title: 'Blog Personal',
			tags: '[ NEXTJS / TYPESCRIPT / TAILWIND ]',
			urlGithub: 'https://github.com/JeroPratto/blog-personal',
			urlDeploy: 'https://blog-personal-jero.vercel.app/',
			description: 'Un blog de soluciones simples',
		},
		//
		{
			urlImage: '/images/ProjectList/leibal.webp',
			urlImageMobile: '/images/ProjectList/leibal-mobile.webp',
			title: 'Leibal',
			tags: '[ VUE.JS / TYPESCRIPT / PINIA / JEST ]',
			urlGithub: 'https://github.com/JeroPratto/leibal-clon',
			urlDeploy: 'https://leibal-clon.vercel.app/',
			description: 'Leibal clon',
		},
		//
		{
			urlImage: '/images/ProjectList/meli-1.webp',
			urlImageMobile: '/images/ProjectList/meliMobile.webp',
			title: 'Mercado Libre',
			tags: '[ REACT / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/mercado-libre',
			urlDeploy: 'https://mercado-libre-zeta.vercel.app/',
			description: 'Clon solo Desktop de Mercado Libre ( maquetado )',
		},
		{
			urlImage: '/images/ProjectList/infobae.webp',
			urlImageMobile: '/images/ProjectList/infobaeMobile.webp',
			title: 'Infobae',
			tags: '[ NEXTJS / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/clon-infobae-publico',
			urlDeploy: 'https://clon-infobae.vercel.app/',
			description: 'Clon de Infobae',
		},
		{
			urlImage: '/images/ProjectList/portfolio.webp',
			urlImageMobile: '/images/ProjectList/portfolioMobile.webp',
			title: 'Portfolio',
			tags: '[ REACT / TYPESCRIPT]',
			urlGithub: 'https://github.com/JeroPratto/portfolio.git',
			urlDeploy: 'https://portfolio-jeronimo-pratto.vercel.app/',
			description: 'Portfolio',
		},
		{
			urlImage: '/images/ProjectList/tablero.webp',
			urlImageMobile: '/images/ProjectList/tableroMobile.webp',
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
