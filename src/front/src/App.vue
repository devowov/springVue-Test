
<template>
  <div id="app">
    <div>
      {{ message }}
    </div>
    <h4>{{count}}</h4>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/board">Board</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// const axios = require('axios');

export default {
  data : function() {
    return {
      message : ""
      ,isShow: true
      ,isNotShow: true
    }
  },
  methods : {
  //   load: function() {
  //     axios.get("/data", {
  //       params: {
  //         msg: "Index..."
  //       },
  //       timeout: 1000
  //     })
  //     .then( res => {
  //       //console.log(res)
  //       console.log(res.data)
  //       this.message = res.data.message;
  //     })
  //     .catch(
  //         error => {
  //           console.log("Error : " + error);
  //           //console.log("Data가 없습니다.");
  //         }
  //     );
  //   }
    onResize(){
      // console.log(document.documentElement.clientWidth)

      return this.$store.commit('changeImg', {
        width:document.documentElement.clientWidth
      })
    }
  },
  computed:{
    count() {
      return this.$store.state.count;
    }
  },
  mounted : function() {
   // this.load();
    window.addEventListener('resize', this.onResize);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
