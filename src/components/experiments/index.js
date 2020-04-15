import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core'
import NeuroDrome from './neurodrome'

const useStyles = makeStyles((theme) => ({
	projectContainer: {
		width: 'inherit',
	},
	projects: {
		width: '100%',
		textAlign: 'center',
		marginBottom: '30%',
	},
	header: {
		margin: '20%',
		color: theme.palette.primary.main,
	},
	expansion: { background: theme.palette.secondary.main },
}))

export default function Experiments() {
	const classes = useStyles()
	return (
		<div className={classes.projects}>
			<h1 className={classes.header}>EXPERIMENTS</h1>
			<div className={classes.projectContainer}>
				<ExpansionPanel className={classes.expansion}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
					>
						<Typography className={classes.heading}>NeuroDrome</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<NeuroDrome />
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		</div>
	)
}
