webpackJsonp([13],{UuCh:function(e,t){},neGu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("rVsN"),i=a.n(s),r=a("l/JR"),n=(a("L+OJ"),a("w24O"),a("+EMp")),o=a("UOUp"),c=[{title:"描述标题（中）",dataIndex:"descTitleCn",key:"descTitleCn"},{title:"描述标题（英）",dataIndex:"descTitleEn",key:"descTitleEn"},{title:"描述（中）",key:"courseDescCn",dataIndex:"courseDescCn"},{title:"描述（英）",key:"courseDescEn",dataIndex:"courseDescEn"},{title:"操作",key:"action",scopedSlots:{customRender:"tags"}}],l={data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"course"}),headers:{authorization:"authorization-text"},detail:[],descList:[],courseNo:"",detailVisible:!1,editRow:{},tableHeader:c}},created:function(){var e=this.$route.query;e.cno&&(this.courseNo=e.cno,this.initData())},methods:{initData:function(){var e=this;Object(r.a)({url:"course/query",params:{courseNo:this.courseNo}}).then(function(t){console.log("course:",t);var a=t.courses.length?t.courses[0]:[],s=a.courseDesc?a.courseDesc:[];s=s.map(function(e){return e.key=e.showRank,e}),e.descList=s,e.detail=a})},edit:function(e){this.editRow=e,this.detailVisible=!0},del:function(e){var t=this;o.a.confirm({title:"确认删除?",content:"删除后数据不可恢复!",cancelText:"取消",okText:"确认",onOk:function(){return new i.a(function(a,s){Object(r.a)({url:"course/deleteDesc",params:{id:e.id}}).then(function(e){200==e.code&&(t.$message.success("删除成功!"),t.initData()),a()})}).catch(function(){return console.log("Oops errors!")})},onCancel:function(){}})},showAddModal:function(){this.detailVisible=!0},closeDetail:function(){this.detailVisible=!1,this.editRow={},this.form.resetFields()},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,a){if(console.log("valid:",e,a),!e){var s=a;s.courseNo=t.courseNo;var i="course/addCourseDesc",n="新增成功!";t.editRow.id&&(s.id=t.editRow.id,i="course/updateCourseDesc",n="修改成功!"),Object(r.a)({url:i,params:s}).then(function(e){console.log("add:",e),200==e.code?(t.$message.success(n),t.detailVisible=!1,t.form.resetFields(),t.editRow={},t.initData()):t.$message.error(e.desc)})}})},handleTypeChange:function(e){var t="",a="";switch(e){case"1":t="课程描述",a="course detail";break;case"2":t="课程要求",a="Course Requirement/Pre-requisites";break;case"3":t="教师背景",a="Instructor";break;case"4":t="课程目标",a="Course Objectives";break;case"5":t="课程亮点",a="Course Highlights"}this.form.setFieldsValue({descTitleCn:t,descTitleEn:a})}},components:{Menu:n.a}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curd clearfix"},[a("Menu"),e._v(" "),a("div",{staticClass:"curd_right"},[a("a-button",{attrs:{type:"primary"},on:{click:e.showAddModal}},[e._v("\n            新增描述\n        ")]),e._v(" "),a("a-table",{attrs:{columns:e.tableHeader,"data-source":e.descList},scopedSlots:e._u([{key:"name",fn:function(t){return a("a",{},[e._v(e._s(t))])}},{key:"tags",fn:function(t){return a("span",{},[a("a-tag",{attrs:{color:"green"},on:{click:function(a){return e.edit(t)}}},[e._v("修改")]),e._v(" "),a("a-tag",{attrs:{color:"red"},on:{click:function(a){return e.del(t)}}},[e._v("删除")])],1)}}])},[e._v(" "),a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[e._v("Name")])])],1),e._v(" "),a("a-modal",{attrs:{title:(e.editRow.id?"修改":"新增")+"课程介绍",visible:e.detailVisible,footer:null,width:800},on:{cancel:e.closeDetail}},[a("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"描述类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["showRank",{rules:[{required:!0,message:"请选择描述类型"}],initialValue:e.editRow.showRank}],expression:"[\n                        'showRank',\n                        { \n                            rules: [{ required: true, message: '请选择描述类型' }],\n                            initialValue: editRow.showRank \n                        },\n                    ]"}],on:{change:e.handleTypeChange}},[a("a-select-option",{attrs:{value:"1"}},[e._v("\n                        课程描述\n                    ")]),e._v(" "),a("a-select-option",{attrs:{value:"2"}},[e._v("\n                        课程要求\n                    ")]),e._v(" "),a("a-select-option",{attrs:{value:"3"}},[e._v("\n                        教师背景\n                    ")]),e._v(" "),a("a-select-option",{attrs:{value:"4"}},[e._v("\n                        课程目标\n                    ")]),e._v(" "),a("a-select-option",{attrs:{value:"5"}},[e._v("\n                        课程亮点\n                    ")])],1)],1),e._v(" "),a("a-form-item",{attrs:{label:"描述标题（中）"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["descTitleCn",{rules:[{required:!0,message:"请输入描述标题（中）"}],initialValue:e.editRow.descTitleCn}],expression:"[\n                        'descTitleCn',\n                        { \n                            rules: [{ required: true, message: '请输入描述标题（中）' }],\n                            initialValue: editRow.descTitleCn \n                        },\n                    ]"}],attrs:{disabled:!0}})],1),e._v(" "),a("a-form-item",{attrs:{label:"描述标题（英）"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["descTitleEn",{rules:[{required:!0,message:"请输入描述标题（英）"}],initialValue:e.editRow.descTitleEn}],expression:"[\n                        'descTitleEn',\n                        { \n                            rules: [{ required: true, message: '请输入描述标题（英）' }],\n                            initialValue: editRow.descTitleEn \n                        },\n                    ]"}],attrs:{disabled:!0}})],1),e._v(" "),a("a-form-item",{attrs:{label:"描述（中）"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseDescCn",{rules:[{required:!0,message:"请输入描述（中）"}],initialValue:e.editRow.courseDescCn}],expression:"[\n                        'courseDescCn',\n                        { \n                            rules: [{ required: true, message: '请输入描述（中）' }],\n                            initialValue: editRow.courseDescCn \n                        },\n                    ]"}],attrs:{placeholder:"#号分隔",autoSize:{minRows:2,maxRows:6},allowClear:!0}})],1),e._v(" "),a("a-form-item",{attrs:{label:"描述（英）"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseDescEn",{rules:[{required:!0,message:"请输入描述（英）"}],initialValue:e.editRow.courseDescEn}],expression:"[\n                        'courseDescEn',\n                        { \n                            rules: [{ required: true, message: '请输入描述（英）' }],\n                            initialValue: editRow.courseDescEn \n                        },\n                    ]"}],attrs:{placeholder:"#号分隔",autoSize:{minRows:2,maxRows:6},allowClear:!0}})],1),e._v(" "),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n                    "+e._s(e.editRow.id?"修改":"新增")+"\n                ")])],1)],1)],1)],1)},staticRenderFns:[]};var d=a("C7Lr")(l,u,!1,function(e){a("UuCh")},null,null);t.default=d.exports}});