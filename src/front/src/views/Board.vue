<template>
<div id="board">
  <h1>BOARD</h1>
  <div>
    <p v-if="isShow">u can see me?</p>
    <p v-else-if="!isShow">u can't see me :)</p>
    <p v-else>Nope</p>
    <v-btn outlined @click="button">Click</v-btn>
    <br/>
    <img :src="require(`@/assets/${imgName}.jpg`)">
  </div>

</div>
</template>

<script>
const axios = require('axios');

export default {
  name: "board",
  data: function (){
    return{
      isShow: null,
      imgName: 'big'
    }
  }
  ,methods:{
    load: function (){
      axios.get("/board")
          .then(res =>{
            this.isShow = res.data.isShow;
          })
          .catch(
              error => {
                console.log("Error : " + error);
              }
          );
    },
    button() {
      axios.get('/switch',{params: {
          val: this.isShow
        }, timeout:1000})
          .then(result => {
            this.isShow = result.data.val;
          })
    },
    onresize () {
      let size = window.innerWidth;
      console.log('window Size >> ',size);
      if(size < 800){
        this.imgName = 'small';
      }else if(size < 1000){
        this.imgName = 'catdie';
      }
      else if(size < 1707){
        this.imgName = 'middle';
      }else{
        this.imgName = 'big';
      }
    },

  }
  ,mounted : function() {
    this.load();
    this.onresize();
    window.addEventListener('resize', this.onresize);
  }
}
</script>

