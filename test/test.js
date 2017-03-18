import main from '../src/main.js'
import chai from 'chai'
chai.should()

describe('test suite', () => {
  it('works', () => {
    'Test suite is working'.should.equals('Test suite is working')
  })
  it('can access browser\'s code', () => {
    main.should.be.a('function')
  })
  it('main returns "Hello world!"', () => {
    main().should.equals('Hello world!')
  })
})
