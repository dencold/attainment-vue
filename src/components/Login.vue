<!-- 
  learned technique from this helpful source:
  https://github.com/CaptainYouz/vue-firebase-tutorial/blob/master/src/components/Login.vue
-->

<template>
  <div class="login">
    <h3>Login With Google</h3>
    <v-btn color="primary" @click="signIn">Login</v-btn>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',

    methods: {
      signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);

        firebase.auth().getRedirectResult()
          .then(() => {
            this.$router.replace('dashboard');
          })
          .catch((error) => {
            // In case of auth/account-exists-with-different-credential error,
            // you can fetch the providers using this:
            if (error.code === 'auth/account-exists-with-different-credential') {
              alert('ERROR: Account already exists with different provider');
            } else {
              alert(error);
            }
          });
      },
    },

  };
</script>

<style scoped>
  .icon {
    cursor: pointer;
  }
</style>
