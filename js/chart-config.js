function initTotalCassesChart(data){
    let chartLabels = []
    let chartData = []

    data.forEach(item => {
        chartLabels.push(item.date)
        chartData.push(item.total_cases_count)
    })

    const ctx = document.getElementById('total-cases-chart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Total cases',
                data: chartData,
                backgroundColor: '#696969',
                borderColor: '#696969',
                borderWidth: 1,
                pointRadius: 1,
                stepped: true,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Total Casses (Cumulative)',
                    font: {
                        size: 20
                    }
                }
            }
        }
    });
}

function initTotalDeathsChart(data){
    let chartLabels = []
    let chartData = []

    data.forEach(item => {
        console.log(item);
        chartLabels.push(item.date)
        chartData.push(item.deaths_count)
    })

    const ctx = document.getElementById('total-deaths-chart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Deaths',
                data: chartData,
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
                pointRadius: 1,
                stepped: true,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Total Deaths',
                    font: {
                        size: 20
                    }
                }
            }
        }
    });
}

function initTotalRecoveriessChart(data){
    let chartLabels = []
    let chartData = []

    data.forEach(item => {
        console.log(item);
        chartLabels.push(item.date)
        chartData.push(item.recoveries_count)
    })

    const ctx = document.getElementById('total-recovered-chart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Recoveries',
                data: chartData,
                backgroundColor: '#8ACA2B',
                borderColor: '#8ACA2B',
                borderWidth: 1,
                pointRadius: 1,
                stepped: true,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Total Recoveries',
                    font: {
                        size: 20
                    }
                }
            }
        }
    });
}