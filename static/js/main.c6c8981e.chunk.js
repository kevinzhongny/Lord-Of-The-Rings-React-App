(this["webpackJsonplord-of-the-rings-react-app"]=this["webpackJsonplord-of-the-rings-react-app"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(0),a=c.n(n),i=c(29),s=c.n(i),h=(c(38),c(13)),j=c.n(h),l=c(30),o=c(14),u=c(15),d=c(19),b=c(18),O=(c.p,c(40),c(31)),x=c.n(O),p=c(10),f=c(2),v=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(r.jsx)(p.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(p.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(p.b,{to:"/Characters",children:"Characters"})})]})}),Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{path:"/characters",children:Object(r.jsx)(m,{})}),Object(r.jsx)(f.a,{path:"/",children:Object(r.jsx)(g,{})})]})]})})}}]),c}(a.a.Component),m=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(e){var r;return Object(o.a)(this,c),(r=t.call(this,e)).state=[],r}return Object(u.a)(c,[{key:"getCharacters",value:function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://the-one-api.dev/v2/character?sort=name:asc",{headers:{Authorization:"Bearer 9uTC8uqZwMP1lQXd-bhV"}});case 3:t=e.sent,this.setState({characters:t.data.docs}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:this.state.characters&&this.state.characters.map((function(e){return Object(r.jsxs)("li",{children:[e.name,Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Race: ",e.race]}),Object(r.jsxs)("li",{children:["Gender: ",e.gender]}),Object(r.jsxs)("li",{children:["Birth: ",e.birth]}),Object(r.jsxs)("li",{children:["Death: ",e.death]}),Object(r.jsxs)("li",{children:["Realm: ",e.realm]}),Object(r.jsxs)("li",{children:["WikiURL: ",Object(r.jsx)("a",{href:e.wikiUrl,children:e.wikiUrl})]})]})]},e.id)}))})})}}]),c}(a.a.Component);function g(){return Object(r.jsx)("h2",{children:"Home"})}var k=v,C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),a(e),i(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),C()}},[[64,1,2]]]);
//# sourceMappingURL=main.c6c8981e.chunk.js.map