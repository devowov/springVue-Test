(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[924],{5924:function(A,P,g){"use strict";g.r(P),g.d(P,{default:function(){return E}});var o=function(){var A=this,P=A._self._c;return P("div",{attrs:{id:"board"}},[P("h1",[A._v("BOARD")]),P("div",[A.isShow?P("p",[A._v("u can see me?")]):A.isShow?P("p",[A._v("Nope")]):P("p",[A._v("u can't see me :)")]),P("v-btn",{attrs:{outline:""},on:{click:A.button}},[A._v("Click")]),P("br"),P("img",{attrs:{src:g(5477)("./".concat(A.imgName,".jpg"))}})],1)])},i=[],t=g(7218),Q={name:"board",data:function(){return{isShow:null,imgName:"big"}},methods:{load:function(){var A=this;t.get("/board").then((function(P){A.isShow=P.data.isShow})).catch((function(A){console.log("Error : "+A)}))},button:function(){var A=this;t.get("/switch",{params:{val:this.isShow},timeout:1e3}).then((function(P){A.isShow=P.data.val}))},onresize:function(){var A=window.innerWidth;console.log("window Size >> ",A),this.imgName=A<800?"small":A<1e3?"catdie":A<1707?"middle":"big"}},mounted:function(){this.load(),this.onresize(),window.addEventListener("resize",this.onresize)}},B=Q,w=g(1001),s=(0,w.Z)(B,o,i,!1,null,null,null),E=s.exports},5477:function(A,P,g){var o={"./big.jpg":4783,"./catdie.jpg":1382,"./middle.jpg":3395,"./small.jpg":878};function i(A){var P=t(A);return g(P)}function t(A){if(!g.o(o,A)){var P=new Error("Cannot find module '"+A+"'");throw P.code="MODULE_NOT_FOUND",P}return o[A]}i.keys=function(){return Object.keys(o)},i.resolve=t,A.exports=i,i.id=5477},4783:function(A,P,g){"use strict";A.exports=g.p+"img/big.f0fb76f8.jpg"},1382:function(A,P,g){"use strict";A.exports=g.p+"img/catdie.0128ac13.jpg"},3395:function(A,P,g){"use strict";A.exports=g.p+"img/middle.96b160cf.jpg"},878:function(A){"use strict";A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=924-legacy.20594ada.js.map