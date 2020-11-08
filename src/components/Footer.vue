<template>
  <footer class="pt-5 pb-3">
    <p>{{ msg }}</p>
      <h5 class="mt-2">Follow me on github</h5>
      <div>
        <github-button class="mx-2" ass href="https://github.com/nsadisha" data-size="large" aria-label="Follow @nsadisha on GitHub">Follow @nsadisha</github-button>
      </div>
    <h5 class="mt-2">Contribute for Corona Stats LK</h5>
      <div>
        <github-button class="mx-2" ass href="https://github.com/nsadisha/corona-stats-lk" data-size="large" data-show-count="true" aria-label="Star nsadisha/corona-stats-lk on GitHub">Star</github-button>
        <github-button class="mx-2" ass href="https://github.com/nsadisha/corona-stats-lk/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork nsadisha/corona-stats-lk on GitHub">Fork</github-button>
      </div>
  </footer>
</template>

<script>
import GithubButton from 'vue-github-button'
export default {
  name: 'Footer',
  components:{
    GithubButton
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  color: rgb(194, 194, 194);
}
p{
  font-size: 1.4rem;
  align-self: center;
}

@media only screen and (max-width:550px){
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
