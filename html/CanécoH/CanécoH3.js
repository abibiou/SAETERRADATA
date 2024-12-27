const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          "Le projet contient un seul sous méthode (Canavalia ensiformis (Fabacées), qui a aucun avis émis",

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: ["Aucun avis émis"],
          backgroundColor: [
              'rgb(97, 115, 92)',
          ],
          hoverOffset: 4
      }]
  }
});