import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/JohnstonCode/johnstoncode.git',
		user: {
			name: 'Chris Johnston',
			email: 'chris@johnstoncode.com'
		},
		dotfiles: true
	},
	() => console.log('Deploy Complete!')
);
