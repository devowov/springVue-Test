<template>
<div id="board">
  <h1>BOARD</h1>
  <div id="pc">
    <p v-if="isShow">u can see me?</p>
    <p v-else-if="!isShow">u can't see me :)</p>
    <p v-else>Nope</p>
<!--    <v-btn outlined @click="button">Click</v-btn>-->
    <br/>
    <div v-if="!this.$store.state.isMobile">
    <h3>pc</h3>
    </div>
    <div v-else-if="this.$store.state.isMobile">
      <h3>mobile</h3>
      <hr>
    </div>
    <img :src="require(`@/assets/${this.$store.state.imgName}.jpg`)" alt="pcImg">
  </div>
</div>
</template>

<script>
//const axios = require('axios');

export default {
  name: "board",
  data: function (){
    return{
      isShow: null,
      imgName: this.$store.state.imgName
    }
  }
  ,methods:{
    // load: function (){
    //   axios.get("/board")
    //       .then(res =>{
    //         this.isShow = res.data.isShow;
    //       })
    //       .catch(
    //           error => {
    //             console.log("Error : " + error);
    //           }
    //       );
    // },
    // button() {
    //   axios.get('/switch',{params: {
    //       val: this.isShow
    //     }, timeout:1000})
    //       .then(result => {
    //         this.isShow = result.data.val;
    //       })
    // },
    // onresize () {
    //   let size = window.innerWidth;
    //   console.log('window Size >> ',size);
    //   if(size < 800){
    //     this.imgName = 'small';
    //   }else if(size < 1000){
    //     this.imgName = 'catdie';
    //   }
    //   else if(size < 1707){
    //     this.imgName = 'middle';
    //   }else{
    //     this.imgName = 'big';
    //   }
    // }
    // onResize(){
    //  // console.log(document.documentElement.clientWidth)
    //
    //   return this.$store.commit('changeImg', {
    //     width:document.documentElement.clientWidth
    //   })
    // }
  }
  ,computed:{
    count(){
      return this.$store.getters.increaseCount;
    }

  }
  ,mounted : function() {
    //this.load();
    //window.addEventListener('resize', this.onResize);
  }
}
</script>

