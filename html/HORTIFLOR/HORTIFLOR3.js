const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Amblydromalus limonicus ' ,
          'Aphidius colemani',
          'Aphidius ervi ' ,
          'Aphidius sp.',
          'Bacillus thuringiensis' ,
          'Chrysoperla carnea',
          'Coniothyrium minitans' ,
          'Extraits hydroalcooliques de plantes + argile + soufre + lithothamme' ,
          'Hydrogénocarbonate de potassium',
          'Lipopeptides  ',
          'Macrocheles robustus' ,
          'Neoseiulus cucumeris' ,
          'Phytoseiulus persimilis',
          'Trichoderma harzianum',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [2,1,1,1,2,1,1,2,1,2,1,2,1,1],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});