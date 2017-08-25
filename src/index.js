import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { HorizonProvider, Horizon } from 'react-hz'

// intializing horizon client
const horizonInstance = Horizon()

// setting provider, router and rendering entry point to #app
render((
	<HorizonProvider instance={horizonInstance}>
		<Router>
			<App/>
		</Router>
	</HorizonProvider>
), document.getElementById('app'))
