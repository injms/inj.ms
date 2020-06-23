/* eslint-env mocha */

const expect = require('chai').expect
const assert = require('chai').assert

const formatdate = require('./../../nunjuck-filters/formatdate')

describe('formatdate filter', function () {
  it('should return the date in ISO 8061 format', function () {
    const test = formatdate('2020-06-23T20:07:58.800Z', 'iso')
    const expected = '2020-06-23T20:07:58.800Z'

    expect(test).to.be.equal(expected)
  })

  it('should return a human readable date', function () {
    const test = formatdate('2020-06-23T20:07:58.800Z', 'human')
    const expected = '23rd June 2020'

    expect(test).to.be.equal(expected)
  })

  it('should throw an error if no date or date format string is given', function () {
    assert.throw(
      function () { formatdate() },
      Error,
      'No date parameter',
    )
  })

  it('should throw an error if no date format string is given', function () {
    const testDateString = '2020-06-23T20:07:58.800Z'

    assert.throw(
      function () { formatdate(testDateString) },
      Error,
      'No date format parameter',
    )
  })

  it('should throw an error if no date string is given', function () {
    let testDateString // undefined

    assert.throw(
      function () { formatdate(testDateString, 'human') },
      Error,
      'No date parameter',
    )
  })
})
