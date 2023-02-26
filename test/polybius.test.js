// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", ()=>{
    it("should return false when decoding and the number of characters in the string excluding spaces is odd", ()=> {
        const actual = polybius("23229 2239", false)
        expect(actual).to.be.false
    })

    it("should encode the input into numbers", ()=> {
        const actual = polybius("jeff")
        const expected = "42511212"
        expect(actual).to.equal(expected)
    })

    it("should return a string when encoding", ()=> {
        const actual = polybius("jeff")
        expect(actual).to.be.a("string") 
    })

    it("should maintain spaces when encoding", ()=> {
        const actual = polybius("jeff clark")
        const expected = "42511212 3113112452"
        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", ()=> {
        const actual = polybius("Jeff Clark")
        const expected = "42511212 3113112452"
        expect(actual).to.equal(expected)
    })

    it("should convert both 'j' and 'i' into 42 when encoding", ()=> {
        const actual = polybius("jiji")
        const expected = "42424242"
        expect(actual).to.equal(expected)
    })

    it("should decode every 2 numbers into a letter", ()=>{
        const actual = polybius("42511212", false)
        const expected = "ijeff"
        expect(actual).to.equal(expected)
    })

    it("should decode 42 to include both 'i' and 'j'", ()=> {
        const actual = polybius("42", false)
        expect(actual).to.include('i')
        expect(actual).to.include('j')
    })

    it("should maintain spaces when decoding", ()=> {
        const actual = polybius("42511212 3113112452", false)
        const expected = "ijeff clark"
        expect(actual).to.equal(expected)
    })
})