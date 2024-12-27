const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Acibenzolar-s-methyl' ,
          'Amblyseius swirskii',
          'Aphidius sp.' ,
          'Aubergines ',
          'Bacillus thuringiensis' ,
          'Chrysoperla carnea ',
          'Eretmocerus erimicus' ,
          'Euseius gallicus ' ,
          'Hymémoptères parasitoïdes',
          'Lecanicillium muscarium',
          'Tamarixia upis',
          'Micro-organismes pour biotisation des substrats',
          'Neoseiulus cucumeris',
          'Tagètes ',


      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [1,5,1,1,2,2,1,2,1,1,1,1,1,1],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});