import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		skillWrapper: {},
		skillsList: {
			margin: '0 auto',
			wordSpacing: '.2em',
			textAlign: 'center',
			fontSize: '2.5vw',
			width: '80%',
		},
		skillHeader: {
			textAlign: 'center',
			width: '100%',
			color: theme.palette.primary.main,
			fontSize: '4.5vw',
			margin: '20%',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		skillWrapper: {},
		skillsList: {
			margin: '0 auto',
			wordSpacing: '.2em',
			textAlign: 'center',
			fontSize: '1.5vw',
			width: '80%',
		},
		skillHeader: {
			textAlign: 'center',
			width: '100%',
			color: theme.palette.primary.main,
			fontSize: '4vw',
			margin: '20%',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		skillWrapper: {},
		skillsList: {
			margin: '0 auto',
			wordSpacing: '.2em',
			textAlign: 'center',
			fontSize: '1.5vw',
			width: '80%',
		},
		skillHeader: {
			textAlign: 'center',
			width: '100%',
			color: theme.palette.primary.main,
			fontSize: '4vw',
			margin: '10%',
		},
	},
	[theme.breakpoints.up('xl')]: {
		skillWrapper: {},
		skillsList: {
			margin: '4%',
			wordSpacing: '.2em',
			textAlign: 'center',
			fontSize: '1.5vw',
		},
		skillHeader: {
			textAlign: 'center',
			width: '100%',
			color: theme.palette.primary.main,
			fontSize: '4vw',
		},
	},
}))
