const newsdiv = document.getElementById("news");

//https://documenter.getpostman.com/view/9992373/SzS7PkXr?version=latest

fetch('https://nepalcorona.info/api/v1/news').then(function(response){
    return response.json();
}).then(function(obj){
    const txtData = JSON.stringify(obj.data);
    data = JSON.parse(txtData);
    const length = data.length;


    for(let i=0;i<length;i++){
        if(data[i].lang === "en"){
            console.log(data[i].image_url);
            newsdiv.innerHTML += 
            "<h2>"+data[i].title+"</h2>"+
            "<img alt=NewsImage src ="+data[i].image_url+">"+
            "<p>"+data[i].summary+"</p><p><a href ="+data[i].url+" target = _blank>Read more</a></p><br><br>";
        }
    }

}).catch(function(error){
    alert("Something went wrong!\nTry refreshing your browser.");
    console.error(error);
});