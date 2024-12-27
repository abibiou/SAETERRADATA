const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Phosphonates de potassium',
          'Soufre',


      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [1,3],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});