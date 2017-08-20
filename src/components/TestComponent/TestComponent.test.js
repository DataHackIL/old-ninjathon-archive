import React from 'react'
import TestComponent from './TestCompnent'

describe('TestComponent', function() {
    it('smoke test', function() {
      let testComponent = shallow(<TestComponent/>)
			expect(testComponent).to.not.be.null
    })
})
