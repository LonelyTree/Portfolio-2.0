import React from 'react'
import { MixyImages } from '../images'
import {
	Reactiv,
	React_Hooks,
	Material,
	HTML,
	CSS,
	JS,
	Apollo,
	Graphql,
} from '../logos'
import { Grid } from '@material-ui/core'
import { secondaryStyles } from './secondaryStyles'

const PNMixy = () => {
	const classes = secondaryStyles()
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className={classes.header}>Party Night Mixy</h2>
			</div>
			<p className={classes.para}>
				A fun little app for creating new and exciting cocktails for you and
				your friends!
			</p>
			{MixyImages()}
			<h1 className={classes.utilized}>UTILIZED</h1>
			<Grid container className={classes.logoWrapper}>
				{Reactiv()}
				{React_Hooks()}
				{Material()}
				{HTML()}
				{CSS()}
				{JS()}
				{Apollo()}
				{Graphql()}
			</Grid>
		</div>
	)
}

export default PNMixy
