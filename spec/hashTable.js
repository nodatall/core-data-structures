import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe.only('HashTable()', () => {
  let hashmazingTable

  beforeEach( () => {
    hashmazingTable = new HashTable()
  })

  context('size()', () => {
    it('should return 0 when empty', () => {
      expect(hashmazingTable.size()).to.equal(0)
    })
  })

  context('hash()', () => {
    it('should return a number', () => {
      expect(HashTable.hash('Jason')).to.be.a('number')
    })

    it('should return the same number given the same input', () => {
      expect(HashTable.hash('Jason')).to.be.equal(507)
      expect(HashTable.hash('Jason')).to.be.equal(507)
      expect(HashTable.hash('Jason')).to.be.equal(507)
    })

    it('it does not always return the same result', () => {
      expect(HashTable.hash('Jason')).to.not.equal(HashTable.hash('Sylvan'))
    })
  })

  context('put()', () => {
    it('should increase the size by 1', () => {
      expect( () => hashmazingTable.put('feelings', 'anger'))
        .to.alter(hashmazingTable.size(), { from: 0, to: 1 })
    })

  })

})
