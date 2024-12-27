const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ 
            'Acaricides',
            'Bactéricides',
            'Favorise les auxilaires',
            'Fongicides',
            'Herbicides',
            'Insecticides',
            'Molluscicides',
            'Nématicides',

        ],
        datasets: [{
            label: 'Nombre de traitement',
            data: [3, 0, 0, 3, 0,14, 0, 0],
            backgroundColor: [
                'rgb(45, 64, 40)',
                'rgb(97, 115, 92)',
                'rgb(164, 176, 156)',
                'rgb(213, 219, 208)',
                '#BCA5CB',
                '#9272A6',
                '#6D2F7F',
                '#440C53',
            ],
        }]
    }
});