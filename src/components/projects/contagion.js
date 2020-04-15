import React from 'react'
import { ContagionImages } from '../images'
import { JQuery, Gmaps, HTML, JS, CSS } from '../logos'
import { Grid } from '@material-ui/core'
import { secondaryStyles } from './secondaryStyles'

const Contagion = () => {
	const classes = secondaryStyles()
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className={classes.header}>CONTAGION_CONTROL</h2>
			</div>
			<p className={classes.para}>
				Study and contain a lethal contagion that has struck one of the world's
				most densly populated cities. Utilize the military, government, and
				public to strategically calm, investigate, and quarantine the infected.
				But be wary: a cascade of fear and death awaits should you make the
				wrong decision.
			</p>
			{ContagionImages()}
			<h1 className={classes.utilized}>UTILIZED</h1>
			<Grid container className={classes.logoWrapper}>
				{Gmaps()}
				{JQuery()}
				{HTML()}
				{CSS()}
				{JS()}
			</Grid>
		</div>
	)
}

export default Contagion
