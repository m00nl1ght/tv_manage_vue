<template>
  <div class="main">
    <div class="content">
      <Navbar />
      <router-view class="container"></router-view>
    </div>

    <Footer class="content-footer"/>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Footer from '@/components/app/Footer'

export default {
  components: {
    Navbar, Footer
  },

  data: () => ({

  }),
};
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    flex: 1 0 auto;
  }

    .content-footer {
    flex: 0 0 auto;
  }
</style>