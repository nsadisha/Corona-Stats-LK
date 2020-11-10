<template>
<section>
    <h1 class="caption">Global Data</h1>
    <br>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="table-div">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col" class="align-middle">Rank</th>
                            <th scope="col" class="align-middle">Country</th>
                            <th scope="col" class="align-middle">Total Cases</th>
                            <th scope="col" class="align-middle">New Cases</th>
                            <th scope="col" class="align-middle">Total Deaths</th>
                            <th scope="col" class="align-middle">New Deaths</th>
                            <th scope="col" class="align-middle">Active Cases</th>
                            <th scope="col" class="align-middle">Total Recovered</th>
                            <th scope="col" class="align-middle">Critical Cases</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(country, index) in countries" :key="country._id">
                            <th scope="row" v-if="index-1>=1">{{ index-1 }}</th>
                            <td v-if="index-1>=1">{{ country.country }}</td>
                            <td v-if="index-1>=1">{{ country.totalCases}}</td>
                            <td v-if="index-1>=1">{{ country.newCases}}</td>
                            <td v-if="index-1>=1">{{ country.totalDeaths}}</td>
                            <td v-if="index-1>=1">{{ country.newDeaths}}</td>
                            <td v-if="index-1>=1">{{ country.activeCases}}</td>
                            <td v-if="index-1>=1">{{ country.totalRecovered}}</td>
                            <td v-if="index-1>=1">{{ country.criticalCases}}</td>
                            </tr>
                            <tr v-if="countries.length==0"><td colspan="9"><h2 class="loading">Loading..</h2></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name:'GlobalData',
    data(){
        return{
            countries:[]
        }
    },
    mounted(){
        fetch('https://nepalcorona.info/api/v1/data/world')
            .then(response => response.json())
            .then(json => {
                let data = json;
                this.countries = data;
        }).catch(function(error){
            alert("Something went wrong!\nTry refreshing your browser.");
            console.error(error);
        });
  },
}
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");

/* Page css */
.table-div{
        border: solid 1px rgb(116, 116, 116);
        border-radius: 7px;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(13px);
        overflow-x: scroll;
        font-size: 1.2rem;
}

.loading{
    color: black;
    background: none;
}

@media only screen and (max-width:500px){
    .table-div{
        font-size: 1.1rem;
    }
    .loading{
        font-size: 1rem;
    }
}
@media only screen and (max-width:375px){
    .table-div{
        font-size: 1rem;
    }
    .loading{
        font-size: 1rem;
    }
}
</style>