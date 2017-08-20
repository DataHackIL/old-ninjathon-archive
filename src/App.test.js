import React from 'react'
import App from './App'

describe('App', function() {
    it('smoke test', function() {
      let app = shallow(<App/>)
			expect(app).to.not.be.null
    })
})
