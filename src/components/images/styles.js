import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		root: {},
		imgHolder: {
			'width': '100%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'& a': { textDecoration: 'none' },
		},
		imgSource: {
			width: '100%',
			display: 'hidden',
		},
		links: {
			textDecoration: 'none',
			color: theme.palette.background.paper,
			fontSize: '4vw',
			background: theme.palette.primary.main,
			borderRadius: '.4em',
			width: '25%',
			margin: '0 auto',
			marginTop: '2vw',
			marginBottom: '2vw',
			padding: '.4em',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		root: {},
		imgHolder: {
			'width': '100%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'& a': { textDecoration: 'none' },
		},
		imgSource: {
			width: '100%',
			display: 'hidden',
		},
		links: {
			textDecoration: 'none',
			color: theme.palette.background.paper,
			fontSize: '3vw',
			background: theme.palette.primary.main,
			borderRadius: '.4em',
			width: '25%',
			margin: '0 auto',
			marginTop: '2vw',
			marginBottom: '2vw',
			padding: '.4em',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		root: {},
		imgHolder: {
			'width': '100%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'& a': { textDecoration: 'none' },
		},
		imgSource: {
			width: '50%',
		},
		links: {
			textDecoration: 'none',
			color: theme.palette.background.paper,
			fontSize: '1vw',
			background: theme.palette.primary.main,
			borderRadius: '.4em',
			width: '25%',
			margin: '0 auto',
			marginTop: '2vw',
			marginBottom: '2vw',
			padding: '.4em',
		},
	},
	[theme.breakpoints.up('xl')]: {
		root: {},
		imgHolder: {
			'width': '100%',
			'display': 'inline-flex',
			'flexDirection': 'column',
			'& a': { textDecoration: 'none' },
		},
		imgSource: {
			width: '50%',
			display: 'hidden',
		},
		links: {
			textDecoration: 'none',
			color: theme.palette.background.paper,
			fontSize: '1vw',
			background: theme.palette.primary.main,
			borderRadius: '.4em',
			width: '25%',
			margin: '0 auto',
			marginTop: '2vw',
			marginBottom: '2vw',
			padding: '.4em',
		},
	},
}))
