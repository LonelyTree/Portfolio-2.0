import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Memesum from './packages'
import { mainStyles } from './mainStyles'

export default function Npm() {
	const classes = mainStyles()
	return (
		<div className={classes.projectWrapper}>
			<h1 className={classes.header}>NPM PACKAGES</h1>
			<div className={classes.projectContainer}>
				<ExpansionPanel className={classes.expansion}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						classes={{ expanded: classes.expanded }}
					>
						<Typography className={classes.heading}>Lorem Memesum</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Memesum />
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		</div>
	)
}
