const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Bacillus thuringiensis' ,
          'Moutarde anti-nématodes' ,
          'Trichogrammes' ,
      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [2,1,2],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});