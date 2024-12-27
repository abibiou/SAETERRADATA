const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Légumineuses associées au colza' ,
          'Moutarde en interculture courte',
          'Colza précoce en mélange' ,



      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [1,1,2],
          backgroundColor: [
              'rgb(97, 115, 92)',

          ],
          hoverOffset: 4
      }]
  }
});