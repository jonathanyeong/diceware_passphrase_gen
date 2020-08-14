<template>
<div class="container">
  <h2>
    {{computedPassphrase}}
  </h2>

  <form @submit.prevent="onSubmit" class="passphrase-form">
    <div class="form-fields">
      <div class="field">
        <label for="delimiter">Delimiter between words:</label>
        <input v-model="delimiter" @keypress="onlySymbols" type="text" id="delimiter" name="delimiter" maxlength="1">
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

// function getDicewareMapping(key, dicewareData) {
//   const mapping = dicewareData.find((element) => {
//     console.log("element is", element)
//     element.key === key
//   })
//   console.log("Get Diceware Mapping", mapping)
//   return mapping.value;
// }

function genDicewareKey() {
  return getRndInteger(1, 6) +
         getRndInteger(1, 6) * 10 +
         getRndInteger(1, 6) * 100 +
         getRndInteger(1, 6) * 1000 +
         getRndInteger(1, 6) * 10000;
}

function genPassphrase(num, delimiter, dicewareData) {
  console.log("==> Diceware data", dicewareData)
  let newPassphrase = []
  for(let i = 0; i < num; i++) {
    newPassphrase.push(genDicewareKey())
  }
  return newPassphrase.join(delimiter);
}

function populateData() {
  const dicewareData = require('../assets/wordlist.csv')
  console.log('===> Popualte data:', dicewareData)
  return dicewareData
}

export default {
  name: 'PassphraseForm',
  data() {
    return {
      passphrase: "",
      delimiter: "",
      wordCount: 3,
      dicewareData: populateData()
    }
  },
  computed: {
    computedPassphrase() {
      return genPassphrase(3, " ", this.dicewareData)
    }
  },
  methods: {
    newPassphrase(wordCount) {
      this.passphrase = genPassphrase(wordCount, this.delimiter, this.dicewareData)
    },
    onlySymbols(event) {
      console.log("Only symbols", event)
      // if (event.charCode < 186 && event.charCode !== 32 || event.charCode > 222) {
      //   event.preventDefault();
      // }
    }
  },
  watch: {
    delimiter(newDelimiter, oldDelimiter) {
      if (oldDelimiter) {
        this.passphrase = this.passphrase.split(oldDelimiter).join(newDelimiter || " ")
      }
      else {
        // Default to spaces
        this.passphrase = this.passphrase.split(" ").join(newDelimiter || " ")
      }
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