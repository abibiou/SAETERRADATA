const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Amblydromalus limonicus ' ,
          'Amblyseius swirskii',
          'Chrysoperla carnea' ,
          'Hydrogénocarbonate de potassium' ,
          'Neoseiulus cucumeris',
          'Phytoseiulus persimilis' ,
          'Trichogrammes' ,

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [2,2,2,1,2,1,1],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});