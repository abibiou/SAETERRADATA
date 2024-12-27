const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Phosphonates de potassium',
          'Acide pélargonique',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [1,1],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});