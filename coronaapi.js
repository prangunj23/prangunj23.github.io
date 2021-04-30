document.addEventListener('DOMContentLoaded', function() {
      function thousands_separators(num)
             {
               var num_parts = num.toString().split(".");
               num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
               return num_parts.join(".");
             }
   fetch('https://api.covidtracking.com/v1/us/current.json')
      .then(response => response.json())
      .then(data => {
         
          var localinfo = data[0];
          document.querySelector('.coronadeathsinfo').innerHTML = thousands_separators(localinfo.death) + " people";
          document.querySelector('.coronacasesinfo').innerHTML = thousands_separators(localinfo.positive) + " people";
          
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
	
     fetch('https://api.covidactnow.org/v2/country/US.json?apiKey=8719c95c67b9402fa91ad8eb3677078a')
	.then(response => response.json())
	.then(data => {
	     
	     var vaccineinfo = data;
	     document.querySelector('.firstdose').innerHTML = thousands_separators(vaccineinfo.actuals.vaccinationsInitiated) + " people";
	     document.querySelector('.seconddose').innerHTML = thousands_separators(vaccineinfo.actuals.vaccinationsCompleted) + " people";
});
});
