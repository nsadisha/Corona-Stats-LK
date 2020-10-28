<template>
<section>
    <h1 class="caption">FAQs</h1>
    <br>
    <div class="container">
        <div class="row">
            <h2 v-if="faqs.length==0" class="loading">Loading..</h2>
            <div v-for="faq in faqs" :key="faq._id" class="col-md-12">
                <FAQ :data=faq v-if="faq.lang =='en'"></FAQ>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import FAQ from '../components/FAQ.vue';

export default {
    name: 'FAQs',
    components:{
        FAQ
    },
    data(){
        return{
            faqs:[]
        }
    },
    mounted(){
    fetch('https://nepalcorona.info/api/v1/faqs')
        .then(response => response.json())
        .then(json => {
            let data = json.data;
            this.faqs = data;
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