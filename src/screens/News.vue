<template>
    <section>
        <h1 class="caption">News</h1>
        <br>
        <div class="container">
            <div class="row">
                <h2 v-if="news.length==0" class="loading">Loading..</h2>
                <div v-for="newss in news" :key="newss._id" class="col-md-12">
                    <NewsTile :data=newss v-if="newss.lang =='np'"></NewsTile>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NewsTile from '../components/NewsTile.vue';

export default {
    name: 'News',
    components:{
        NewsTile
    },
    data(){
        return{
            news:[]
        }
    },
    mounted(){
    fetch('https://nepalcorona.info/api/v1/news')
        .then(response => response.json())
        .then(json => {
            let data = json.data;
            this.news = data;
      }).catch(function(error){
        alert("Something went wrong!\nTry refreshing your browser.");
        console.error(error);
    });
  }
}
</script>

<style scoped>
/* Global css */
@import url("../assets/css/styles.css");

</style>