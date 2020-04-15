import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'

export default function Skills() {
	const classes = useStyles()
	return (
		<Grid container className={classes.skillWrapper}>
			<h3 className={classes.skillHeader}>SKILLS</h3>
			<p className={classes.skillsList}>
				HTML/CSS | JAVASCRIPT | REACT | REACT HOOKS | PYTHON | C# | JQUERY |
				MARKDOWN | APOLLO | GRAPHQL | FIREBASE | NODE.JS | EXPRESS | MONGODB |
				MONGOOSE | UNITY3D | MATERIAL UI | SASS | STYLED-COMPONENTS | EJS |
				JINJA | POSTGRESQL | MYSQL | DOCKER | WATSON API | GOOGLE API | NPM |
				BASH | FLASK | THREE.JS | D3 | UNITY MACHINE-LEARNING AGENTS | PANDAS |
				NUMPY | MATPLOTLIB | BOKEH | APACHE ZEPPELIN | IBM DB2 | GITHUB | GIT |
				VSCODE | SUBLIME | JUPYTER NOTEBOOKS | IBM WATSON STUDIO | SLACK |
				AIRTABLE | TODOIST
			</p>
		</Grid>
	)
}
