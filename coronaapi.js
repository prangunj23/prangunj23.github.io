document.addEventListener('DOMContentLoaded', function() {
      
   fetch('https://api.covidtracking.com/v1/us/current.json')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          
       });
              
  });
