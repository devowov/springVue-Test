<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div v-if="!this.$store.state.isMobile">
      <h3>pc</h3>
    </div>
    <div v-else-if="this.$store.state.isMobile">
      <h3>mobile</h3>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  methods:{
    increase() {
      this.$store.state.count = this.$store.state.count + 1 ;
    }
  },
  mounted() {
    this.increase();
  }
}
</script>
