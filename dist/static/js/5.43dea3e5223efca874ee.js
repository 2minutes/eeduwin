webpackJsonp([5],{TApG:function(s,e){},oVMN:function(s,e,t){var i={"./services_advise.png":"l+fq","./services_checklist.png":"6S6W","./services_communicate.png":"R6B3","./services_enhance.png":"usUN","./services_global_bg.png":"+pOK","./services_goal.png":"hC3e","./services_guidance.png":"DjDW","./services_support.png":"xlAN"};function c(s){return t(a(s))}function a(s){var e=i[s];if(!(e+1))throw new Error("Cannot find module '"+s+"'.");return e}c.keys=function(){return Object.keys(i)},c.resolve=a,s.exports=c,c.id="oVMN"},sCaW:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("G/qF"),c=t("iNaQ"),a={data:function(){return{activeTabIdx:0,tabImgs:["advise","guidance","enhance","support","communicate"]}},methods:{selectTab:function(s){this.activeTabIdx=s}},computed:{tabList:function(){return[this.$t("services.advise"),this.$t("services.guidance"),this.$t("services.enhance"),this.$t("services.support"),this.$t("services.communicate")]},contList:function(){var s=[[this.$t("services.advise1"),this.$t("services.advise2"),this.$t("services.advise3"),this.$t("services.advise4"),this.$t("services.advise5")],[this.$t("services.guidance1"),this.$t("services.guidance2"),this.$t("services.guidance3"),this.$t("services.guidance4"),this.$t("services.guidance5"),this.$t("services.guidance6")],[this.$t("services.enhance1"),this.$t("services.enhance2"),this.$t("services.enhance3"),this.$t("services.enhance4"),this.$t("services.enhance5")],[this.$t("services.support1"),this.$t("services.support1"),this.$t("services.support1"),this.$t("services.support1")],[this.$t("services.communicate1"),this.$t("services.communicate2"),this.$t("services.communicate3"),this.$t("services.communicate4")]];return s}},components:{CommonHeader:i.a,CommonFooter:c.a}},v={render:function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{ref:"head",staticClass:"app_container clearfix"},[i("div",{staticClass:"services_header"},[i("CommonHeader"),s._v(" "),i("p",{staticClass:"services_title"},[s._v(s._s(s.$t("services.admissionServices")))]),s._v(" "),i("p",{staticClass:"services_overview_title"},[s._v(s._s(s.$t("services.overview"))+":")]),s._v(" "),i("p",[s._v(s._s(s.$t("services.overviewDesc")))]),s._v(" "),i("span",[s._v(s._s(s.$t("services.fullServicesDesc")))])],1),s._v(" "),i("div",{staticClass:"goals_wrap"},[i("img",{staticClass:"left",attrs:{src:t("+pOK")}}),s._v(" "),i("div",{staticClass:"right"},[i("p",{staticClass:"services_common_title"},[s._v(s._s(s.$t("services.ourGoals"))+":")]),s._v(" "),i("p",{staticClass:"services_common_li"},[s._v(s._s(s.$t("services.goalsProvide")))]),s._v(" "),i("p",{staticClass:"services_common_li"},[s._v(s._s(s.$t("services.goalsDevelop")))]),s._v(" "),i("p",{staticClass:"services_common_li"},[s._v(s._s(s.$t("services.goalsAssign")))])])]),s._v(" "),i("div",{staticClass:"why_wrap clearfix"},[i("p",{staticClass:"services_common_title"},[s._v(s._s(s.$t("services.whyChooseUs"))+":")]),s._v(" "),i("p",{staticClass:"services_common_li"},[s._v(s._s(s.$t("services.why1")))]),s._v(" "),i("p",{staticClass:"services_common_li"},[s._v(s._s(s.$t("services.why2")))]),s._v(" "),i("p",{staticClass:"services_common_li"},[s._v(s._s(s.$t("services.why3")))]),s._v(" "),i("p",{staticClass:"services_common_li"},[s._v(s._s(s.$t("services.why4")))]),s._v(" "),i("p",{staticClass:"services_common_li"},[s._v(s._s(s.$t("services.why5")))])]),s._v(" "),i("div",{staticClass:"cont_wrap clearfix"},[i("p",{staticClass:"services_common_title"},[s._v(s._s(s.$t("services.serviceContents"))+":")]),s._v(" "),i("p",{staticClass:"cont_tip"},[s._v(s._s(s.$t("services.discover"))+":")]),s._v(" "),i("div",{staticClass:"cont_tabs"},s._l(s.tabList,function(e,t){return i("span",{staticClass:"cont_tab",class:s.activeTabIdx===t?"active":"",on:{click:function(e){return s.selectTab(t)}}},[s._v(s._s(e))])}),0),s._v(" "),i("div",{staticClass:"cont_list_wrap"},[i("img",{staticClass:"left",attrs:{src:t("oVMN")("./services_"+s.tabImgs[s.activeTabIdx]+".png")}}),s._v(" "),i("ul",{staticClass:"cont_list"},s._l(s.contList[s.activeTabIdx],function(e,t){return i("li",[s._v(s._s(t+1+". "+e))])}),0)])]),s._v(" "),i("CommonFooter")],1)},staticRenderFns:[]};var r=t("C7Lr")(a,v,!1,function(s){t("TApG")},"data-v-3a0a347a",null);e.default=r.exports}});