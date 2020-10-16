webpackJsonp([17],{"+Dcw":function(t,e){},"r6/C":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("G/qF"),o=i("iNaQ"),s={data:function(){return{activeTabIdx:0,jobTitleTop:0,jobTitleArrowIdx:0}},created:function(){},methods:{selectTab:function(t){this.activeTabIdx=t},toPosition:function(t,e){if(t){var i=document.getElementById(t);if(i){var a=i.offsetTop;this.jobTitleTop=a-30*e,this.jobTitleArrowIdx=e}}}},computed:{teamList:function(){return this.activeTabIdx?this.instructorList:this.directorList},tabList:function(){return[this.$t("aboutTeam.executiveTeamCaps"),this.$t("aboutTeam.ourInstructorsCaps")]},directorList:function(){var t="zh"===this.$i18n.locale;return[{img:"team_img3.jpg",name:"Ying Cao",title:t?"创始人":"Founder",other:t?["37年中美高校经验","工作领域：录取，职业规划，","国际交流和总裁培训"]:["Seasoned Educator","Field: Admissions, Career Development","and International Communications"]},{img:"team_img7.jpg",name:"Sophia Li",title:t?"首席执行官兼申学总监":"CEO & Admissions Director",other:t?["布朗大学, 2021 届","应⽤数学-经济以及","计算机科学双专业"]:["Brown University, Class of 2021","Applied Math - Economics","& Computer Science"]},{img:"team_img2.jpg",name:"Amy Xu",title:t?"首席运营官":"Chief Operating Officer",other:t?["南加州大学，2019届","建筑设计专业"]:["University of Southern California","Class of 2019","Architecture"]},{img:"team_img4.jpg",name:"Sally Kang",title:t?"信息总监":"Information Director",other:t?["多伦多大学（圣乔治）, 2021届","认知科学, 计算机科学","以及经济专业"]:["University of Toronto (St. George)","Class of 2021","Cognitive Science, Computer Science","& Economics"]},{img:"team_img5.jpg",name:"Neil Chen",title:t?"课程总监":"Program Director",other:t?["布朗大学, 2021 届","应⽤数学-经济专业"]:["Brown University, Class of 2021","Applied Math – Economics"]},{img:"team_img6.jpg",name:"Hannah Zhao",title:t?"宣传总监":"Marketing Director",other:t?["伦敦大学金匠学院","2021届","新闻与传播专业"]:["Goldsmiths College, University of London","Class of 2021","Media and Communications"]},{img:"team_img1.jpg",name:"Hanpu Wei",title:t?"技术总监":"Technology Director",other:t?["南加州大学，2020 届","字节跳动","计算机科学研究生"]:["University of Southern California","Class of 2020","Computer Science, Master"]}]},instructorList:function(){var t="zh"===this.$i18n.locale;return[{img:"team_img8.jpg",name:"Steven Man",other:t?["计算机科学/计算机工程","机械工程背景"]:["Computer Science/Computer Engineer","Mechanical Engineer Background"]},{img:"team_img9.jpg",name:"Xiaochun Lv",other:t?["计算机科学/计算机工程","计算机科学背景"]:["Computer Science/Computer Engineer","Computer Science Background"]},{img:"icon_default.png",name:"Jerry",other:t?["计算机科学/计算机工程","计算机科学背景"]:["Computer Science/Computer Engineer","Computer Science Background"]},{img:"team_img10.jpg",name:"Brian Xiao",other:t?["视觉艺术与设计","品牌策略师/产品设计师"]:["Visual Arts & Design","Product Designer / Brand Strategist"]},{img:"icon_default.png",name:"Daniel Zhou",other:t?["数学","数学 & 生物统计学背景"]:["Mathematics","Mathematics & Biostatistics Background"]},{img:"team_img11.jpg",name:"Wenjie Fu",other:t?["数学","数据科学背景"]:["Mathematics","Data Science Background"]},{img:"team_img7.jpg",name:"Sophia Li",other:t?["商业与金融","应⽤数学-经济 &","计算机科学背景"]:["Business & Finance","Applied Math - Economics &","Computer Science Background"]},{img:"team_img5.jpg",name:"Neil Chen",other:t?["商业与金融","应⽤数学-经济背景"]:["Business & Finance","Applied Math - Economics Background"]}]},positionTitleList:function(){return[this.$t("aboutTeam.positionOne"),this.$t("aboutTeam.positionTwo"),this.$t("aboutTeam.positionThree")]},positionDescList:function(){return[this.$t("aboutTeam.positionOneDesc"),this.$t("aboutTeam.positionTwoDesc"),this.$t("aboutTeam.positionThreeDesc")]}},components:{CommonHeader:a.a,CommonFooter:o.a}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app_container"},[a("CommonHeader",{attrs:{blue:!0}}),t._v(" "),a("div",{staticClass:"team_header clearfix"},[a("p",{staticClass:"team_header_title"},[t._v(t._s(t.$t("aboutTeam.ourTeam")))]),t._v(" "),a("p",{staticClass:"team_header_desc"},[t._v(t._s(t.$t("aboutTeam.ourTeamDesc")))])]),t._v(" "),a("div",{staticClass:"team_tabs"},[a("span",{staticClass:"team_tab_slide"}),t._v(" "),t._l(t.tabList,function(e,i){return a("span",{staticClass:"team_tab",class:t.activeTabIdx===i?"active":"",on:{click:function(e){return t.selectTab(i)}}},[t._v(t._s(e))])})],2),t._v(" "),a("p",{staticClass:"team_list_title"},[t._v(t._s(t.activeTabIdx?t.$t("aboutTeam.ourInstructors"):t.$t("aboutTeam.executiveTeam")))]),t._v(" "),a("ul",{staticClass:"team_list clearfix"},t._l(t.teamList,function(e,o){return a("li",{staticClass:"team_li"},[a("img",{attrs:{src:i("g2Y0")("./"+e.img)}}),t._v(" "),a("p",{staticClass:"team_li_name"},[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"team_li_title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.other,function(e,i){return a("p",{key:i,staticClass:"team_li_other"},[t._v(t._s(e))])})],2)}),0),t._v(" "),a("p",{staticClass:"team_join_title"},[t._v(t._s(t.$t("aboutTeam.joinUs")))]),t._v(" "),a("p",{staticClass:"team_join_desc"},[t._v(t._s(t.$t("aboutTeam.joinDesc")))]),t._v(" "),a("div",{staticClass:"team_job clearfix"},[a("div",{staticClass:"left clearfix",style:{top:t.jobTitleTop+"px"}},[t._l(t.positionTitleList,function(e,i){return a("p",{staticClass:"team_job_title",class:t.jobTitleArrowIdx===i?"active":"",on:{click:function(e){return t.toPosition("job"+(i+1),i)}}},[t._v("\n                "+t._s(i+1+"."+e)+"\n            ")])}),t._v(" "),a("span",{staticClass:"team_job_arrow",style:{top:30*t.jobTitleArrowIdx+30+"px"}})],2),t._v(" "),a("div",{staticClass:"right clearfix"},t._l(t.positionDescList,function(e,i){return a("div",{staticClass:"job_desc clearfix",class:t.jobTitleArrowIdx===i?"active":"",attrs:{id:"job"+(i+1)}},[a("p",[t._v(t._s(i+1+". "+t.$t("aboutTeam.jobDescription"))+":")]),t._v(" "),a("span",[t._v(t._s(e))])])}),0)]),t._v(" "),a("CommonFooter")],1)},staticRenderFns:[]};var r=i("VU/8")(s,n,!1,function(t){i("+Dcw")},"data-v-4534e598",null);e.default=r.exports}});