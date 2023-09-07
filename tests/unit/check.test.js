const { check } = require('../../src/controllers/check')
const { expect } = require('chai');
const sinon = require('sinon');

describe('checkStatus', () => {
  it('returns a 200 status code', () => {
    // arrange
    // check function would normally get request and response object from express framework
    // but because we are unit testing we need to supply this and it needs to have the same "shape"
    // as what it would in the function
    const request = {}
    // set a spy on the sendStatus method to "watch" if the method id called and with what arguements
    const response = { sendStatus: sinon.spy() }
    
    // act
    // set a spy on the sendStatus method to "watch" if the method id called and with what arguements
    check(request, response)

    // assert
    // check sendStatus method is called once
    expect(response.sendStatus.calledOnce).to.be.true
    // check sendStatus is called with arguement 200
    expect(response.sendStatus.calledWith(200)).to.be.true
  })
})
