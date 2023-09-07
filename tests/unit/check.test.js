const { check } = require('../../src/controllers/check')
const { expect } = require('chai');
const sinon = require('sinon');

describe('checkStatus', () => {
  it('returns a 200 status code', () => {
    // arrange
    const request = {}
    const response = { sendStatus: sinon.spy() }
    
    // act
    check(request, response)

    // assert
    expect(response.sendStatus.calledOnce).to.be.true
    expect(response.sendStatus.calledWith(200)).to.be.true
  })
})
