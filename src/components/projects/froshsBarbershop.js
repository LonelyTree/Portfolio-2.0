import React from 'react'
import { FroshsBarbershopImages } from '../images'
import { Reactiv, React_Spring, HTML, JS, CSS, SASS } from '../logos'
import { Grid } from '@material-ui/core'
import { secondaryStyles } from './secondaryStyles'

const BarberShop = () => {
	const classes = secondaryStyles()
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className={classes.header}>FROSH'S_BARBERSHOP</h2>
			</div>
			<p className={classes.para}>
				The main page for a family run barber shop. I created the logo using
				Canva and Adobe Photoshop as well as Adobe Illustrator. The page is
				styled with React Springs and SASS. Utilizing unSplash for royalty free
				images I was able to capture the essence of this quaint, but immensely
				popular barbershop.
			</p>
			{FroshsBarbershopImages()}
			<h1 className={classes.utilized}>UTILIZED</h1>
			<Grid container className={classes.logoWrapper}>
				{Reactiv()}
				{React_Spring()}
				{SASS()}
				{HTML()}
				{CSS()}
				{JS()}
			</Grid>
		</div>
	)
}

export default BarberShop
