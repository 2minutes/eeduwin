webpackJsonp([9],{NsGt:function(e,t){},rlPj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("l/JR"),i=(a("L+OJ"),a("w24O"),[{title:"类型编号",dataIndex:"typeNo",key:"typeNo"},{title:"类型名称（中）",dataIndex:"typeNmCn",key:"typeNmCn"},{title:"类型名称（英）",dataIndex:"typeNmEn",key:"typeNmEn"},{title:"操作",key:"action",scopedSlots:{customRender:"tags"}}]),o={data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"type"}),headers:{authorization:"authorization-text"},file:[],typeList:[],editRow:{},tableHeader:i,addVisible:!1}},created:function(){this.initData()},methods:{initData:function(){var e=this;Object(n.a)({url:"courseType/query"}).then(function(t){console.log("teachers:",t);var a=t.types?t.types:[];a=a.map(function(e){return e.key=e.typeNo,e}),e.typeList=a})},edit:function(e){this.editRow=e,this.addVisible=!0},del:function(e){console.log("b:",e)},showAddModal:function(){this.addVisible=!0},handleCancel:function(){this.addVisible=!1,this.editRow={},this.form.resetFields()},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,a){if(console.log("valid:",e,a),!e){var i={typeNmCn:a.typeNmCn,typeNmEn:a.typeNmEn,parentNo:a.parentNo},o="courseType/add",r="新增成功!";t.editRow.typeNo&&(i.typeNo=t.editRow.typeNo,o="courseType/update",r="修改成功!"),Object(n.a)({url:o,params:i}).then(function(e){console.log("add:",e),200==e.code?(t.$message.success(r),t.addVisible=!1,t.form.resetFields(),t.editRow={},t.initData()):t.$message.error(e.desc)})}})}},components:{Menu:a("+EMp").a}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curd clearfix"},[a("Menu"),e._v(" "),a("div",{staticClass:"curd_right"},[a("a-button",{attrs:{type:"primary"},on:{click:e.showAddModal}},[e._v("\n            新增\n        ")]),e._v(" "),a("a-table",{attrs:{columns:e.tableHeader,"data-source":e.typeList},scopedSlots:e._u([{key:"name",fn:function(t){return a("a",{},[e._v(e._s(t))])}},{key:"tags",fn:function(t){return a("span",{},[a("a-tag",{attrs:{color:"green"},on:{click:function(a){return e.edit(t)}}},[e._v("修改")])],1)}}])},[e._v(" "),a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[e._v("Name")])])],1),e._v(" "),a("a-modal",{attrs:{title:(e.editRow.typeNo?"修改":"新增")+"课程类别",visible:e.addVisible,footer:null,width:800},on:{cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"类型名称（中）"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["typeNmCn",{rules:[{required:!0,message:"请输入类型名称（中文）"}],initialValue:e.editRow.typeNmCn}],expression:"[\n                        'typeNmCn',\n                        { \n                            rules: [{ required: true, message: '请输入类型名称（中文）' }],\n                            initialValue: editRow.typeNmCn \n                        },\n                    ]"}]})],1),e._v(" "),a("a-form-item",{attrs:{label:"类型名称（英）"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["typeNmEn",{rules:[{required:!0,message:"请输入类型名称（英文）"}],initialValue:e.editRow.lastNm}],expression:"[\n                        'typeNmEn',\n                        { \n                            rules: [{ required: true, message: '请输入类型名称（英文）' }],\n                            initialValue: editRow.lastNm \n                        },\n                    ]"}]})],1),e._v(" "),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n                    "+e._s(e.editRow.typeNo?"修改":"新增")+"\n                ")])],1)],1)],1)],1)},staticRenderFns:[]};var s=a("C7Lr")(o,r,!1,function(e){a("NsGt")},null,null);t.default=s.exports}});