<template>
    <div class="is-flex">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Главная</b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/main' }">Управление экранами</b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/content' }">Добавить URL</b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/screen' }">Добавить экран</b-navbar-item>
    </div>
</template>

<style scoped>

</style>