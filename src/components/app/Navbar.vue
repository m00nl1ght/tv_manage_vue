<template>
    <b-navbar class="menu mb-3">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../../assets/claas-logo.jpg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>

        <template #start>
            <MainMenu />
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link v-if="!isAuth" class="button is-light" to="/login">Log in</router-link>

                    <router-link v-else class="button is-light" to="/logout">Log out</router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import MainMenu from "@/components/app/MainMenu"

export default {
    components: {MainMenu},
    
    computed: {
        isAuth() {
            return this.$store.getters['user/isAuth']
        }
    }
}
</script>

<style scoped>
    .menu {
        border-bottom: 1px solid #dee2e6;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
    }
</style>