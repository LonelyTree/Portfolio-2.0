import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { Welcome } from './components/forFun'
import Skills from './components/skillList'
import Projects from './components/projects'
import Npm from './components/npmPackages'
import Contact from './components/contact'
import Landing from './components/landing'

const theme = createMuiTheme({
	palette: {
		text: {
			primary: '#DCE1DE',
			secondary: '#9CC5A1',
		},
		primary: {
			main: '#49A078',
		},
		secondary: {
			main: '#216869',
		},
		background: {
			paper: '#1F2421',
			default: '#1F2421',
		},
	},
})

// TODO:

// 1. Add Python notebooks
// 2. Responsive Website
// [theme.breakpoints.down('sm')]: { },
// [theme.breakpoints.between('sm','md')]: { },
// [theme.breakpoints.between('md','lg')]: { },
// [theme.breakpoints.up('xl')]: { },

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Grid container className='App'>
					{Welcome()}
					<Landing />
					<Skills />
					<Projects />
					<Npm />
					<Contact />
				</Grid>
			</ThemeProvider>
		</>
	)
}
