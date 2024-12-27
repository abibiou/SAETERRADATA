const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Glu',
          'Glycine-bétaïne',
          'Huiles diverses',
          'Hydrogénocarbonate de potassium',
          'Kaolin',
          'Nichoir',
          'Perchoir',
          'Phéromone diptères',
          'Phéromone lépidoptères ',
          'Soufre',
          
      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [4,1,2,1,2,2,1,1,4,2],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});