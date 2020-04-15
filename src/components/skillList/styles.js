import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		skillWrapper: {},
		skillsList: {
			margin: '4%',
			wordSpacing: '.2em',
			textAlign: 'center',
		},
		skillHeader: {
			textAlign: 'center',
			width: '100%',
			color: theme.palette.primary.main,
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		skillWrapper: {},
		skillsList: {
			margin: '4%',
			wordSpacing: '.2em',
			textAlign: 'center',
			fontSize: '2.2vw',
		},
		skillHeader: {
			textAlign: 'center',
			width: '100%',
			color: theme.palette.primary.main,
			fontSize: '4vw',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
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
