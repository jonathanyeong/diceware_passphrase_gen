<template>
<div class="container">
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
export default {
  name: 'PassphraseForm'
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