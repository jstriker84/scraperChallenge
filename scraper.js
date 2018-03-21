var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

  url = 'https://www.walgreens.com/storelocator/find.jsp'

  request(url, function(error, response, html){

    if(!error){

      var $ = cheerio.load(html);

      var name, streetAddress, city, state, zip, hours
      var json = {name: "Walgreens", streetAddress: "", city: "", state: "", zip: "78756", hours: ""};

      //find unique identifiers
      $('.mb0 p0').filter(function(){
        var data =$(this);
        console.log(this);
      })
      //set json object to equal result from unique identifiers
    }

    //use fs library to create json

  })

})

app.listen('3000')

console.log('Magic happens on port 3000');

exports = module.exports = app;
