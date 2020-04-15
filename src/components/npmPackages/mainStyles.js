import { makeStyles } from '@material-ui/core'

export const mainStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		projectWrapper: {
			width: '100%',
			textAlign: 'center',
		},
		projectContainer: {
			width: 'inherit',
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: theme.typography.fontWeightRegular,
		},
		header: {
			margin: '20%',
			color: theme.palette.primary.main,
		},
		expansion: {
			background: theme.palette.secondary.main,
			margin: '.5vw',
		},
		expanded: {
			'background': theme.palette.primary.main,
			'& p': { color: theme.palette.primary.main },
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {
		projectWrapper: {
			width: '100%',
			margin: '0 auto',
			textAlign: 'center',
		},
		projectContainer: {
			width: '90%',
			margin: '0 auto',
		},
		heading: {
			fontSize: '3vw',
			fontWeight: theme.typography.fontWeightRegular,
		},
		header: {
			margin: '20%',
			color: theme.palette.primary.main,
		},
		expansion: {
			background: theme.palette.secondary.main,
			margin: '.5vw',
		},
		expanded: {
			'background': theme.palette.primary.main,
			'& p': { color: theme.palette.primary.main },
		},
	},
	[theme.breakpoints.between('md', 'lg')]: {
		projectWrapper: {
			width: '100%',
			margin: '0 auto',
			textAlign: 'center',
		},
		projectContainer: {
			width: '50%',
			margin: '0 auto',
		},
		heading: {
			fontSize: '1.5vw',
			fontWeight: theme.typography.fontWeightRegular,
		},
		header: {
			margin: '10%',
			color: theme.palette.primary.main,
			fontSize: '4vw',
		},
		expansion: {
			background: theme.palette.secondary.main,
			margin: '.5vw',
		},
		expanded: {
			'background': theme.palette.primary.main,
			'& p': { color: theme.palette.primary.main },
		},
	},
	[theme.breakpoints.up('xl')]: {
		projectWrapper: {
			width: '100%',
			margin: '0 auto',
			textAlign: 'center',
		},
		projectContainer: {
			width: '50%',
			margin: '0 auto',
		},
		heading: {
			fontSize: '1.5vw',
			fontWeight: theme.typography.fontWeightRegular,
		},
		header: {
			margin: '10%',
			color: theme.palette.primary.main,
			fontSize: '4vw',
		},
		expansion: {
			background: theme.palette.secondary.main,
			margin: '.5vw',
		},
		expanded: {
			'background': theme.palette.primary.main,
			'& p': { color: theme.palette.primary.main },
		},
	},
}))
