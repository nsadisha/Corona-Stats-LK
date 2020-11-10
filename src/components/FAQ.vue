<template>
  <section>
        <h3>{{ data.question }}</h3>
        <div class="summary">
            <p>{{ data.answer }}</p>
        </div>
        <p class="time">Time: {{ data.updated_at!=null?data.updated_at:"Not included." }}</p>
    </section>
</template>

<script>
export default {
    name: 'FAQ',
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
        backdrop-filter: blur(13px);
    }
    h3{
        margin-top: 3rem;
    }
    p{
        text-indent: 3rem;
        font-size: 1.2rem;
    }
    img{
        width: 50%;
        height: auto;
    }
    .summary{
        width: 100%;
        margin-top: 1rem;
    }
    .time{
        margin-top: 1rem;
        text-align: end;
    }

    @media only screen and (max-width: 768px){
        img{
            width: 100%;
        }
        h3{
            margin-top: 1rem;
            font-size: 1.5rem;
        }
        p{
            font-size: 1.1rem;
        }
        .time{
            font-size: 0.9rem;
        }
    }

</style>