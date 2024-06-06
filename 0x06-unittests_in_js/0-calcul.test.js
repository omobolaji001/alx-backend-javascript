const assert = require('assert');
const calculateNumber = require('./0-calcul');

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
