const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Neoseiulus cucumeris',
          'Phytoseiulus persimilis',
          'Amblyseius swirskii',
          'Feltiella acarisuga',
          'Oligota spp.',
          'Orius spp.',
          'Stethorus spp.',
          'Syrphes',
          'Chrysoperla carnea',
          'Hydrogénocarbonate de potassium',
          'Soufre',
          'Chitosan et pectine',
          'Bacillus amyloliquefaciens ',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [3,4,2,1,1,1,1,3,3,3,2,1,1],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});