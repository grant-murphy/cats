const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    const breedDetails = function(breed) {
      // can simply return it (easy peezee, butter squeezy) ...
      return catBreeds[breed];
    }
    console.log(breedDetails);
  });
});