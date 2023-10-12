const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const NumbersValidator = require('../../src/app/numbers_validator');

describe('isNumberEven positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // on video
  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  // on video
  it('should return false when provided with an even number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  // on video
  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  // on video
  it('should return an array of even numbers', () => {
    const validationResults = validator.getEvenNumbersFromArray([2, 4, 6]);
    expect(validationResults).to.deep.equal([2, 4, 6]);
  });

  it('No even numbers inside array', () => {
    const validationResults = validator.getEvenNumbersFromArray([7, 9]);
    expect(validationResults).to.deep.equal([]);
  });

  // on video
  it('should throw an error if array is not full of numbers', () => {
    const arrayOfNumbers = [5, '2', 11, 22];
    expect(() => {
      validator.getEvenNumbersFromArray([arrayOfNumbers]);
    }).to.throw('[5,2,11,22] is not an array of "Numbers"');
  });

  it('should return true when provided with elements that are only numbers', () => {
    const validationResults = validator.isAllNumbers([12, 6, 8, 4]);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with at least one element different from a number', () => {
    const validationResults = validator.isAllNumbers([12, 6, 8, '4']);
    expect(validationResults).to.be.equal(false);
  });

  it('should return an error when provided element is not an array', () => {
    expect(() => {
      validator.isAllNumbers(4);
    }).to.throw('[4] is not an array');
  });

  it('should return true when provided element is an integer', () => {
    const validationResults = validator.isInteger(200);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided element is an integer', () => {
    const validationResults = validator.isInteger(8.5);
    /* eslint-disable no-unused-expressions */
    expect(validationResults).to.be.false;
  });

  it('should return an error when provided element is not a number', () => {
    expect(() => {
      validator.isInteger('lina');
    }).to.throw('[lina] is not a number');
  });

  it('should return an error when provided element is empty', () => {
    expect(() => {
      validator.isInteger();
    }).to.throw(Error);
  });
});
