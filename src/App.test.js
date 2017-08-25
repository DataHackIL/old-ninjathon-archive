import React from 'react'
import App from './App'

// Performing a smoke test on the root component
describe('App', function() {
    it('smoke test', function() {
      let app = shallow(<App/>)
			expect(app).to.not.be.null
    })
})
