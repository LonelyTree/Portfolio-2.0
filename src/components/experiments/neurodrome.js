import React from 'react'
import { NeuroDromeImages } from '../images'
import {
	Unity,
	MlAgents,
	Reactiv,
	Csharp,
	Python,
	Node,
	Express,
	MongoDB,
	Mongoose,
	Postgres,
	StyledComp,
	SASS,
	HTML,
	CSS,
	JS,
} from '../logos'
import { Grid, makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
	logoWrapper: {
		display: 'inline-flex',
	},
})
const NeuroDrome = () => {
	const classes = useStyles()
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className='projectName'>NEURO_DROME</h2>
			</div>
			<p className='para'>
				An experimentation with Artificial Intelligence and Machine Learning.
				Utilizing TensorFlow and Python, train your AI to compete in an arena
				with Unity's AI for the battle of logical domination.
			</p>
			{NeuroDromeImages()}
			<Grid container className={classes.logoWrapper}>
				{Unity()} {MlAgents()} {Reactiv()} {Csharp()} {Python()} {Node()}{' '}
				{Express()} {MongoDB()}
				{Mongoose()} {Postgres()} {StyledComp()} {SASS()} {HTML()}
				{CSS()}
				{JS()}
			</Grid>
		</div>
	)
}

export default NeuroDrome
