<template>
<div class="container">
  <h2>
    {{passphrase}}
  </h2>

  <form @submit.prevent="onSubmit" class="passphrase-form">
    <div class="form-fields">
      <div class="field">
        <label for="delimiter">Delimiter between words:</label>
        <input v-model="delimiter" @change="updateWithDelimiter(delimiter)" type="text" id="delimiter" name="delimiter" maxlength="1">
      </div>
      <div class="field">
        <label for="numWords">Number of words:</label>
        <input v-model.number="wordCount" @change="newPassphrase(wordCount)" type="number" id="numWords" name="numWords" />
      </div>
    </div>
  </form>
</div>
</template>

<script>

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function genDicewareKey() {
  return getRndInteger(1, 6) +
         getRndInteger(1, 6) * 10 +
         getRndInteger(1, 6) * 100 +
         getRndInteger(1, 6) * 1000 +
         getRndInteger(1, 6) * 10000;
}

function genPassphrase(num, delimiter) {
  let newPassphrase = []
  for(let i = 0; i < num; i++) {
    newPassphrase.push(genDicewareKey())
  }
  return newPassphrase.join(delimiter);
}

export default {
  name: 'PassphraseForm',
  data() {
    return {
      passphrase: genPassphrase(3, " "),
      delimiter: " ",
      wordCount: 3
    }
  },
  methods: {
    newPassphrase(wordCount) {
      this.passphrase = genPassphrase(wordCount, this.delimiter)
    },
    updateWithDelimiter(delimiter) {
      this.passphrase = this.passphrase.split(" ").join(delimiter)
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.form-fields {
  display: flex;
  text-align: left;
}

.form-submit {
  text-align: left;
}
</style>