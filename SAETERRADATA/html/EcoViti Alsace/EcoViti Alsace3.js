const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Bacillus amyloliquefaciens ',
          'Gestion de la vigueur et aération de la végétation ',
          'Huile essentielle agrumes',
          'Hydrogénocarbonate de potassium',
          'Mélange vesce avoine graminées et matière organique',
          'Phéromone lépidoptères ',
          'Propolis avec Cu',
          'Purins',
          'Soufre',
          'Stimulateur des défenses',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [1,4,4,1,4,1,1,2,1,1],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});