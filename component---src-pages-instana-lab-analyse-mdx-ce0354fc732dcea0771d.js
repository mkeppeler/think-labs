(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),b=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),h=a("dI71"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(p.b)(b.Link,{className:v.link,to:""+l},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},o))))))},t}(r.a.Component),f=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,h=s.theme,v=s.description,k=s.keywords,P=Object(w.a)().interiorTheme,N=Object(b.useStaticQuery)("2456312558").site.pathPrefix,y=N?n.pathname.replace(N,""):n.pathname,I=m?y.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",H=h||P;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:v,pageKeywords:k,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:H}),m&&Object(p.b)(T,{title:g,slug:y,tabs:m,currentTab:I}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d})),Object(p.b)(j.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:I}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},LO68:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),c=(a("qKvR"),{}),l=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),s={_frontmatter:c},d=b.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"One of the most important pieces of making a working site is to define your\nnavigation items. This allows the theme to inform the SideNav component as well\nas the next/previous components at the bottom of each page.")),Object(i.b)("h2",null,"Header"),Object(i.b)("p",null,"Text"))}u.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-instana-lab-analyse-mdx-ce0354fc732dcea0771d.js.map