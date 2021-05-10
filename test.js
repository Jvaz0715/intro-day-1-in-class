let expect = chai.expect;

describe("return an empty string", function () {
  it("should return an empty string", function () {
    expect(returnEmptyString()).to.equal("");
  });
});

describe("return a number zero", function () {
  it("should return a number zero", function () {
    expect(returnZeroNumber()).to.equal(0);
  });
});

describe("return an empty array", function () {
  it("should return an empty array", function () {
    expect(returnEmptyArray()).to.be.an.instanceof(Array);
  });
});

describe("return an empty object", function () {
  it("should return an empty object", function () {
    expect(returnEmptyObject()).to.be.an.instanceof(Object);
  });
});

describe("return a abc123 String", function () {
  it("should return an empty string", function () {
    expect(returnAbcString("abc123")).to.equal("abc123");
  });
});

describe("return sum of two parameters", function () {
  it("should return 10", function () {
    expect(returnSumOfTen(5, 5)).to.equal(10);
  });
});

describe("return subtraction of two parameters", function () {
  it("should return 0", function () {
    expect(subtraction(5, 5)).to.equal(0);
  });
});

describe("return multiply of two parameters", function () {
  it("should return 20", function () {
    expect(multiplication(4, 5)).to.equal(20);
  });
});

describe("return division of two parameters", function () {
  it("should return 5", function () {
    expect(division(25, 5)).to.equal(5);
  });
});

describe("return an array with value inside", function () {
  it("should return [1,2,3]", function () {
    expect(returnArray([1, 2, 3])).to.eql([1, 2, 3]);
  });
});

describe("return an array first index of the array element - [1,2,3]", function () {
  it("should return 1", function () {
    expect(returnFirstIndex([1, 2, 3])).to.equal(1);
  });
});

describe("return an array second index of the array element - [1,2,3]", function () {
  it("should return 2", function () {
    expect(returnSecondIndex([1, 2, 3])).to.equal(2);
  });
});

describe("return the length of an array - [1,2,3]", function () {
  it("should return 3", function () {
    expect(returnArrayLength([1, 2, 3])).to.equal(3);
  });
});

describe("return the sum of an array", function () {
  it("should return 6", function () {
    expect(arraySum([1, 2, 3])).to.equal(6);
  });
});

describe("return the subtraction of an array", function () {
  it("should return -6", function () {
    expect(arraySubtraction([1, 2, 3])).to.equal(-6);
  });
});

describe("return the multiplication of an array", function () {
  it("should return 6", function () {
    expect(multiplicationArray([1, 2, 3])).to.equal(6);
  });
});

describe("return the division of an array NOTE: Round the decimal place to third - USE GOOGLE", function () {
  it("should return 0.166", function () {
    expect(divisionArray([1, 2, 3])).to.equal(0.167);
  });
});

describe("return only odds number", function () {
  it("should return [1,3,5]", function () {
    expect(oddArray([1, 2, 3, 4, 5])).to.eql([1, 3, 5]);
  });
});

describe("return only even ", function () {
  it("should return [2,4,6]", function () {
    expect(evenArray([1, 2, 3, 4, 5, 6])).to.eql([2, 4, 6]);
  });
});

describe("Find the right fruits ", function () {
  it("should return [apple, orange]", function () {
    expect(returnFruits(["apple", "pears", "watermelon", "orange"])).to.eql([
      "apple",
      "orange",
    ]);
  });
});
