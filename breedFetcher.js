const request = require('request');
// let args = process.argv[2];
// let URL = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

const fetchBreedDescription = function(breedName, callBack) {
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(URL, (error, response, body) => {
  if (error) {
    callBack(error, response);
  } else {
    const data = JSON.parse(body);
    if (data.length < 1) {
      callBack(null, "This kitty does not exist.");
    } else {
      callBack(null, (data[0].description.trim()));
    }
  }
});

};


module.exports = { fetchBreedDescription };



