import { describe, it, beforeEach, afterEach } from "mocha";
import { expect } from "chai";
import NumbersValidator from "../../src/app/numbers_validator.js";

describe("isNumberEven positive test", () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });
  it("should return true when provided with an even number", () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });
  it("should return false when provided with an even number", () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });
  it("should throw an error when provided a string", () => {
    expect(() => {
      validator.isNumberEven("4");
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
  it("should return an array of even numbers", () => {
    const validationResults = validator.getEvenNumbersFromArray([2, 4, 6]);
    expect(validationResults).to.deep.equal([2, 4, 6]);
  });
  it("No even numbers inside array", () => {
    const validationResults = validator.getEvenNumbersFromArray([7, 9]);
    expect(validationResults).to.deep.equal([]);
  });
  it("should throw an error when provided an array without numbers", () => {
    expect(() => {
      validator.getEvenNumbersFromArray([4, "s"]);
    }).to.throw('[4,s] is not an array of "Numbers"');
  });
  it("should return true if all are numbers", () => {
    const validationResults = validator.isAllNumbers([7, 9]);
    expect(validationResults).to.be.equal(true);
  });
  it("should return false if is not an array", () => {
    const validationResults = validator.isAllNumbers([4, "s"]);
    expect(validationResults).to.be.equal(false);
  });
  it("should throw an error when provided an array whet not all are numbers", () => {
    expect(() => {
      validator.isAllNumbers("s");
    }).to.throw("[s] is not an array");
  });
  it("should return true if is an integer", () => {
    const validationResults = validator.isInteger(7);
    expect(validationResults).to.be.equal(true);
  });
  it("should return false if is not an integer", () => {
    const validationResults = validator.isInteger(7.5);
    expect(validationResults).to.be.equal(false);
  });
  it("should throw an error when is not a number", () => {
    expect(() => {
      validator.isInteger("s");
    }).to.throw("[s] is not a number");
  });
});
