import React from 'react'
import { AppliedBionicsImages } from '../images'
import { Reactiv, Material, HTML, JS, CSS } from '../logos'
import { Grid } from '@material-ui/core'
import { secondaryStyles } from './secondaryStyles'

const AppliedBionics = () => {
	const classes = secondaryStyles()
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className={classes.header}>APPLIED_BIONICS</h2>
			</div>
			<p className={classes.para}>
				This is a demo for a typical defense contractor website. Applied Bionics
				uses state of the art technology to push the limits of the human body.
				Sometimes those efforts yield monstrous discoveries... Created with
				Material-UI, React, and Lockheed Martin as a reference site.
			</p>
			{AppliedBionicsImages()}
			<h1 className={classes.utilized}>UTILIZED</h1>
			<Grid container className={classes.logoWrapper}>
				{Reactiv()}
				{Material()}
				{HTML()}
				{CSS()}
				{JS()}
			</Grid>
		</div>
	)
}

export default AppliedBionics
