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
                backgroundColor: '#6b85de',
                borderColor: '#6b85de',
                borderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 500,
                pointStyle: 'line',
                tension: 0.3
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            interaction: {
                // mode: 'nearest',
                axis: 'x'
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
                backgroundColor: '#ff8484',
                borderColor: '#ff8484',
                borderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 20,
                pointStyle: 'line',
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
                pointHitRadius: 20,
                pointStyle: 'line',
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

function initSummaryChart(active, deaths, recovered){
    const ctx = document.getElementById('summary-chart');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Active',
                'Deaths',
                'Recovered'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [active, deaths, recovered],
                backgroundColor: [
                  '#f98847',
                  '#ff8484',
                  '#8ACA2B'
                ],
                hoverOffset: 5
              }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Summary',
                    font: {
                        size: 20
                    }
                }
            }
        }
    });
}