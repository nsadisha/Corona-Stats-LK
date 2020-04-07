
var table = document.getElementById("country-data");
//global data fetch
fetch('https://nepalcorona.info/api/v1/data/world').then(function(response){
    return response.json();
}).then(function(obj){
    var txtData = JSON.stringify(obj)
    data = JSON.parse(txtData);

    var length = data.length;

    

    for(i=2; i<length; i++){
        var country = data[i].country;
        var totalCases = data[i].totalCases;
        var newCases = data[i].newCases;
        var totalDeaths = data[i].totalDeaths;
        var newDeaths = data[i].newDeaths;
        var activeCases = data[i].activeCases;
        var totalRecovered = data[i].totalRecovered;
        var criticalCases = data[i].criticalCases;

        table.innerHTML += "<tr><td>"+(i-1)+"</td><td>"+country+"</td><td>"+totalCases+"</td><td>"+newCases+"</td><td>"+totalDeaths+"</td><td>"+newDeaths+"</td><td>"+activeCases+"</td><td>"+totalRecovered+"</td><td>"+criticalCases+"</td></tr>";
    }


}).catch(function(error){
    //alert("Something went wrong!\nTry refreshing your browser.");
    console.error(error);
});