import {expect} from 'chai'
import sort from './L3-1.js'

describe("L3-1", ()=>{
  it("should return an array", ()=> {
    expect(sort([5,6,2])).to.eql([2,5,6])
  })
  it("should return an array", ()=> {
    expect(sort([0,0,0])).to.eql([0,0,0])
  })
})
