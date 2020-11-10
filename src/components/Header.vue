<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light opacity backdrop">
        <button class="navbar-toggler" id="toggle-btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Corona Stats LK</a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ml-auto mt-2 text-left">
                <li class="nav-item"  @click="activeNav()" v-bind:class="{ 'active': currentNav=='HomePage' }">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item" @click="activeNav()" v-bind:class="{ 'active': currentNav=='ProtectYourself' }">
                    <router-link to="/protect-yourself" class="nav-link">Protect Yourself</router-link>
                </li>
                <li class="nav-item" @click="activeNav()" v-bind:class="{ 'active': currentNav=='News' }">
                    <router-link to="/news" class="nav-link">News</router-link>
                </li>
                <li class="nav-item" @click="activeNav()" v-bind:class="{ 'active': currentNav=='GlobalData' }">
                    <router-link to="/global" class="nav-link">Global Stats</router-link>
                </li>
                <li class="nav-item" @click="activeNav()" v-bind:class="{ 'active': currentNav=='FAQs' }">
                    <router-link to="/faqs" class="nav-link">FAQs</router-link>
                </li>
            </ul>
        </div>
        </nav>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            currentNav: ''
        }
    },
    mounted(){
        this.currentNav = this.$route.name
    },
    methods: {
        activeNav(){
            this.currentNav = this.$route.name;
            document.getElementById('toggle-btn').click();
        }
    }
}
</script>

<style scoped>
    .navbar-toggler{
        outline: none !important;
    }
    .navbar-brand{
        font-size: 1.7rem;
    }
    .nav-link{
        font-size: 1.2rem;
    }
    .opacity{
        opacity: 0.95;
    }
    .backdrop{
        backdrop-filter: blur(13px);
    }
</style>