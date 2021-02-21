document.addEventListener('DOMContentLoaded', function() {
      
   fetch('https://api.covidtracking.com/v1/us/current.json')
      .then(response => response.json())
      .then(data => {
          const deaths = data[0];
          document.querySelector('.coronadeathinfo').innerHTML = deaths.death + " have died from the coronavirus pandemic this year in the United States";
          
       });
              
  });
