import {expect} from 'chai'
import findSmallerTotal from './L1-8.js'

describe("L1-8, sum of the number smaller than N.", ()=>{
  it("should return a sum of number", ()=> {
    expect(findSmallerTotal([3, 2, 5, 8, 7], 999)).to.eql(25)
    expect(findSmallerTotal([3, 2, 5, 8, 7], 0)).to.eql(0)
    expect(findSmallerTotal([1, 2, 3], 1)).to.eql(0)
    expect(findSmallerTotal([1, 2, 3], 3)).to.eql(3)
  })
})