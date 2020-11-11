<template>
    <section>
        <h3>{{ data.title }}</h3>
        <div>
            <img :src="data.image_url" alt="Something went wrong with loading the news image or not included.">
        </div>
        <div class="summary">
            <p>{{ data.summary }}</p>
        </div>
        <a :href="data.url" target="_blank"><span class="btn btn-outline-info">Read more</span></a>
    </section>
</template>

<script>
export default {
    name: 'NewsTile',
    props:{
        data:{}
    }
}
</script>

<style scoped>
    *{
        text-align: start;
        color: black;
    }
    section{
        border: solid 1px rgb(116, 116, 116);
        border-radius: 7px;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: rgba(255, 255, 255, 0.85);
        /*backdrop-filter: blur(13px);*/
    }
    h3{
        margin-top: 3rem;
    }
    img{
        width: 60%;
        height: auto;
        color: grey;
    }
    .summary{
        width: 100%;
        margin-top: 1rem;
    }
    span{
        font-weight: 600 !important;
    }

    @media only screen and (max-width: 768px){
        h3{
            margin-top: 1rem;
            font-size: 1.5rem;
        }
        img{
            width: 100%;
        }
        p{
            font-size: 1rem;
        }
    }

</style>