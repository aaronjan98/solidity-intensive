const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Structs', () => {
  describe('Example 1', () => {
    it('demonstrates read / write / update behavior of structs', async () => {
      const Contract = await ethers.getContractFactory('Structs1')
      let contract = await Contract.deploy()

      await contract.add1('A Tale of Two Cities', 'Charles Dickens')
      await contract.add2('Les Miserables', 'Victor Hugo')
      await contract.add3('The Hobbit', 'J.R.R. Tolkien')

      let result = await contract.get(0)
      expect(result[0]).to.equal('A Tale of Two Cities')
      expect(result[1]).to.equal('Charles Dickens')
      expect(result[2]).to.equal(false)

      // TOOD: homework - check the other books
      let book2 = await contract.get(1)
      expect(book2[0]).to.equal('Les Miserables')
      expect(book2[1]).to.equal('Victor Hugo')
      expect(book2[2]).to.equal(false)

      let book3 = await contract.get(2)
      expect(book3[0]).to.equal('The Hobbit')
      expect(book3[1]).to.equal('J.R.R. Tolkien')
      expect(book3[2]).to.equal(false)

      // Complete a book
      await contract.complete(0)
      result = await contract.get(0)
      expect(result[2]).to.equal(true)
    })
  })
})
