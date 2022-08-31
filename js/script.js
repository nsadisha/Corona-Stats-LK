const nf = Intl.NumberFormat();

//navbar scroll effect
const navBar = document.querySelector('.navbar')
window.addEventListener("scroll", e => {
    if(window.scrollY <= 20){
        navBar.classList.remove('navbar-scroll')
        navBar.classList.add('navbar-dark')
    }else{
        navBar.classList.add('navbar-scroll')
        navBar.classList.remove('navbar-dark')
    }
})

//mobile collaps issue
const links = document.querySelectorAll('.navbar .nav-link')

links.forEach(link => {
    link.addEventListener('click', e => {
        document.querySelector('.navbar-toggler').click()
    })
})

//get stats
window.onload = (e) => {
    // stats
    // fetch('https://hpb.health.gov.lk/api/get-current-statistical').then(obj => {
    //     return obj.json()
    // }).then(data => {
    //     console.log(data);
    // })
    
    //historical
    fetch('https://hpb.health.gov.lk/api/get-statistical-history-data').then(obj => {
        return obj.json()
    }).then(data => {
        const dataSet = getLatestData(data.data, data.data.length)
        console.log(dataSet);
        initTotalCassesChart(dataSet)
        initTotalDeathsChart(dataSet)
        initTotalRecoveriessChart(dataSet)
    })

    //countries
    fetch('https://coronavirus-19-api.herokuapp.com/countries/sri lanka').then(obj => {
        return obj.json()
    }).then(data => {
        // console.log(data);
        setInnerHTML('total-cases-lk', nf.format(data.cases))
        setInnerHTML('total-active-lk', nf.format(data.active))
        setInnerHTML('total-deaths-lk', nf.format(data.deaths))
        setInnerHTML('total-recovered-lk', nf.format(data.recovered))
    })

}

function setInnerHTML(q, v){
    const element = document.getElementById(q)
    element.innerHTML = v
}
function getLatestData(data, count){
    let lastMonth = []
    // console.log(data)
    for(i=0; i<=data.length; i++){
        if(i >= count) break;
        lastMonth.push(data[i])
    }

    return lastMonth.reverse()
}