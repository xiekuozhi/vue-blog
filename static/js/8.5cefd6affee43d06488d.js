webpackJsonp([8],{"/oBs":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("ZYmg"),i={data:function(){return{title:"",description:"",content:"",atIndex:!1,superfluous:!0}},methods:{onCreate:function(){var t=this;n.a.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}},watch:{title:function(){this.title.length>=10?this.superfluous=!1:this.superfluous=!0}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"create"}},[s("h1",[t._v("创建文章")]),t._v(" "),s("h3",[t._v("文章标题")]),t._v(" "),s("el-input",{attrs:{maxlength:30},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.superfluous,expression:"superfluous"}],staticClass:"msg",class:{x:t.title.length<10}},[t._v("不少于"+t._s(t.title.length)+"/10个字符")]),t._v(" "),s("h3",[t._v("文章简介")]),t._v(" "),s("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),s("p",{staticClass:"msg",class:{x:t.description.length<30}},[t._v("不少于"+t._s(t.description.length)+"/30字符")]),t._v(" "),s("h3",[t._v("文章内容")]),t._v(" "),s("el-input",{attrs:{autosize:{minRows:4,maxRows:30},type:"textarea",rows:"20"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),s("p",{staticClass:"msg",class:{x:t.content.length<200}},[t._v("内容不少于"+t._s(t.content.length)+"/200")]),t._v(" "),s("p",[s("label",[t._v("是否展示到首页")]),t._v(" "),s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),s("el-button",{on:{click:t.onCreate}},[t._v("确定")])],1)},staticRenderFns:[]};var l=s("VU/8")(i,a,!1,function(t){s("zfzk")},null,null);e.default=l.exports},zfzk:function(t,e){}});
//# sourceMappingURL=8.5cefd6affee43d06488d.js.map