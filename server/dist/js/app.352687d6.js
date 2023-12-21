(function(){"use strict";var t={6630:function(t,e,o){var n=o(144),a=o(998),s=o(6232),r=o(5550),i=o(266),l=o(2150),c=o(8323),u=o(9223),p=o(4324),d=o(5808),m=o(4525),f=o(5200),g=o(6733),h=o(1713),v=o(7953),b=function(){var t=this,e=t._self._c;return e(a.Z,{attrs:{id:"inspire"}},[e(g.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(m.Z,[e(f.km,[e(f.V9,[t._v(" ITLaguna ")]),e(f.oZ,[t._v(" Proyecto Pila Completa 1 ")])],1)],1),e(u.Z),e(d.Z,{attrs:{dense:""}},t._l(t.items,(function(o,n){return e(m.Z,{key:n,attrs:{to:o.link,link:"","active-color":"primary"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(p.Z,{attrs:{icon:o.icon}})]},proxy:!0}],null,!0)},[e(f.V9,{domProps:{textContent:t._s(o.title)}})],1)})),1)],1),e(s.Z,{attrs:{app:""}},[e(r.Z,{on:{click:function(e){t.drawer=!t.drawer}}}),e(v.qW,[t._v("Bienvenido")])],1),e(c.Z,[e(l.Z,{attrs:{fluid:""}},[e(h.Z,[e(i.Z,{staticClass:"router-view-column",attrs:{cols:"auto"}},[e("router-view")],1)],1)],1)],1)],1)},Z=[],C={data:()=>({drawer:null,items:[{title:"Inicio",icon:"mdi-home",link:"/"},{title:"Añadir post",icon:"mdi-note-plus",link:"/add-post"},{title:"Acerca De",icon:"mdi-help-box",link:"/about"},{title:"Login",icon:"mdi-help-box",link:"/login"}]})},w=C,y=o(1001),_=(0,y.Z)(w,b,Z,!1,null,null,null),x=_.exports,P=o(8345),k=o(6190),$=o(9582),S=o(4886),E=o(5495),O=function(){var t=this,e=t._self._c;return e(l.Z,[e(h.Z,{attrs:{"no-gutters":""}},t._l(t.posts,(function(o){return e(i.Z,{key:o._id,staticClass:"pa-3",attrs:{sm:"4"}},[e($.Z,{staticClass:"pa-1",attrs:{to:{name:"post",params:{id:o._id}}}},[e(E.Z,{attrs:{height:"250",src:`/${o.image}`}}),e(k.Z,{staticClass:"ml-4 mt-3",attrs:{small:"",outlined:"",color:"indigo"}},[t._v(" "+t._s(o.categoria)+" ")]),e(S.EB,{staticClass:"headline"},[t._v(" "+t._s(o.titulo)+" ")]),e(S.ZB,{staticClass:"py-0"},[e("p",[t._v(t._s(o.contenido.substring(0,100)+"..."))])])],1)],1)})),1)],1)},j=[],A=o(6154);const D="/api/post";class T{static async getAllPost(){const t=await A.Z.get(D);return t.data}static async getPostByID(t){const e=await A.Z.get(`${D}/${t}`);return e.data}static async addPost(t){const e=await A.Z.post(D,t);return e.data}static async updatePost(t,e){const o=await A.Z.patch(`${D}/${t}`,e);return o.data}static async delatePost(t){const e=await A.Z.delete(`${D}/${t}`);return e.data}}var F={name:"Home",data(){return{posts:[]}},async created(){this.posts=await T.getAllPost()}},z=F,R=(0,y.Z)(z,O,j,!1,null,null,null),B=R.exports,I=o(1625),L=o(5125),M=o(9484),N=o(7808),q=o(2648),V=function(){var t=this,e=t._self._c;return e(l.Z,[e(h.Z,{attrs:{"no-gutters":""}},[e(i.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e($.Z,{staticClass:"pa-5"},[e(S.EB,[t._v(" Añade un nuevo post ")]),e(u.Z),e(L.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(N.Z,{attrs:{label:"Titulo","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.titulo,callback:function(e){t.$set(t.post,"titulo",e)},expression:"post.titulo"}}),e(M.Z,{attrs:{label:"Categoria",items:t.categorias,"prepend-icon":"mdi-view-list",rules:t.rules},model:{value:t.post.categoria,callback:function(e){t.$set(t.post,"categoria",e)},expression:"post.categoria"}}),e(q.Z,{attrs:{label:"Contenido","prepend-icon":"mdi-note-plus",rules:t.rules},model:{value:t.post.contenido,callback:function(e){t.$set(t.post,"contenido",e)},expression:"post.contenido"}}),e(I.Z,{attrs:{rules:t.rules,"show-size":"",counter:"",multiple:"",label:"Selecciona una imagen"},on:{change:t.selectFile}}),e(k.Z,{staticClass:"mt-3",attrs:{type:"submit",color:"primary"}},[t._v("Subir post")])],1)],1)],1)],1)],1)},H=[],W=(o(7658),o(6455)),G=o.n(W),J={data(){return{rules:[t=>!!t||"Este campo es obligatorio!!"],categorias:["Acción","Aventura","RPG (Rol)","Disparos (Shooter)","Estrategia","Deportes","Carreras","Simulación","Puzzle","Plataformas","Lucha","Survival Horror","Mundo Abierto","Multijugador","Realidad Virtual","Indie"],post:{titulo:"",categoria:"",contenido:"",image:""},image:""}},methods:{selectFile(t){this.image=t[0]},async submitForm(){const t=new FormData;if(t.append("image",this.image),t.append("titulo",this.post.titulo),t.append("categoria",this.post.categoria),t.append("contenido",this.post.contenido),this.$refs.form.validate()){const e=await T.addPost(t);this.$router.push({name:"home"}),G().fire("",e.message,"success")}}}},U=J,Q=(0,y.Z)(U,V,H,!1,null,null,null),K=Q.exports,X=function(){var t=this,e=t._self._c;return e(l.Z,[e(h.Z,{attrs:{"no-gutters":""}},[e(i.Z,{staticClass:"pa-4",attrs:{sm:"8"}},[e($.Z,{staticClass:"pa-2"},[e(E.Z,{attrs:{src:`/${t.post.image}`}}),e(S.h7,{staticClass:"pb-0"},[e(h.Z,{staticClass:"mt-1 mx-1"},[e(i.Z,{attrs:{sm:"2"}},[e(k.Z,{attrs:{small:"",outlined:"",color:"primary"}},[t._v(" "+t._s(t.post.categoria)+" ")])],1),e(i.Z,{staticClass:"d-flex justify-end",attrs:{sm:"10"}},[e(k.Z,{attrs:{color:"success",text:"",to:{name:"edit-post",params:{id:t.post._id}}}},[t._v("Editar")]),e(k.Z,{attrs:{color:"red",text:""},on:{click:function(e){return t.removePost(t.post._id)}}},[t._v("Eliminar")])],1)],1)],1),e(S.Qq,{staticClass:"headline"},[e("h3",[t._v(t._s(t.post.titulo))])]),e(S.ZB,{staticClass:"gray--text"},[e("p",[t._v(t._s(t.post.contenido))]),e("p",[t._v(t._s(t.post.created))])])],1)],1),e(i.Z,{staticClass:"pa-4",attrs:{sm:"4"}},[e($.Z,{staticClass:"pa-2"},[e("h3",[t._v("Agregar Comentario")]),e("form",{on:{submit:function(e){return e.preventDefault(),t.addComment.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"author"}},[t._v("Nombre:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.author,expression:"newComment.author"}],style:{width:"100%",padding:"5px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"},attrs:{type:"text",id:"author",required:""},domProps:{value:t.newComment.author},on:{input:function(e){e.target.composing||t.$set(t.newComment,"author",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"content"}},[t._v("Comentario:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],style:{width:"100%",padding:"5px",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box",resize:"none"},attrs:{id:"content",required:""},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"rating"}},[t._v("Puntuación:")]),e("star-rating",{attrs:{"star-size":20},model:{value:t.newComment.rating,callback:function(e){t.$set(t.newComment,"rating",e)},expression:"newComment.rating"}})],1),e("button",{style:{padding:"10px 20px",backgroundColor:"#4caf50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},attrs:{type:"submit"}},[t._v("Agregar Comentario")])])]),e($.Z,{staticClass:"pa-2"},[e("h3",[t._v("Comentarios")]),0===t.comments.length?e("div",[t._v("No hay comentarios.")]):e("ul",t._l(t.comments,(function(o){return e("li",{key:o.id},[e("strong",[t._v(t._s(o.author))]),t._v(" en "),e("strong",[t._v(t._s(o.postTitle))]),t._v(": "+t._s(o.content)+" - Rating: "+t._s(o.rating)+" ")])})),0)])],1)],1)],1)},Y=[],tt=o(7848),et=o.n(tt),ot={components:{StarRating:et()},data(){return{post:{},comments:[],newComment:{author:"",content:"",rating:0}}},async created(){const t=await T.getPostByID(this.$route.params.id);this.post=t;const e=localStorage.getItem("postComments");e&&(this.comments=JSON.parse(e))},methods:{async removePost(t){const e=await T.delatePost(t);this.$router.push({name:"home"}),G().fire("",e.message,"success")},addComment(){this.comments.push({id:this.comments.length+1,author:this.newComment.author,content:this.newComment.content,rating:this.newComment.rating,postTitle:this.post.titulo}),this.newComment.author="",this.newComment.content="",this.newComment.rating=0,localStorage.setItem("postComments",JSON.stringify(this.comments))},resetComments(){localStorage.removeItem("postComments"),this.comments=[]}}},nt=ot,at=(0,y.Z)(nt,X,Y,!1,null,null,null),st=at.exports,rt=function(){var t=this,e=t._self._c;return e(l.Z,[e(h.Z,{attrs:{"no-gutters":""}},[e(i.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e($.Z,{staticClass:"pa-5"},[e(S.EB,[t._v(" Edita un post ")]),e(u.Z),e(L.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateForm.apply(null,arguments)}}},[e(N.Z,{attrs:{label:"Titulo","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.titulo,callback:function(e){t.$set(t.post,"titulo",e)},expression:"post.titulo"}}),e(M.Z,{attrs:{label:"Categoria",items:t.categorias,"prepend-icon":"mdi-view-list",rules:t.rules},model:{value:t.post.categoria,callback:function(e){t.$set(t.post,"categoria",e)},expression:"post.categoria"}}),e(q.Z,{attrs:{label:"Contenido","prepend-icon":"mdi-note-plus",rules:t.rules},model:{value:t.post.contenido,callback:function(e){t.$set(t.post,"contenido",e)},expression:"post.contenido"}}),e(I.Z,{attrs:{"show-size":"",counter:"",multiple:"",label:"Selecciona una imagen"},on:{change:t.selectFile}}),e(E.Z,{attrs:{src:`/${t.post.image}`,width:"128"}}),e(k.Z,{staticClass:"mt-3",attrs:{type:"submit",color:"success"}},[t._v("Editar post")])],1)],1)],1)],1)],1)},it=[],lt={data(){return{rules:[t=>!!t||"Este campo es obligatorio!!"],categorias:["Acción","Aventura","RPG (Rol)","Disparos (Shooter)","Estrategia","Deportes","Carreras","Simulación","Puzzle","Plataformas","Lucha","Survival Horror","Mundo Abierto","Multijugador","Realidad Virtual","Indie"],post:{titulo:"",categoria:"",contenido:"",image:""},image:""}},async created(){const t=await T.getPostByID(this.$route.params.id);this.post=t},methods:{selectFile(t){this.image=t[0]},async updateForm(){const t=new FormData;if(t.append("image",this.image),t.append("titulo",this.post.titulo),t.append("categoria",this.post.categoria),t.append("contenido",this.post.contenido),t.append("old_image",this.post.image),this.$refs.form.validate()){const e=await T.updatePost(this.$route.params.id,t);this.$router.push({name:"home"}),G().fire("",e.message,"success")}}}},ct=lt,ut=(0,y.Z)(ct,rt,it,!1,null,null,null),pt=ut.exports,dt=function(){var t=this,e=t._self._c;return e("main",{staticClass:"text-light"},[e("div",{staticClass:"container"},[e("section",{staticClass:"py-5 text-center container"},[e("div",{staticClass:"row py-lg-5"},[e("div",{staticClass:"col-lg-6 col-md-8 mx-auto"},[e("h1",{staticClass:"fw-light"},[t._v("Discord Login")]),e("p",{staticClass:"lead text-muted"},[t._v(" Conecta tu cuenta con nosotros para poder tener mas actualizaciones en el futuro!!! ")]),e("p"),e("div",[e("a",{on:{click:t.loginWithDiscord}},[t._v("Logeate con Discord")])]),e("p")])])])])])},mt=[],ft={methods:{loginWithDiscord(){A.Z.get("/auth").then((t=>{const e=t.data.redirectUrl;window.location.href=e})).catch((t=>{console.error(t)}))}}},gt=ft,ht=(0,y.Z)(gt,dt,mt,!1,null,null,null),vt=ht.exports;n.ZP.use(P.ZP);const bt=[{path:"/",name:"home",component:B},{path:"/add-post",name:"add-post",component:K},{path:"/post/:id",name:"post",component:st},{path:"/edit-post/:id",name:"edit-post",component:pt},{path:"/login",name:"Login",component:vt},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,9088))}],Zt=new P.ZP({mode:"history",base:"/",routes:bt});var Ct=Zt,wt=o(1705);n.ZP.use(wt.Z);var yt=new wt.Z({}),_t=o(5098);n.ZP.use(_t.Z,A.Z),n.ZP.config.productionTip=!1,new n.ZP({router:Ct,vuetify:yt,render:t=>t(x)}).$mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=t,function(){o.amdO={}}(),function(){var t=[];o.O=function(e,n,a,s){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],s=t[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(i=!1,s<r&&(r=s));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,a,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.11698c36.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";o.l=function(n,a,s,r){if(t[n])t[n].push(a);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+s){i=p;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",e+s),i.src=n),t[n]=[a];var d=function(e,o){i.onerror=i.onload=null,clearTimeout(m);var a=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(o)})),e)return e(o)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.f.j=function(e,n){var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(o,n){a=t[e]=[o,n]}));n.push(a[2]=s);var r=o.p+o.u(e),i=new Error,l=function(n){if(o.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,a[1](i)}};o.l(r,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,s,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var u=l(o)}for(e&&e(n);c<r.length;c++)s=r[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(u)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6630)}));n=o.O(n)})();
//# sourceMappingURL=app.352687d6.js.map