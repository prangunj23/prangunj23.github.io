document.addEventListener('DOMContentLoaded', function() {
      function thousands_separators(num)
             {
               var num_parts = num.toString().split(".");
               num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
               return num_parts.join(".");
             }
    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff",
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
		}
	})
	.then(response => response.json())
	.then(data => {
	    var globalvaccine = data;
	    document.querySelector('.
     	 });
    fetch('https://api.covidactnow.org/v2/country/US.json?apiKey=8719c95c67b9402fa91ad8eb3677078a')
	.then(response => response.json())
	.then(data => {
	     
	     var vaccineinfo = data;
	     document.querySelector('.firstdose').innerHTML = thousands_separators(vaccineinfo.actuals.vaccinationsInitiated) + " people";
	     document.querySelector('.seconddose').innerHTML = thousands_separators(vaccineinfo.actuals.vaccinationsCompleted) + " people";
	     
         });
   fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
	.then(response => response.json())
	.then(data => {
	
	   var coronainfo = data[209];
	   document.querySelector('.coronacasesinfo').innerHTML = thousands_separators(coronainfo.cases) + " people";
	   document.querySelector('.coronadeathsinfo').innerHTML = thousands_separators(coronainfo.deaths) + " people";
	});

   fetch("https://covid-19-data.p.rapidapi.com/totals", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	      }
      })
      .then(response => response.json())
      .then(data => {
         var globalinfo = data[0];
         document.querySelector('.globaldeathsinfo').innerHTML = thousands_separators(globalinfo.deaths) + " people";
         document.querySelector('.globalcasesinfo').innerHTML = thousands_separators(globalinfo.confirmed) + " people";
});
});
