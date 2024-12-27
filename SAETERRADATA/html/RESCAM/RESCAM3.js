const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Bacillus thuringiensis' ,
          'Mélange fleuri et ligne de maïs',
          'Phéromone diptères' ,
          'Soufre',
          'Spinosad appat' ,
      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [3,2,1,1,3],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});