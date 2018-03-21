var request = require('request');
var rp = require('request-promise');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://www.cvssavingscentral.com/storelocator/SaferCommunities.aspx?zipcode=78756&distance=50', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var name, address, city, state, zip, hours;
    var results = { name: "", address: "", city: "", state: "", zip: "", hours: ""};
    $('#cphGlobal_cphDefault_cphSeasonal_gvStoreList').each(function(i, element){
      var a = $(this);
      //result is the whole table, find td elements:
      name = a.find('td').first().text();
      results.name = name;

      address = a.find('td').first().next().text();
      results.address = address;

      city = a.find('td').first().next().next().text();
      results.city = city;

      state = a.find('td').first().next().next().next().text();
      results.state = state;

      zip = a.find('td').first().next().next().next().next().text();
      results.zip = zip;

      hours = a.find('td').first().next().next().next().next().next().text();
      results.hours = hours;

      console.log(results);

    });
  }

  //create json
  fs.writeFile('output.json', JSON.stringify(results, null, 4), function(err){
    console.log('File created - check directory for output.json');
    if(err){
      console.log(err);
    }
  })
});
