import { makeStyles } from '@material-ui/core'

export const secondaryStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		logoWrapper: {
			display: 'inline-flex',
			background: theme.palette.background.paper,
			boxShadow: 'inset 0 0 1em #000000',
		},
		header: {
			color: theme.palette.background.paper,
			borderBottom: `.4em solid ${theme.palette.primary.main}`,
			fontSize: '7vw',
		},
		para: {
			fontSize: '3vw',
			width: ' 70%',
			margin: '0 auto',
			marginBottom: '4vw',
		},
		utilized: {
			fontSize: '5vw',
			width: '30%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '7vw',
			marginBottom: '2vw',
			color: theme.palette.background.paper,
			borderBottom: `.3em solid ${theme.palette.background.paper}`,
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
		utilized: {
			fontSize: '2.5vw',
			width: '30%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '7vw',
			marginBottom: '2vw',
			color: theme.palette.background.paper,
			borderBottom: `.3em solid ${theme.palette.background.paper}`,
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		logoWrapper: {
			display: 'inline-flex',
			background: theme.palette.background.paper,
			boxShadow: 'inset 0 0 1em #000000',
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
		utilized: {
			fontSize: '2.5vw',
			width: '30%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '5vw',
			marginBottom: '2vw',
			color: theme.palette.background.paper,
			borderBottom: `.3em solid ${theme.palette.background.paper}`,
		},
	},
	[theme.breakpoints.up('xl')]: {
		logoWrapper: {
			display: 'inline-flex',
			background: theme.palette.background.paper,
			boxShadow: 'inset 0 0 1em #000000',
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
		utilized: {
			fontSize: '2vw',
			width: '30%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '5vw',
			marginBottom: '2vw',
			color: theme.palette.background.paper,
			borderBottom: `.3em solid ${theme.palette.background.paper}`,
		},
	},
}))
