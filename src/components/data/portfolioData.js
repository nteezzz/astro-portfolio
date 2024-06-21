/**
 * @SofiDev 
 * @typedef PortafolioData
 * @property {string} imgSrc 
 * @property {string} title 
 * @property {string[]} skills 
 * @property {string} descripcion 
 * @property {string} demoURL 
 * @property {string} repoURL 
 * @property {string} anim
 * @property {number} averageBrightness 

/**
 * @SofiDev 
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: './img/expense-tracker.png',
		title: 'Expense Tracker',
		skills: ['JavaScript', 'Bootstrap','React'],
		descripcion:
			'ReactJS application for tracking to expenses',
		demoURL: 'https://expense-tracker-final-pi.vercel.app/',
		repoURL: 'https://github.com/nteezzz/expense-tracker/tree/main',
		anim: 'fade-right',
	},
	{
		imgSrc: './img/pokemon-app.png',
		title: 'Pokemon App',
		skills: ['JavaScript', 'Tailwind', 'React', 'Redux'],
		descripcion:
			'ReactJS application for pokemon database (similar to the PokeDex), using redux for state management & simple authentication',
		demoURL: 'https://pokemon-app-v2-teal.vercel.app/',
		repoURL: 'https://github.com/nteezzz/pokemon-app-v2',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: './img/to-do-app.png',
		title: 'To-Do App',
		skills: ['JavaScript', 'Tailwind', 'React', 'Redux','Firebase'],
		descripcion:
			'ReactJS application for reminders, using shadcn for UI, redux for state management, firebase for authentication & firestore for database',
		demoURL: 'https://to-do-app-nine-weld.vercel.app/',
		repoURL: 'https://github.com/nteezzz/to-do-app',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: './img/movie-app.png',
		title: 'Movie App',
		skills: ['TypeScript', 'Tailwind', 'React', 'Redux','Firebase'],
		descripcion:
			'React+TS application for movie database, using shadcn for UI, redux for state management, firebase for authentication & firestore for database. Application also tracks user ativity & provides movie suggestions',
		demoURL: 'https://movieflix-app-one.vercel.app/',
		repoURL: 'https://github.com/nteezzz/movieflix-app',
		anim: 'fade-left',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Redux: 'skill-icons:redux',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	TypeScript: 'skill-icons:typescript',
	Firebase: 'skill-icons:firebase',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
