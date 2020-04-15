import React from 'react'
import { ScifiImages } from '../images'
import {
	Reactiv,
	React_Hooks,
	SASS,
	HTML,
	CSS,
	JS,
	Confetti,
	React_Spring,
} from '../logos'
import { Grid } from '@material-ui/core'
import { secondaryStyles } from './secondaryStyles'

const Scifi = () => {
	const classes = secondaryStyles()
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className={classes.header}>SCIENTIFIC_SWITCHEROO</h2>
			</div>
			<p className={classes.para}>
				Scientific Switcheroo is my take on an old logic puzzle. You have a 3ml
				beaker and a 5ml beaker that you can fill from an endless supply of
				water. The problem is to fill one of the jugs with exactly 4ml of water.
				How do you do it? And in less than 7 clicks?
			</p>
			{ScifiImages()}
			<h1 className={classes.utilized}>UTILIZED</h1>
			<Grid container className={classes.logoWrapper}>
				{Reactiv()}
				{React_Hooks()}
				{React_Spring()}
				{Confetti()}
				{SASS()}
				{HTML()}
				{CSS()}
				{JS()}
			</Grid>
		</div>
	)
}

export default Scifi
