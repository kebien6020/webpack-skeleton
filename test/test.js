const chai = require('chai')
const { requireFromBrowser } = require('./util.js')

chai.should()

describe('test suite', () => {
  it('works', () => {
    'Test suite is working'.should.equals('Test suite is working')
  })
  it('can access browser\'s code', () => {
    const main = requireFromBrowser('./main.js')
    main().should.equals('Hello world!')
  })
})
