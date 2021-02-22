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
         
          const localinfo = data[0];
          document.querySelector('.coronadeathsinfo').innerHTML = thousands_separators(localinfo.death) + " people have died from the coronavirus pandemic this year in the United States";
          document.querySelector('.coronavaccinesinfo').innerHTML = thousands_separators(localinfo.positive) + " people have contracted the coronavirus in the United States";
          
       });  
});