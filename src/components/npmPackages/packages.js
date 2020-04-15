import React from 'react'
import { LoremMemesum } from '../images'
import { Grid } from '@material-ui/core'
import { secondaryStyles } from './secondaryStyles'

const Memesum = () => {
	const classes = secondaryStyles()
	return (
		<Grid className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className={classes.header}>LOREM MEMESUM</h2>
			</div>
			<p className={classes.para}>
				An NPM Package that essentially is a lorem ipsum package, but
				substituted with copypasta memes.
			</p>
			{LoremMemesum()}
		</Grid>
	)
}

export default Memesum
