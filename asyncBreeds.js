// asyncBreeds.js
const fs = require('fs');
const breedDetails = require('./syncBreeds');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (error) {
      return callback(undefined);
    }
    callback(data);
  });
};

const bombay = breedDetailsFromFile('Bombay',(data) => {
  console.log('Return Value: ', data);
});

module.exports = breedDetailsFromFile;