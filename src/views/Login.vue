<template>
      <form class="column form" @submit.prevent="onSubmit">
        <b-message 
          title="Error" 
          type="is-danger" 
          v-model="isActive" 
          aria-close-label="Close message"
        >{{ message }}
        </b-message>

        <b-field label="Email">
            <b-input type="email"
                v-model="email"
                required>
            </b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password"
              v-model="password"
              required
              password-reveal>
          </b-input>
        </b-field>

        <b-button native-type="submit" type="is-success">Login</b-button>
        <b-button class="ml-3" @click="$router.go(-1)" type="is-info">Back</b-button>
      </form>
</template>

<script>
export default {


  data: () => ({
    email: '',
    password: '',
    isActive: false,
    message: ''
  }),

  methods: {
    onSubmit() {
      this.$store.dispatch('user/getAuth', {email: this.email, password: this.password})
      .then(response => {
        if(response.status) {
          this.$router.push({name: 'main'})
        }
        // this.isActive = true
        // this.message = response.message
      })
    }
  },
}
</script>

<style scoped>
  .form {
    margin: 0 auto;
    max-width: 400px;
  }
</style>