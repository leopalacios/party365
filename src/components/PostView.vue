<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="nameField" v-model="name" type="text" class="mdl-textfield__input"/>
          <label for="nameField" class="mdl-textfield__label">Add a name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="descriptionField" v-model="description" type="text" class="mdl-textfield__input"/>
          <label for="descriptionField" class="mdl-textfield__label">Add a description</label>
        </div>
        <div class="actions">
          <a @click.prevent="postPlace" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            SUBMIT A NEW PLACE
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['name', 'description'],
  methods: {
    postPlace () {
      this.$root.$firebaseRefs.places.push({
        'name': this.name,
        'description': this.description,
        'created_at': -1 * new Date().getTime()
      })
      .then(this.$router.push('/'))
    }
  }
}
</script>

<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
