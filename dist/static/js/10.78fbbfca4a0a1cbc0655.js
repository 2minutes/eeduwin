webpackJsonp([10],{C02z:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("G/qF"),o=n("iNaQ"),s=n("l/JR"),a=n("jvWE"),r={data:function(){return{userNo:"",now:"",token:"",name:"",loginId:""}},created:function(){var e=this.$route.query,t=e.userNo,n=e.now,i=e.token;t&&n&&i&&(this.userNo=t,this.now=n,this.token=i,this.getUserInf())},methods:{getUserInf:function(){var e=this;Object(s.a)({url:"userReg/userInf",params:{userNo:this.userNo,now:this.now,token:this.token}}).then(function(t){if(200==t.code){var n=t.loginBean?t.loginBean:{},i=t.student?t.student:{};e.name=i.userNm,e.loginId=n.loginId;var o=setTimeout(function(){clearTimeout(o),e.mailValidate()},2e3)}else e.$message.error(t.desc)})},mailValidate:function(){var e=this;Object(s.a)({url:"userReg/mailValidate",params:{userNo:this.userNo,now:this.now,token:this.token}}).then(function(t){if(200==t.code){e.$message.success("验证成功!"),Object(a.l)(t.token,e.name);setTimeout(function(){e.$router.replace({path:"/"})},1e3)}else e.$message.error(t.desc)})}},computed:{title:function(){return this.$t("verify.verifyEmailTitle")}},components:{CommonHeader:i.a,CommonFooter:o.a}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app_container"},[n("CommonHeader",{attrs:{blue:!0}}),e._v(" "),n("div",{staticClass:"verify_wrap app_content"},[n("a-card",{staticStyle:{width:"600px"},attrs:{title:e.title}},[n("p",[e._v(e._s(e.$t("verify.thansk"))+", "+e._s(e.$t("verify.confirmEmail"))),n("span",[e._v(e._s(e.loginId))])]),e._v(" "),n("p",[n("span",{on:{click:e.mailValidate}},[e._v(e._s(e.$t("verify.verifyEmail")))])])])],1),e._v(" "),n("CommonFooter")],1)},staticRenderFns:[]};var l=n("VU/8")(r,u,!1,function(e){n("U6E8")},null,null);t.default=l.exports},U6E8:function(e,t){}});