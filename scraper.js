var request = require('request');
var rp = require('request-promise');
var cheerio = require('cheerio');

var options = {
  uri: 'https://www.walgreens.com/storelocator/find.jsp',
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
.then(($) => {
  console.log($);
})
.catch((err)=>{
  console.log(err);
});
