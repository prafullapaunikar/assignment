var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [ 30, 15, 15, 12, 10, 8, 5, 5],
            backgroundColor: [ '#003F5C', '#374C80', '#7A5195', '#BC5090', '#EF5675', '#FF764A', '#FFA600', '#939DAC' ],
            label: 'Dataset 1'
        }],
        labels: [ 'Travel', 'Hotels', 'Fule', 'Dining', 'Rentals', 'Wholesale', 'Supplies', 'Other' ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'left',
        },
        rotation: 5 * Math.PI
    }
};

window.onload = function() {
    var ctx = document.getElementById('chart').getContext('2d');
    window.myDoughnut = new Chart(ctx, config);
};