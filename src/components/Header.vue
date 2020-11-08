<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" id="toggle-btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Corona Stats LK</a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ml-auto mt-2 text-left">
                <li class="nav-item"  @click="activeNav('home')" v-bind:class="{ 'active': currentNav=='home' }">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item" @click="activeNav('protect-yourself')" v-bind:class="{ 'active': currentNav=='protect-yourself' }">
                    <router-link to="/protect-yourself" class="nav-link">Protect Yourself</router-link>
                </li>
                <li class="nav-item" @click="activeNav('news')" v-bind:class="{ 'active': currentNav=='news' }">
                    <router-link to="/news" class="nav-link">News</router-link>
                </li>
                <li class="nav-item" @click="activeNav('global')" v-bind:class="{ 'active': currentNav=='global' }">
                    <router-link to="/global" class="nav-link">Global Stats</router-link>
                </li>
                <li class="nav-item" @click="activeNav('faqs')" v-bind:class="{ 'active': currentNav=='faqs' }">
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
            currentNav: 'home'
        }
    },
    methods: {
        activeNav(tab){
            this.currentNav = tab;
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
</style>