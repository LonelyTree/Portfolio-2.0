import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		nameWrapper: {
			textAlign: 'center',
			flexDirection: 'column',
			margin: '0 auto',
			height: '100vh',
			width: '100%',
			justifyContent: 'center',
		},
		nameContainer: {},
		name: {
			color: theme.palette.primary.main,
		},
		desc: {
			color: theme.palette.text.primary,
		},
	},

	[theme.breakpoints.between('sm', 'md')]: {
		nameWrapper: {
			textAlign: 'center',
			flexDirection: 'column',
			margin: '0 auto',
			height: '100vh',
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
		},
		nameContainer: {},
		name: {
			color: theme.palette.primary.main,
			fontSize: '3.5em',
		},
		desc: {
			color: theme.palette.text.primary,
			fontSize: '1.2em',
		},
	},

	[theme.breakpoints.between('md', 'lg')]: {
		nameWrapper: {
			textAlign: 'center',
			flexDirection: 'column',
			margin: '0 auto',
			height: '100vh',
			width: '100%',
			justifyContent: 'center',
		},
		nameContainer: {},
		name: {
			color: theme.palette.primary.main,
			fontSize: '5em',
		},
		desc: {
			color: theme.palette.text.primary,
			fontSize: '1.5em',
		},
	},

	[theme.breakpoints.up('xl')]: {
		nameWrapper: {
			textAlign: 'center',
			flexDirection: 'column',
			margin: '0 auto',
			height: '100vh',
			width: '100%',
			justifyContent: 'center',
		},
		nameContainer: {},
		name: {
			color: theme.palette.primary.main,
			fontSize: '4vw',
		},
		desc: {
			color: theme.palette.text.primary,
			fontSize: '1.5vw',
		},
	},
}))
