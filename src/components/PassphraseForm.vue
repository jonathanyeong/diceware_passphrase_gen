<template>
<div class="container">
  <p>
    Generating diceware key: {{ key }}
  </p>
  <form class="passphrase-form">
    <div class="form-fields">
      <div class="field">
        <label for="delimiter">Delimiter between words:</label>
        <input type="text" id="delimiter" name="delimiter" maxlength="1">
      </div>
      <div class="field">
        <label for="numWords">Number of words:</label>
        <input type="number" id="numWords" name="numWords">
      </div>
    </div>
    <div class="form-submit">
      <input type="submit" value="Generate!">
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

export default {
  name: 'PassphraseForm',
  data() {
    return {
      key: genDicewareKey()
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