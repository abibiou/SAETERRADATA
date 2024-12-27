const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Aphidius sp.',
          'Bacillus amyloliquefaciens ',
          'Encarsia formosa',
          'Eretmocerus mundus ',
          'Feltiella acarisuga ',
          'Huile essentielle agrumes',
          'Hydrogénocarbonate de potassium',
          'Lecanicillium muscarium',
          'Macrolophus pygmaeus',
          'Neoseiulus californicus',
          'Phéromone lépidoptères ',
          'Phytoseiulus persimilis',
          'Soufre',
          'Trichoderma atroviride ',
         

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [2,1,2,2,1,1,2,1,9,1,2,1,3,1],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});