const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Anthocoris nemoralis ' ,
          'Aphidoletes aphidimyza',
          'Bacillus thuringiensis' ,
          'Chrysoperla carnea',
          'Coccinelles ' ,
          'Huiles diverses ',
          'Hymémoptères parasitoïdes' ,
          'Neoseiulus californicus' ,
          'Phytoseiulus persimilis',
          'Syrphes',
          'Tamarixia upis',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [2,1,1,2,2,1,1,2,1,2,2],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});