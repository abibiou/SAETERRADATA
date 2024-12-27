const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Amblyseius swirskii' ,
          'Aphidius sp.',
          'Apport de fumier ' ,
          'Bacillus subtilis',
          'Canavalia ensiformis (Fabacées)' ,
          'Coniothyrium minitans',
          'Hyménoptères parasitoïdes' ,
          'Phosphate ferrique' ,
          'Sorgho anti nématodes',
          'Trichoderma atroviride ',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [2,1,7,4,4,2,1,1,2,2],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});