const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Steinernema carpocapsae',
          'Kaolin',
          'Phéromone lépidoptères  ',
          'Granulovirus',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [6, 6, 6, 6],
          backgroundColor: [
              'rgb(97, 115, 92)',
          ],
          hoverOffset: 4
      }]
  }
});