<template>
  <div id="app">
    <h1>Generate your Passphrase!</h1>
    <PassphraseForm />
  </div>
</template>

<script>
import PassphraseForm from './components/PassphraseForm.vue'

export default {
  name: 'App',
  components: {
    PassphraseForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
