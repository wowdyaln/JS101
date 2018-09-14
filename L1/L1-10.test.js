import {expect} from 'chai'
import sum from './L1-10.js'

describe("L1-10, sum of numbers.", ()=> {
  it("should return a number of sum.", ()=> {
    expect( sum([1,2,3]) ).to.eql(6)
    expect( sum([1,2,3,4,5,6,7,8,9,10]) ).to.eql(55)
    expect( sum([]) ).to.eql(0)
    expect( sum([1,2,-3]) ).to.eql(0)
    expect( sum([-1,-2,-3]) ).to.eql(-6)
    expect(sum([1.1, 2.4, 3.4])).to.eql(6.9)
  })
})