const request = require("request");
const fs = require("fs");
const target = "https://sytantris.github.io/http-examples/future.jpg";

const requestImage = function () {
  console.log("Requesting file at " + target)
  request.get(target)
  .on("error", function (err) {
    console.log(err);
    throw err;
  })
  .on("response", function (response) {
    if (response.statusCode === 200) {
      console.log ("Resource found!");
    }
  });
}

requestImage();