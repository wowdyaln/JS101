import {expect} from 'chai'
import isUpperCase from './L1-5'

describe("L1-5, is the first letter UpperCase ?", ()=> {
  it("should return boolean value.", ()=>{
    expect( isUpperCase("AvidaDov") ).to.be.true
  })
  it("should return boolean value.", ()=>{
    expect( isUpperCase("bvidaDov") ).to.be.false
  })
  it("should return boolean value.", ()=>{
    expect( isUpperCase("") ).to.be.false
  })
  it("should return boolean value.", ()=>{
    expect( isUpperCase("1") ).to.be.false
  })
  it("should return boolean value.", ()=>{
    expect( isUpperCase("\\`&`") ).to.be.false
  })
})
