const request = require('request');
let args = process.argv[2];
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log("URL ERROR");
  } else {
    const data = JSON.parse(body);
    if (data.length < 1) {
      console.log("This kitty does not exist.");
    } else {
      console.log((data[0].description));
    }
  }
});

