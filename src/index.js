import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { HorizonProvider, Horizon } from 'react-hz'

const horizonInstance = Horizon()

render((
	<HorizonProvider instance={horizonInstance}>
		<Router>
			<App/>
		</Router>
	</HorizonProvider>
), document.getElementById('app'))
