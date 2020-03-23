var data;
var length;
var hospitals = {};
var localTreatments = {};
var foreignTreatments = {};

function fetchData(){
    fetch('https://hpb.health.gov.lk/api/get-current-statistical').then(function(response){
    return response.json();
    }).then(function(obj){
        var txtData = JSON.stringify(obj)
        data = JSON.parse(txtData);

        document.getElementById("localNewCases").innerHTML = data.data.local_new_cases;
        document.getElementById("globalNewCases").innerHTML = data.data.global_new_cases;
        document.getElementById("localTotalCases").innerHTML = data.data.local_total_cases;
        document.getElementById("globalTotalCases").innerHTML = data.data.global_total_cases;
        document.getElementById("totalHospitalAdmits").innerHTML = data.data.local_total_number_of_individuals_in_hospitals;
        document.getElementById("globalNewDeaths").innerHTML = data.data.global_new_deaths;
        document.getElementById("totalLocalDeaths").innerHTML = data.data.local_deaths;
        document.getElementById("totalGlobalDeaths").innerHTML = data.data.global_deaths;
        document.getElementById("totalLocalRecovered").innerHTML = data.data.local_recovered;
        document.getElementById("totalGlobalRecovered").innerHTML = data.data.global_recovered;
        document.getElementById("lastUpdate").innerHTML = "Last update: &nbsp"+data.data.update_date_time;

        length = data.data.hospital_data.length;

        for(i=0;i<length;i++){
            hospitals[i] = data.data.hospital_data[i].hospital.name;
            localTreatments[i] = data.data.hospital_data[i].treatment_local;
            foreignTreatments[i] = data.data.hospital_data[i].treatment_foreign;
        }

        document.getElementById("hospitals").innerHTML = "<h1 class=title><u>Hospitals</u></h1><hr width=85% color=grey>";
        for(i=0;i<length;i++){
            document.getElementById("hospitals").innerHTML += "<p class='hoss'>"+(i+1)+") "+hospitals[i]+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp->&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(Local - "+localTreatments[i]+" and Foreign - "+foreignTreatments[i]+")</p>";
        }

    }).catch(function(error){
        alert("Something went wrong!\nTry refreshing your browser.");
        console.error(error);
    });
}

async function refresh(){
    while(true){
        fetchData();
        console.log("updated");
        await sleep(36000);
    }
}

refresh();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
