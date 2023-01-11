<template>
  <div class="home">

    <div v-if="!this.$store.state.isMobile">
      <h3>pc</h3>
      <p>^~^</p>
    </div>
    <div v-else-if="this.$store.state.isMobile">
      <h3>mobile</h3>
      <p>우힝힝</p>
      <hr>
    </div>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
