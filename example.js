var dddecode = require("datamatrix-decode");
var biomatrix = require('./index.js');
var $ = document.querySelector.bind(document);

var sample = "samples/" + (window.location.hash.length > 1 ? window.location.hash.slice(1) : "sample1.jpg");
var image = document.createElement("img");

image.onload = function() {
  biomatrix(image, $('#input'), {
    debug: true
  }, function(err, id) {
    if(err) throw err;

    console.log(id);
    for(var i = 0; i < id.length; i++) {
      console.log(JSON.stringify(id[i]));
    }
    console.log(dddecode(id));
  });
};
image.src = sample;
//image.src = "samples/sample1.jpg";
//image.src = "samples/plate1_cropped.jpg";
