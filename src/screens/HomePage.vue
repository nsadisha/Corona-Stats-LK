<template>
  <section>
    <div>
      <h1 class="caption">Corona Statisticals</h1>

        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="box">
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-5">
                                <table>
                                    <tr>
                                    <th colspan="3">Local</th>
                                    </tr>
                                    <tr>
                                    <td class="d-title">New cases</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{localNewCases}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">Total cases</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{localTotalCases}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">Active cases</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{localActiveCases}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">Total hospital admits</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{totalHospitalAdmits}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">Total deaths</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{totalLocalDeaths}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">Total recovered</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{totalLocalRecovered}}</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-md-5">
                                <div class="spacer"></div>
                                <table>
                                    <tr>
                                    <th colspan="3">Global</th>
                                    </tr>
                                    <tr>
                                    <td class="d-title">New cases</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{globalNewCases}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">Total cases</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{globalTotalCases}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">New deaths</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{globalNewDeaths}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">Total Deaths</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{totalGlobalDeaths}}</td>
                                    </tr>
                                    <tr>
                                    <td class="d-title">Total recovered</td>
                                    <td align="center">-</td>
                                    <td class="d-info">{{totalGlobalRecovered}}</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <hr width="100%" color="grey"/>

                                <p class="det">Reference: <a href="https://hpb.health.gov.lk/en/api-documentation" target="_blank">API</a> from Health Promotion Bureau - Sri Lanka</p>
                                <div class="lastUpdate">
                                <p>{{ lastUpdate }}</p>
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="box">
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <h1  class="title"><u>Hospitals</u></h1>
                                <!-- <div class="lan-opt">
                                    <table id="lan">
                                        <tr>
                                            <td><input type="radio" id="eng" value="true" v-model="isEng" checked></td>
                                            <td><label for="eng" class="sp">English</label></td>
                                            <td><input type="radio" id="sin" value="false" v-model="isEng"></td>
                                            <td><label for="sin">Sinhala</label></td>
                                        </tr>
                                    </table>
                                </div> -->
                                <hr width="100%" color="grey">
                                <br>
                                <h2 v-if="hospitals.length==0">Loading..</h2>
                                <table id="hospitals">
                                    <tr v-for="hospital in hospitals" :key="hospital.id">
                                        <td class="d-title">{{hospital.id+") "+ hospital.hospital.name }}</td>
                                        <td>→</td>
                                        <td class="d-info">{{ hospital.treatment_total }}</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>

        <!-- <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="box">
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <h1  class="title"><u>More</u></h1>
                                <hr width="100%" color="grey">
                                <ul>
                                    <li><router-link to="/protect-yourself">Protect Yourself</router-link></li>
                                    <li><router-link to="/news">News</router-link></li>
                                    <li><router-link to="/global">See Global Data</router-link></li>
                                    <li><router-link to="/FAQs">FAQs</router-link></li>
                                </ul>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div> -->

        <div class="container">
            <div class="spdiv">
                <h1 class="spmsg">Stay Safe...!</h1>
            </div>
        </div>

    </div>
  </section>
</template>


<script>
export default {
  name: "HomePage",
  data() {
    return {
      localNewCases: 'Loading..',
      localTotalCases: 'Loading..',
      totalHospitalAdmits: 'Loading..',
      totalLocalDeaths: 'Loading..',
      totalLocalRecovered: 'Loading..',
      localActiveCases: 'Loading..',
      hospitals: [],

      globalNewCases: 'Loading..',
      globalTotalCases: 'Loading..',
      globalNewDeaths: 'Loading..',
      totalGlobalDeaths: 'Loading..',
      totalGlobalRecovered: 'Loading..',

      lastUpdate: 'Loading..',
    };
  },
  mounted(){
    fetch('https://hpb.health.gov.lk/api/get-current-statistical')
        .then(response => response.json())
        .then(json => {
            let data = json.data;
            //local data
            this.localNewCases = data.local_new_cases;
            this.localTotalCases = data.local_total_cases;
            this.totalHospitalAdmits = data.local_total_number_of_individuals_in_hospitals;
            this.hospitals = data.hospital_data;
            this.totalLocalDeaths = data.local_deaths;
            this.totalLocalRecovered = data.local_recovered;
            this.localActiveCases = data.local_active_cases;

            //global data
            this.globalNewCases = data.global_new_cases;
            this.globalTotalCases = data.global_total_cases;
            this.globalNewDeaths = data.global_new_deaths;
            this.totalGlobalDeaths = data.global_deaths;
            this.totalGlobalRecovered = data.global_recovered;

            //other
            this.lastUpdate = data.update_date_time;
      }).catch(function(error){
        alert("Something went wrong!\nTry refreshing your browser.");
        console.error(error);
    });
  }
};
</script>


<style scoped>
/* Global css */
@import url("../assets/css/styles.css");

/* Page css */
.box {
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(13px);
  border-radius: 15px;
  padding-top: 4rem;
  padding-bottom: 3.5rem;
  margin-top: 2.5rem;

}
.det {
  text-align: start;
  font-size: 1.2rem;
}
.lastUpdate{
    text-align: end;
    font-size: 1.1rem;
}

table{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
th{
    font-size: 2rem;
}
td{
    font-size: 1.2rem;
}
.spacer{height: 0;}
.d-title{
    text-align: start;
}
.d-info{
    text-align: end;
}
#hospitals .d-title{
    width: 75%;
}
ul{
    text-align: start;
    margin-left: 20px;
}
li{
    font-size: 1.3rem;
}


.spmsg{
    color: white;
    font-size: 5vw;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    width: 100%;
    position:absolute;
    left: 50%;
    transform: translate(-50%,-50%);
}
@keyframes bounce {
    0%   {font-size: 5rem;}
    50% {font-size: 5.7rem;}
    100% {font-size: 5rem;}
  }

.spdiv{
    height: 11rem;
    padding-top: 5vw;
}

hr{
    margin-right: auto;
    margin-left: auto;
}

/* responsive css for the page */
@media only screen and(max-width:900px){
    ul{
        margin-left: 2rem;
    }
    .spmsg{
        font-size: 3rem;
        margin-top: 5rem;
    }
}
@media only screen and (max-width:768px){
    table{width: 80%;}
    .spacer{height: 2rem;}
    .det{
        font-size: 1rem;
        padding-left: 1.5rem;
    }
    .lastUpdate{
        font-size: 1.05rem;
        padding-right: 1.5rem;
    }
    ul{
        margin-left: 3rem;
    }
    .spdiv{
        height: 9rem;
    }
    .spmsg{
        font-size: 3rem;
        margin-top: 2.7rem;
    }
    @keyframes bounce {
        0%   {font-size: 3rem;}
        50% {font-size: 3.7rem;}
        100% {font-size: 3rem;}
  }
}

@media only screen and (max-width:500px){
    table{
        width: 80%;
    }
    #hospitals{
        width: 90%;
    }
    td{
        font-size: 1.15rem;
    }
    li{
        font-size: 1.2rem;
    }
    hr{
        width:90%;
    }
    
}

</style>