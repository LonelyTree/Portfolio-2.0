import { makeStyles } from '@material-ui/core'

export const secondaryStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		logoWrapper: {
			display: 'inline-flex',
		},
		header: {
			color: theme.palette.background.paper,
			borderBottom: `.4em solid ${theme.palette.primary.main}`,
			fontSize: '5vw',
		},
		para: {
			fontSize: '2vw',
			width: ' 70%',
			margin: '0 auto',
			marginBottom: '2vw',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		logoWrapper: {
			display: 'inline-flex',
		},
		header: {
			color: theme.palette.background.paper,
			borderBottom: `.4em solid ${theme.palette.primary.main}`,
			fontSize: '5vw',
		},
		para: {
			fontSize: '1.8vw',
			width: ' 70%',
			margin: '0 auto',
			marginBottom: '2vw',
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		logoWrapper: {
			display: 'inline-flex',
		},
		header: {
			color: theme.palette.background.paper,
			borderBottom: `.4em solid ${theme.palette.primary.main}`,
			margin: '0 auto',
			fontSize: '3.5vw',
		},
		para: {
			fontSize: '1.1vw',
			width: ' 70%',
			margin: '0 auto',
			marginBottom: '2vw',
			marginTop: '2vw',
		},
	},
	[theme.breakpoints.up('xl')]: {
		logoWrapper: {
			display: 'inline-flex',
		},
		header: {
			color: theme.palette.background.paper,
			borderBottom: `.4em solid ${theme.palette.primary.main}`,
			margin: '0 auto',
			fontSize: '3.5vw',
		},
		para: {
			fontSize: '1.1vw',
			width: ' 70%',
			margin: '0 auto',
			marginBottom: '2vw',
			marginTop: '2vw',
		},
	},
}))
