<template>
  <div class="animated fadeIn">
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  components: {
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
      ],
      tableFields: {
      }
    }
  },
  created() {
    this.variant();
  },
  methods: {
    variant () {
      console.log("Data", process.env.VUE_APP_ISENV)
    },
    flag () {
    }
  }
}
</script>

<style>

</style>
