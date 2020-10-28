<template>
  <footer>
    <p>{{ msg }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  height: 10rem;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
}
p{
  font-size: 1.4rem;
  color: rgb(194, 194, 194);
  align-self: center;
}

@media only screen and (max-width:550px){
  footer{
    height: 8rem;
  }
  p{
    font-size: 1.2rem;
  }
}

@media only screen and (max-width:375px){
  p{
    font-size: 1.1rem;
  }
}
</style>
