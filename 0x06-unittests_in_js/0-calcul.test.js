const calculateNumber = require('./0-calcul');
const assert = require('assert');
const { describe, it } = require('mocha');

describe("calculateNumber", function() {

  it("checks equality", function() {
    result = calculateNumber(2, 5);
    assert.strictEqual(result, 7);
  });

  it("checks if numbers are rounded", function() {
    result = calculateNumber(2.3, 4.6);
    assert.strictEqual(result, 7);
  });
});
