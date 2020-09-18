// By ZIP code
// Description:
// Please note if country is not specified then the search works for USA as a default.

// API call:
// api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={your api key}
// Parameters:
// zip zip code



$(document).ready(function () {
	console.log("the document is ready");
	function getParkApi() {
  
	  var APIKey = "ed9fCwJU0gPSXKYykERfc3ZS7fe8M7H5foqeV3g2";
	  var queryURL =
		"https://developer.nps.gov/api/v1/parks?parkCode=" +
	  
		"&api_key=" +
		APIKey;
  
		// queryURL = "https://pokeapi.co/api/v2/pokemon/26"
  
	  $.ajax({
		url: queryURL,
		method: "GET",
	  }).then(function (response) {
		console.log(response);
		// response should hold the data for each park q'd
		// var img = response.sprites.front_default;
		// console.log(img);
  
		// reach into the html and grap the el i want
		// $('#pkmn').attr('src', img);
	  });
  
	}
	getParkApi()
  });




























