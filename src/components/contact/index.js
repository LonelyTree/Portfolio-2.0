import React from 'react'
import { Grid, Modal, Backdrop } from '@material-ui/core'
import { useSpring, animated } from 'react-spring/web.cjs'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import NoteIcon from '@material-ui/icons/Note'
import InstagramIcon from '@material-ui/icons/Instagram'
import resume from '../../img/resume.png'
import { useStyles } from './styles'

const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter()
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited()
			}
		},
	})

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	)
})

export default function Contact() {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Grid container className={classes.root}>
			<h1 className={classes.header}>CONTACT</h1>
			<h1 className={classes.name}>Alex Hughes</h1>
			<div className='contact_info'>
				<a href='mailto:alexhugh121@gmail.com' className={classes.contactBy}>
					e: alexhugh121@gmail.com
				</a>
				<h2 className={classes.contactBy}>c: 985.290.9515</h2>
			</div>
			<BottomNavigation showLabels className={classes.bottomNav}>
				<BottomNavigationAction
					label='Resume / CV'
					className={classes.iconWrapper}
					icon={<NoteIcon className={classes.icon} />}
					onClick={handleOpen}
				/>
				<BottomNavigationAction
					label='LinkedIn'
					className={classes.iconWrapper}
					icon={<LinkedInIcon className={classes.icon} />}
					href='https://www.linkedin.com/in/cahworks/'
				/>
				<BottomNavigationAction
					label='GitHub'
					className={classes.iconWrapper}
					icon={<GitHubIcon className={classes.icon} />}
					href='https://github.com/LonelyTree'
				/>
				<BottomNavigationAction
					label='Instagram'
					className={classes.iconWrapper}
					icon={<InstagramIcon className={classes.icon} />}
					href='https://www.instagram.com/onhughes/'
				/>
			</BottomNavigation>
			<a className={classes.jumper} href='#top'>
				Go to top
			</a>
			<Modal
				aria-labelledby='My Resume'
				aria-describedby='A detailed description of my capabilities and projects'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<img
						className={classes.resume}
						src={resume}
						alt='RESUME / CV IN REVISION'
					/>
				</Fade>
			</Modal>
		</Grid>
	)
}
