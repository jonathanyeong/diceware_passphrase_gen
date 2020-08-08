<template>
  <div id="app">
    <h1>Generate your Passphrase!</h1>
    <h2>
      {{passphrase}}
    </h2>
    <PassphraseForm />
  </div>
</template>

<script>
import PassphraseForm from './components/PassphraseForm.vue'

export default {
  name: 'App',
  components: {
    PassphraseForm
  },
  data() {
    return {
      passphrase: "Hello World", // Replace this with the randomized numbers
      dicewarePassphrases: [
        { id: 11111, val: 'abacus' },
        { id: 32643, val: 'grief' },
        { id: 53643, val: 'shallot' }
      ]
    }
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
