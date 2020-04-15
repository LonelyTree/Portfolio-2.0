import React from 'react'
import Contagion1 from '../../img/contagionControlMapMini.png'
import Contagion2 from '../../img/contagionControlMenuMini.png'
import Global1 from '../../img/globalMenuMini.png'
import Global2 from '../../img/globalTitleMini.png'
import Neuro1 from '../../img/neuroDromeGameMini.png'
import Neuro2 from '../../img/neuroDromeMenuMini.png'
import SafeLa1 from '../../img/safeParkingMenuMini.png'
import SafeLa2 from '../../img/safeParkingSearchMini.png'
import Scifi1 from '../../img/scifiMenu.png'
import Scifi2 from '../../img/scifiAction.png'
import Frosh1 from '../../img/FroshsMain.png'
import Frosh2 from '../../img/FroshsContact.png'
import Mixy1 from '../../img/mixyTop.png'
import Mixy2 from '../../img/mixyBottom.png'
import Lorem1 from '../../img/loremMemesum.png'
import { useStyles } from './styles'
import Grid from '@material-ui/core/Grid'

export const GlobalImages = () => {
	const classes = useStyles()
	return (
		<div className='imgholder'>
			<div className='img1'>
				<img
					className='imgsrc'
					src={Global1}
					rel='preload'
					name='Global1'
					alt='Global Main Menu'
				/>
				<a href='https://github.com/LonelyTree/GLOBAL'>
					<p className={classes.links}>GITHUB</p>
				</a>
			</div>
			<div className='img2'>
				<img
					className='imgsrc'
					src={Global2}
					rel='preload'
					alt='Global Main Page'
				/>
				<a href='https://lonelytree.github.io/GLOBAL/'>
					<p className={classes.links}>LIVE</p>
				</a>
			</div>
		</div>
	)
}

export const ContagionImages = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.imgHolder}>
			<div className='img1'>
				<a href='https://github.com/LonelyTree/Contagion-Control'>
					<img
						className={classes.imgSource}
						src={Contagion1}
						alt='Contagion Main Map'
					/>
				</a>
				<a href='https://github.com/LonelyTree/Contagion-Control'>
					<p className={classes.links}>GITHUB</p>
				</a>
			</div>
			<div className='img2'>
				<a href='https://lonelytree.github.io/Contagion-Control/'>
					<img
						className={classes.imgSource}
						src={Contagion2}
						alt='Contagion in depth menu'
					/>
				</a>
				<a href='https://lonelytree.github.io/Contagion-Control/'>
					<p className={classes.links}>LIVE</p>
				</a>
			</div>
		</Grid>
	)
}
export const NeuroDromeImages = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.imgHolder}>
			<div className='img1'>
				<a href='https://github.com/LonelyTree/NEURO_DROME'>
					<img
						className={classes.imgSource}
						src={Neuro1}
						alt='Neuro Drome arena'
					/>
				</a>
				<a href='https://github.com/LonelyTree/NEURO_DROME'>
					<p className={classes.links}>GITHUB</p>
				</a>
			</div>
			<div className='img2'>
				<a href='https://lonelytree.github.io/NEURO_DROME/'>
					<img
						className={classes.imgSource}
						src={Neuro2}
						alt='Neuro Drome Main Page'
					/>
				</a>
				<a href='https://lonelytree.github.io/NEURO_DROME/'>
					<p className={classes.links}>LIVE</p>
				</a>
			</div>
		</Grid>
	)
}
export const SafeLAImages = () => {
	const classes = useStyles()
	return (
		<div className='imgholder'>
			<div className='img1'>
				<img className='imgsrc' src={SafeLa1} alt='Safe Parking Menu' />
				<a href='https://github.com/LonelyTree/Safe-Parking-LA'>
					<p className={classes.links}>GITHUB</p>
				</a>
			</div>
			<div className='img2'>
				<img
					className='imgsrc'
					src={SafeLa2}
					alt='Safe Parking Search Function'
				/>
				<a href='https://lonelytree.github.io/Safe-Parking-LA/'>
					<p className={classes.links}>LIVE</p>
				</a>
			</div>
		</div>
	)
}
export const ScifiImages = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.imgHolder}>
			<div className='img1'>
				<a href='https://github.com/LonelyTree/Scientific-Switcheroo/tree/master'>
					<img
						className={classes.imgSource}
						src={Scifi1}
						alt='Scientific Switcheroo Menu'
					/>
				</a>
				<a href='https://github.com/LonelyTree/Scientific-Switcheroo/tree/master'>
					<p className={classes.links}>GITHUB</p>
				</a>
			</div>
			<div className='img2'>
				<a href='https://lonelytree.github.io/Scientific-Switcheroo/'>
					<img
						className={classes.imgSource}
						src={Scifi2}
						alt='Scientific Switcheroo Game'
					/>
				</a>
				<a href='https://lonelytree.github.io/Scientific-Switcheroo/'>
					<p className={classes.links}>LIVE</p>
				</a>
			</div>
		</Grid>
	)
}
export const FroshsBarbershopImages = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.imgHolder}>
			<div className='img1'>
				<a href='https://github.com/LonelyTree/FroshsBarberShop'>
					<img
						className={classes.imgSource}
						src={Frosh1}
						alt='Froshs Barbershop Menu'
					/>
				</a>
				<a href='https://github.com/LonelyTree/FroshsBarberShop'>
					<p className={classes.links}>GITHUB</p>
				</a>
			</div>
			<div className='img2'>
				<a href='https://lonelytree.github.io/FroshsBarberShop/'>
					<img
						className={classes.imgSource}
						src={Frosh2}
						alt='Froshs Barbershop Contact Page'
					/>
				</a>
				<a href='https://lonelytree.github.io/FroshsBarberShop/'>
					<p className={classes.links}>LIVE</p>
				</a>
			</div>
		</Grid>
	)
}
export const MixyImages = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.imgHolder}>
			<div className='img1'>
				<a href='https://github.com/LonelyTree/PartyNightMixy'>
					<img
						className={classes.imgSource}
						src={Mixy1}
						alt='Party Night Mixy Top'
					/>
				</a>
				<a href='https://github.com/LonelyTree/PartyNightMixy'>
					<p className={classes.links}>GITHUB</p>
				</a>
			</div>
			<div className='img2'>
				<a href='https://lonelytree.github.io/PartyNightMixy/'>
					<img
						className={classes.imgSource}
						src={Mixy2}
						alt='Party Night Mixy Bottom'
					/>
				</a>
				<a href='https://lonelytree.github.io/PartyNightMixy/'>
					<p className={classes.links}>LIVE</p>
				</a>
			</div>
		</Grid>
	)
}
export const LoremMemesum = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.imgHolder}>
			<div className='img1'>
				<a href='https://github.com/LonelyTree/Lorem-Memesum#readme'>
					<img
						className={classes.imgSource}
						src={Lorem1}
						alt='Lorem Memesum Instructions'
					/>
				</a>
				<a href='https://github.com/LonelyTree/Lorem-Memesum#readme'>
					<p className={classes.links}>GITHUB</p>
				</a>
			</div>
		</Grid>
	)
}
