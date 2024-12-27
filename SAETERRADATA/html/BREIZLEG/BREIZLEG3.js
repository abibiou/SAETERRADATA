const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          "Le projet contient un seul sous méthode Phosphonates de potassium, qui n'a aucun avis émis",

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [],
          backgroundColor: [
              'rgb(97, 115, 92)',
 
          ],
          hoverOffset: 4
      }]
  }
});