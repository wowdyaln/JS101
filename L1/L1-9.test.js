import {expect} from 'chai'
import findAllSmall from './L1-9.js'

describe("L1-9, pick all numbers that smaller than N", ()=>{
  it("should return an array contain all numbers", ()=> {
    expect(findAllSmall([1, 3, 5, 4, 2], 4)).to.eql([1,3,2])
    expect(findAllSmall([1, 2, 3], 2)).to.eql([1])
    expect(findAllSmall([1, 2, 3], 10)).to.eql([1,2,3])
    expect(findAllSmall([1, 1, 1, 4, 2], 4)).to.eql([1,1,1,2])
    expect(findAllSmall([1, 3, 5, 4, 2], 0)).to.eql([])
  })
})