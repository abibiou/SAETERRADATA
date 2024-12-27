const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Acide pélargonique',
          'Bacillus thuringiensis',
          'Glu',
          'Granulovirus',
          'Huiles diverses',
          'Phéromone lépidoptères ',
          'Phosphonates de potassium',
          'Soufre',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [1,1,3,1,1,4,1,2],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});