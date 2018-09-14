import {expect} from 'chai'
import position from './L1-6'

describe("L1-6, find the first Capital letter and it's index", ()=> {
  it("should return an array, index 0 is a letter, index 1 is the index", ()=>{
    expect( position("bdcApple")).to.eql(["A", 3])
  })
  it("should return an array, index 0 is a letter, index 1 is the index", ()=>{
    expect(position("%%#!@AgabaB")).to.eql(["A", 5])
  })
  it("should return an array, index 0 is a letter, index 1 is the index", ()=>{
    expect( position("AABBBBBB")).to.eql(["A", 0])
  })
  it("should return an array, index 0 is a letter, index 1 is the index", ()=>{
    expect( position("nicK")).to.eql(["K", 3])
  })
  it("should return an array, index 0 is a letter, index 1 is the index", ()=>{
    expect( position("~~.disLike")).to.eql(["L", 6])
  })
})