const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Operators', () => {
  describe('Example 1', () => {
    beforeEach(async () => {
      const Operator1 = await ethers.getContractFactory('Operators1')
      operator1 = await Operator1.deploy()

      const CallOperatorFxn = await ethers.getContractFactory('callOperatorFxn')
      callOperatorFxn = await CallOperatorFxn.deploy(operator1.address)
    })

    it('demonstrates basic math', async () => {
      expect(await operator1.add(1, 1)).to.equal(2)
      expect(await operator1.sub(1, 1)).to.equal(0)
      expect(await operator1.mul(2, 2)).to.equal(4)
      expect(await operator1.div(4, 2)).to.equal(2)
      expect(await operator1.exp(10, 4)).to.equal(10000)
      expect(await operator1.mod(10, 3)).to.equal(1)
      expect(await operator1.increment(1)).to.equal(2)
      expect(await operator1.decrement(2)).to.equal(1)
      expect(await operator1.mathExample()).to.equal(6)
    })

    // homework
    it('implement math inside function calls', async () => {
      expect(await callOperatorFxn.getSum()).to.equal(2)
      expect(await callOperatorFxn.getSub()).to.equal(0)
      expect(await callOperatorFxn.getMul()).to.equal(25)
      expect(await callOperatorFxn.getDiv()).to.equal(5)
      expect(await callOperatorFxn.getExp()).to.equal(256)
    })
  })

  describe('Example 2', () => {
    it('demonstrates comparison', async () => {
      const Contract = await ethers.getContractFactory('Operators2')
      contract = await Contract.deploy()
      expect(await contract.eq(1, 1)).to.equal(true)
      expect(await contract.eq(2, 1)).to.equal(false)
      expect(await contract.notEq(1, 2)).to.equal(true)
      expect(await contract.notEq(1, 1)).to.equal(false)
      expect(await contract.gt(2, 1)).to.equal(true)
      expect(await contract.gt(1, 2)).to.equal(false)
      expect(await contract.lt(1, 2)).to.equal(true)
      expect(await contract.lt(2, 1)).to.equal(false)
      expect(await contract.gtOrEq(2, 1)).to.equal(true)
      expect(await contract.gtOrEq(2, 2)).to.equal(true)
      expect(await contract.gtOrEq(1, 2)).to.equal(false)
      expect(await contract.ltOrEq(1, 2)).to.equal(true)
      expect(await contract.ltOrEq(1, 1)).to.equal(true)
      expect(await contract.ltOrEq(2, 1)).to.equal(false)
      expect(await contract.checkAddress()).to.equal(false)
    })
  })

  describe('Example 3', () => {
    it('demonstrates logical operators', async () => {
      const Contract = await ethers.getContractFactory('Operators3')
      contract = await Contract.deploy()
      expect(await contract.and(true, true)).to.equal(true)
      expect(await contract.and(true, false)).to.equal(false)
      expect(await contract.and(false, false)).to.equal(false)
      expect(await contract.or(true, false)).to.equal(true)
      expect(await contract.or(false, true)).to.equal(true)
      expect(await contract.or(false, false)).to.equal(false)
      expect(await contract.not(true)).to.equal(false)
      expect(await contract.not(false)).to.equal(true)
      expect(await contract.comparisonExample()).to.equal(true)
    })
  })
})
