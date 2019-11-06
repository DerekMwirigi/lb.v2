GraphController = {
    specs: {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Balance',
                data: [2, 29, 5, 5, 2, 3, 10],
                backgroundColor: "rgba(4, 83, 162, 0.5)",
                borderColor: "rgba(4, 83, 162, 0.7)",
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: '#71748d',
                    fontFamily: 'Circular Std Book',
                    fontSize: 12,
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontSize: 12,
                        fontFamily: 'Circular Std Book',
                        fontColor: '#71748d',
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 12,
                        fontFamily: 'Circular Std Book',
                        fontColor: '#71748d',
                    }
                }]
            }
        }
    },
    drawGraph: {
        line: function (elem, specs) {
            var ctx =  document.getElementById(elem).getContext('2d');
            var myChart 
            console.log(ctx)
            myChart = new Chart(ctx, specs);
        }
    }
}