const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Arrays', () => {
  describe('Example 1', () => {
    it('demonstrates array initialization & types', async () => {
      const Contract = await ethers.getContractFactory('Arrays1')
      let contract = await Contract.deploy()
      // Arrays are 0-based index
      expect(await contract.array1(0)).to.equal(1)
      expect(await contract.array1(1)).to.equal(2)
      expect(await contract.array1(2)).to.equal(3)

      // Note: this will fail because it's not initialized with default values
      // expect(await contract.array2(0)).to.equal(0)

      expect(await contract.array3(0)).to.equal(0)
      expect(await contract.array3(1)).to.equal(0)
      expect(await contract.array3(9)).to.equal(0)

      expect(await contract.array4(0)).to.equal('apple')
      expect(await contract.array4(1)).to.equal('banana')
      expect(await contract.array4(2)).to.equal('carrot')

      // Note: this will fail because it's not initialized with default values
      // expect(await contract.array5(0)).to.equal(0)

      expect(await contract.array6(0)).to.equal('')
      expect(await contract.array6(1)).to.equal('')
      expect(await contract.array6(9)).to.equal('')

      expect(await contract.array7(0)).to.equal(false)
      expect(await contract.array7(2)).to.equal(false)
      expect(await contract.array7(4)).to.equal(false)

      expect(await contract.array8(0)).to.equal(65536)
      expect(await contract.array8(1)).to.equal(-20000)

      expect(await contract.array9(0)).to.equal('0x')
      expect(await contract.array10(9)).to.equal(
        '0x0000000000000000000000000000000000000000'
      )
    })
  })

  describe('Example 2', () => {
    it('demonstrates functions', async () => {
      const Contract = await ethers.getContractFactory('Arrays2')
      let contract = await Contract.deploy()

      // Array is empty at the start
      expect(await contract.length()).to.equal(0)

      // Add some items
      await contract.push(1)
      await contract.push(2)
      await contract.push(3)

      // Check length after
      expect(await contract.length()).to.equal(3)

      // Get the whole array
      let array = await contract.getArray()
      expect(array[0]).to.equal(1)
      expect(array[1]).to.equal(2)
      expect(array[2]).to.equal(3)

      // Read items from contract
      expect(await contract.array(0)).to.equal(1)
      expect(await contract.get(0)).to.equal(1)

      // Remove last item
      await contract.pop()
      expect(await contract.length()).to.equal(2)

      // Delete first item
      await contract.remove(0)
      expect(await contract.length()).to.equal(2) // preserves length
      expect(await contract.array(0)).to.equal(0) // resets to default value
    })
  })

  describe('Homework', () => {
    it('manipulates more arrays & data types', async () => {
      const Contract = await ethers.getContractFactory('Arrays3')
      let contract = await Contract.deploy()

      // Array is empty at the start
      expect(await contract.length()).to.equal(0)

      // Add some items
      await contract.push('0x04c17b9d3b29a78f7bd062a57cf44fc633e71f85')
      await contract.push('0xd119c392ff3cb8ebb49cbe1fe0800a22b403a8ee')
      await contract.push('0xc39bdf685f289b1f261ee9b0b1b2bf9eae4c1980')

      // Check length after
      expect(await contract.length()).to.equal(3)

      // Get the whole array
      let array = await contract.getArray()
      expect(array[0]).to.equal(
        ethers.utils.getAddress('0x04c17b9d3b29a78f7bd062a57cf44fc633e71f85')
      )
      expect(array[1]).to.equal(
        ethers.utils.getAddress('0xd119c392ff3cb8ebb49cbe1fe0800a22b403a8ee')
      )
      expect(array[2]).to.equal(
        ethers.utils.getAddress('0xc39bdf685f289b1f261ee9b0b1b2bf9eae4c1980')
      )

      // Read items from contract
      expect(await contract.array(0)).to.equal(
        ethers.utils.getAddress('0x04c17b9d3b29a78f7bd062a57cf44fc633e71f85')
      )
      expect(await contract.get(0)).to.equal(
        ethers.utils.getAddress('0x04c17b9d3b29a78f7bd062a57cf44fc633e71f85')
      )

      // Remove last item
      await contract.pop()
      expect(await contract.length()).to.equal(2)

      // Delete first item
      await contract.remove(0)
      expect(await contract.length()).to.equal(2) // preserves length
      expect(await contract.array(0)).to.equal(
        '0x0000000000000000000000000000000000000000'
      ) // resets to default value
    })
  })
})
