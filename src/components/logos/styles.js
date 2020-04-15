import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		logoWrapper: {
			width: '15%',
			margin: '1em',
		},
		logo: { width: '100%' },
		title: { fontSize: '80%' },
	},
	[theme.breakpoints.between('sm', 'md')]: {
		logoWrapper: {
			width: '15%',
			margin: '1em',
		},
		logo: { width: '100%' },
		title: { fontSize: '80%' },
	},
	[theme.breakpoints.between('md', 'lg')]: {
		logoWrapper: {
			width: '10%',
			margin: '1em',
		},
		logo: { width: '100%' },
		title: { fontSize: '80%' },
	},
	[theme.breakpoints.up('xl')]: {
		logoWrapper: {
			width: '10%',
			margin: '1em',
		},
		logo: { width: '100%' },
		title: { fontSize: '80%' },
	},
}))
