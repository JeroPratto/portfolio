import { ProjectInterface } from '@/models/Project.interface'

const getProjects = (): ProjectInterface[] => {
	const projetcs = [
		{
			urlImage: [
				'/images/ProjectList/samara/samara-portfolio.webp',
				'/images/ProjectList/samara/carousel.webp',
			],
			urlImageMobile: '/images/ProjectList/samara/samara-mobile-portfolio.webp',
			title: 'Samara Backyard',
			tags: '[ REACT / VITE / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/samara-backyard-clon',
			urlDeploy: 'https://samara-backyard-clon.vercel.app/',
			description: 'Samara Backyard Clon',
		},
		{
			urlImage: [
				'/images/ProjectList/cruciblemoments/crucible-paypal.webp',
				'/images/ProjectList/cruciblemoments/crucible-eventbrite.webp',
			],
			urlImageMobile:
				'/images/ProjectList/cruciblemoments/crucible-mobile.webp',
			title: 'Crucible Moments',
			tags: '[ REACT / VITE / TYPESCRIPT / StoryBook]',
			urlGithub: 'https://github.com/JeroPratto/crucible-moments',
			urlDeploy: 'https://cruciblemoments.vercel.app/',
			description: 'Crucible Moments Clon',
		},
		{
			urlImage: [
				'/images/ProjectList/standardbots/standardbots.webp',
				'/images/ProjectList/standardbots/second-image.webp',
			],
			urlImageMobile: '/images/ProjectList/standardbots-mobile.webp',
			title: 'StandardBots',
			tags: '[ REACT / VITE / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/standardbots-clon',
			urlDeploy: 'https://standardbots-clon.vercel.app/',
			description: 'StandardBots Clon',
		},

		//
		{
			urlImage: [
				'/images/ProjectList/cowboy/cowboy-desktop.webp',
				'/images/ProjectList/cowboy/second-image.webp',
			],
			urlImageMobile: '/images/ProjectList/cowboy-mobile.webp',
			title: 'Cowboy',
			tags: '[ REACT / VITE / FRAMER-MOTION ]',
			urlGithub: 'https://github.com/JeroPratto/cowboy-clon',
			urlDeploy: 'https://cowboy-clon.vercel.app/',
			description: 'Cowboy Clon',
		},
		{
			urlImage: [
				'/images/ProjectList/atlas/atlas.webp',
				'/images/ProjectList/atlas/second-image.webp',
			],
			urlImageMobile: '/images/ProjectList/atlasMobile.webp',
			title: 'Atlas',
			tags: '[ REACT / VITE / FRAMER-MOTION ]',
			urlGithub: 'https://github.com/JeroPratto/atlas-clon',
			urlDeploy: 'https://atlas-clon.vercel.app/',
			description: 'Atlas Clon',
		},
		{
			urlImage: [
				'/images/ProjectList/useform/main.webp',
				'/images/ProjectList/useform/second-image.webp',
			],
			urlImageMobile: '/images/ProjectList/useform-mobile.webp',
			title: 'UseForm',
			tags: '[ REACT / VITE / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/useform-clon',
			urlDeploy: 'https://useform-clon.vercel.app/',
			description: 'Useform clon',
		},
		{
			urlImage: [
				'/images/ProjectList/basement/main.webp',
				'/images/ProjectList/basement/second-image.webp',
			],
			urlImageMobile: '/images/ProjectList/basementMobile.webp',
			title: 'Basement',
			tags: '[ NEXTJS / REDUX TOOLKIT / TESTING ]',
			urlGithub: 'https://github.com/JeroPratto/basement-challenge',
			urlDeploy: 'https://basement-challenge-gamma.vercel.app/',
			description: 'Challenge de Basement',
		},
		{
			urlImage: ['/images/ProjectList/theline/main.webp'],
			urlImageMobile: '/images/ProjectList/mobile.webp',
			title: 'The Line',
			tags: '[ VUE.JS / VUETIFY / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/the-line-clon',
			urlDeploy: 'https://the-line-clon.vercel.app/',
			description: 'The Line clon',
		},
		{
			urlImage: ['/images/ProjectList/blog/blog.webp'],
			urlImageMobile: '/images/ProjectList/blogMobile.webp',
			title: 'Blog Personal',
			tags: '[ NEXTJS / TYPESCRIPT / TAILWIND ]',
			urlGithub: 'https://github.com/JeroPratto/blog-personal',
			urlDeploy: 'https://blog-personal-jero.vercel.app/',
			description: 'Un blog de soluciones simples',
		},
		//
		{
			urlImage: ['/images/ProjectList/leibal/leibal.webp'],
			urlImageMobile: '/images/ProjectList/leibal-mobile.webp',
			title: 'Leibal',
			tags: '[ VUE.JS / TYPESCRIPT / PINIA / JEST ]',
			urlGithub: 'https://github.com/JeroPratto/leibal-clon',
			urlDeploy: 'https://leibal-clon.vercel.app/',
			description: 'Leibal clon',
		},
		//
		{
			urlImage: ['/images/ProjectList/meli/meli-1.webp'],
			urlImageMobile: '/images/ProjectList/meliMobile.webp',
			title: 'Mercado Libre',
			tags: '[ REACT / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/mercado-libre',
			urlDeploy: 'https://mercado-libre-zeta.vercel.app/',
			description: 'Clon solo Desktop de Mercado Libre ( maquetado )',
		},
		{
			urlImage: ['/images/ProjectList/infobae/infobae.webp'],
			urlImageMobile: '/images/ProjectList/infobaeMobile.webp',
			title: 'Infobae',
			tags: '[ NEXTJS / TYPESCRIPT ]',
			urlGithub: 'https://github.com/JeroPratto/clon-infobae-publico',
			urlDeploy: 'https://clon-infobae.vercel.app/',
			description: 'Clon de Infobae',
		},
		{
			urlImage: ['/images/ProjectList/portfolio/portfolio.webp'],
			urlImageMobile: '/images/ProjectList/portfolioMobile.webp',
			title: 'Portfolio',
			tags: '[ REACT / TYPESCRIPT]',
			urlGithub: 'https://github.com/JeroPratto/portfolio.git',
			urlDeploy: 'https://portfolio-jeronimo-pratto.vercel.app/',
			description: 'Portfolio',
		},
		{
			urlImage: ['/images/ProjectList/tablero/tablero.webp'],
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
