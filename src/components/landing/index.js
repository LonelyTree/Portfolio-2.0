import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'

export default function Landing() {
	const classes = useStyles()
	return (
		<Grid container item className={classes.nameWrapper}>
			<div className={classes.nameContainer}>
				<p className={classes.desc}>Los Angeles, CA / New Orleans, LA</p>
				<h1 className={classes.name}>Alex Hughes</h1>
				<p className={classes.desc}>Happy Little Programs</p>
			</div>
		</Grid>
	)
}
