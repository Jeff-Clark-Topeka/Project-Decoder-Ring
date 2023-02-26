// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("substitution", ()=>{
  it("It returns false if the given alphabet isn't exactly 26 characters long.", ()=> {
      const actual = substitution("thinkful", "fdgsv");
      expect(actual).to.be.false
  })

  it("It returns false if the given alphabet is duplicated", ()=> {
    const actual = substitution("thinkful", "acsdefrgthyuijklopmnbasrf"); 
    expect(actual).to.be.false
})

  it("It correctly translates the given phrase, based on the alphabet given to the function", ()=> {
      const actual = substitution("thinkful", "qwertyuiopasdfghjklzxcvbnm");
      const expected = 'ziofayxs'
      expect(actual).to.equal(expected)
  })

  
  it("It correctly translates the given phrase, based on the alphabet given to the function", ()=> {
    const actual = substitution("secret", "qwertyuiopasdfghjklzxcvbnm");
    const expected = "ltektz"
    expect(actual).to.equal(expected)
})


  it("should maintain spaces when encoding", ()=> {
      const actual = substitution("this is a secret message", "qwertyuiopasdfghjklzxcvbnm");
      const expected = 'ziol ol q ltektz dtllqut'
      expect(actual).to.equal(expected)
  })

  it("should ignore capital letters", ()=> {
      const actual = substitution("This is a secret message", "qwertyuiopasdfghjklzxcvbnm");
      const expected = 'ziol ol q ltektz dtllqut'
      expect(actual).to.equal(expected)
  })
})