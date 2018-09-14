import {expect} from 'chai'
import findSmallCount from './L1-7.js'

describe("L1-7, how many numbers are smaller than N ?", ()=> {
  it("should return a number", ()=>{
    expect(findSmallCount([1,2,3,4], 100)).to.eql(4)
  })
  it("should return a number", ()=>{
    expect(findSmallCount([1,2,3,4,5], 0)).to.eql(0)
  })
  it("should return a number", ()=>{
    expect(findSmallCount([1,2,3,4], 4)).to.eql(3)
  })
  it("should return a number", ()=>{
    expect(findSmallCount([1,3,4], 2)).to.eql(1)
  })
  it("should return a number", ()=>{
    expect(findSmallCount([1,3,4], 4)).to.eql(2)
  })
})