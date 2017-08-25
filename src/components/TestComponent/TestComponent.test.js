import React from 'react'
import TestComponent from './TestCompnent'

// Performing a smoke test on the component
describe('TestComponent', function() {
    it('smoke test', function() {
      let testComponent = shallow(<TestComponent/>)
			expect(testComponent).to.not.be.null
    })
})
