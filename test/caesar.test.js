// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", ()=> {
    it("should return false if shift value isn't present", ()=>{
        const actual = caesar("jeff")
        expect(actual).to.be.false
    })
    
    it("should return false if shift value is equal to 0", ()=>{
        const actual = caesar("jeff", 0)
        expect(actual).to.be.false
    })

    it("should return false if shift value is less than -25", ()=>{
        const actual = caesar("jeff", -28)
        expect(actual).to.be.false
    })

    it("should return false if shift value is greater than 25", ()=>{
        const actual = caesar("jeff", 28)
        expect(actual).to.be.false
    })
    
    it("should return the input encoded by letters shifting", ()=>{
        const actual = caesar("jeff", 3)
        const expected = "mhii"
        expect(actual).to.equal(expected)
    })

    it("should maintain spaces and other nonalphabetic symbols in the message", ()=>{
        const actual = caesar("jeff clark", 3)
        const expected = "mhii fodun"
        expect(actual).to.equal(expected)  
    })

    it("should ignore capital letters", ()=>{
        const actual = caesar("JeFf", 3)
        const expected = "mhii"
        expect(actual).to.equal(expected)  
    })

    it("should handle encoding shifts that go past the end of the alphabet",()=>{
        const actual = caesar("boy", 3)
        const expected = "erb"
        expect(actual).to.equal(expected)
    })

    it("should handle decoding shifts that go past the end of the alphabet",()=>{
        const actual = caesar("qxy", -3, false)
        const expected = "tab"
        expect(actual).to.equal(expected)
    })
})