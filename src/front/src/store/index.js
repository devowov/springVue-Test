import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 상태의 집합
  state: {
    count : 0
    ,imgName : 'big'
    ,isMobile: false
  }
  ,getters: {
    increaseCount(state){
      return state.count+=1;
    }
    ,onResize(){
      return this.$store.commit('changeImg', {
        width:document.documentElement.clientWidth
      })
    }
  }
  ,mutations:{
    changeImg(state,payload){
      let width = payload.width;
      console.log('width>>> ', width)

      if(width < 1000){
        state.isMobile = true;
      }else{
        state.isMobile = false;
      }

      if(width < 800){
        state.imgName = 'small';
      }else if(width < 1000){
        state.imgName = 'catdie';
      }
      else if(width < 1707){
        state.imgName = 'middle';
      }else{
        state.imgName = 'big';
      }
    }
  }

})
