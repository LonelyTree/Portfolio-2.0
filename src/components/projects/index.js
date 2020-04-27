import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Scifi from './scienceSwitch'
import PNMixy from './mixy'
import BarberShop from './froshsBarbershop'
import Contagion from './contagion'
import AppliedBionics from './appliedBionics'
import { mainStyles } from './mainStyles'

export default function Projects() {
	const classes = mainStyles()
	return (
		<div className={classes.projectWrapper}>
			<h1 className={classes.header}>PROJECTS</h1>
			<div className={classes.projectContainer}>
				<ExpansionPanel className={classes.expansion}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						classes={{ expanded: classes.expanded }}
					>
						<Typography className={classes.heading}>
							Applied Bionics Demo
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<AppliedBionics />
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel className={classes.expansion}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						classes={{ expanded: classes.expanded }}
					>
						<Typography className={classes.heading}>
							Scientific Switcheroo
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Scifi />
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel className={classes.expansion}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						classes={{ expanded: classes.expanded }}
					>
						<Typography className={classes.heading}>
							Party Night Mixy
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<PNMixy />
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel className={classes.expansion}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						classes={{ expanded: classes.expanded }}
					>
						<Typography className={classes.heading}>
							Frosh's Barbershop
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<BarberShop />
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel className={classes.expansion}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						classes={{ expanded: classes.expanded }}
					>
						<Typography className={classes.heading}>
							Contagion Control
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Contagion />
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		</div>
	)
}
