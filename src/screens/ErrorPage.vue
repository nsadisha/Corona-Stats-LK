<template>
  <section class="error">
      <h1>404<br>Page not found!</h1>
  </section>
</template>

<script>
export default {
    name: 'ErrorPage'
}
</script>

<style scoped>
    .error{
        color: white;
        height: 15rem;
        display: grid;
        align-items: center;
    }

    @media only screen and (max-width:500px){
        .error h1{font-size: 1.5rem;}
    }
</style>