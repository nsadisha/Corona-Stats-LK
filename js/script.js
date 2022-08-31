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
        //init charts
        const dataSet = getLatestData(data.data, data.data.length)
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

        //init summary chart
        initSummaryChart(data.active, data.deaths, data.recovered)
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

// accordians
const accordianDiv = document.getElementById('accordian-div')

faqList.forEach(faq => {
    accordianDiv.innerHTML += createAccordianItem(faq)
})

function createAccordianItem(item){
    return `
    <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#faq-item-${item.id}">
                ${item.title}
            </button>
        </h2>
        <div id="faq-item-${item.id}" class="accordion-collapse collapse ${item.id == 1 ? "show": "collapsed"}"
            data-bs-parent="#accordian-div">
            <div class="accordion-body">
                ${item.description}
            </div>
        </div>
    </div>`
}