(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("NmYn"),r=n.n(o),c=n("Wbzz"),l=n("Xrax"),b=n("k4MR"),s=n("TSYQ"),u=n.n(s),m=n("QH2O"),d=n.n(m),p=n("qKvR"),j=function(e){var t,n=e.title,a=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},n)))))},g=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,o=i.baseUrl,r=i.subDirectory,l=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},N=n("FCXl"),f=n("dI71"),v=n("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),o=n===i,l=new RegExp(i+"/?(#.*)?$"),b=a.replace(l,n);return Object(p.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(p.b)(c.Link,{className:v.link,to:""+b},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},o))))))},t}(i.a.Component),x=n("MjG9"),T=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,u=t.relativePagePath,m=t.titleType,d=s.tabs,g=s.title,f=s.theme,v=s.description,I=s.keywords,q=Object(T.a)().interiorTheme,y=Object(c.useStaticQuery)("2456312558").site.pathPrefix,k=y?a.pathname.replace(y,""):a.pathname,w=d?k.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",C=f||q;return Object(p.b)(b.a,{tabs:d,homepage:!1,theme:C,pageTitle:g,pageDescription:v,pageKeywords:I,titleType:m},Object(p.b)(j,{title:i?Object(p.b)(i,null):g,label:"label",tabs:d,theme:C}),d&&Object(p.b)(h,{title:g,slug:k,tabs:d,currentTab:w}),Object(p.b)(x.a,{padded:!0},n,Object(p.b)(O,{relativePagePath:u})),Object(p.b)(N.a,{pageContext:t,location:a,slug:k,tabs:d,currentTab:w}),Object(p.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},IHbj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("013z"),c=(n("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=l("PageDescription"),s=l("Title"),u=l("InlineNotification"),m={_frontmatter:c},d=r.a;function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<InlineNotification>")," component is used to communicate important\ninformation to a user.")),Object(o.b)("h2",null,"Example"),Object(o.b)(s,{mdxType:"Title"},"Info"),Object(o.b)(u,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Lorem ipsum:")," dolor sit amet,\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/think-labs/components/InlineNotification"}),"consectetur adipiscing")," elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.")),Object(o.b)(s,{mdxType:"Title"},"Error"),Object(o.b)(u,{kind:"error",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Error:")," dolor sit amet,\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/think-labs/components/InlineNotification"}),"consectetur adipiscing")," elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.")),Object(o.b)(s,{mdxType:"Title"},"Success"),Object(o.b)(u,{kind:"success",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Success:")," dolor sit amet,\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/think-labs/components/InlineNotification"}),"consectetur adipiscing")," elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.")),Object(o.b)(s,{mdxType:"Title"},"Warning"),Object(o.b)(u,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning:")," dolor sit amet,\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/think-labs/components/InlineNotification"}),"consectetur adipiscing")," elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.")),Object(o.b)("h2",null,"Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/InlineNotification/InlineNotification.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/InlineNotification",path:"components/InlineNotification/InlineNotification.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/InlineNotification"}),'// Info\n\n<InlineNotification>\n\n**Lorem ipsum:** dolor sit amet,\n[consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.\n\n</InlineNotification>\n\n// Error\n\n<InlineNotification kind="error">\n\n**Error:** dolor sit amet,\n[consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.\n\n</InlineNotification>\n\n// Success\n\n<InlineNotification kind="success">\n\n**Success:** dolor sit amet,\n[consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.\n\n</InlineNotification>\n\n// Warning\n\n<InlineNotification kind="warning">\n\n**Warning:** dolor sit amet,\n[consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.\n\n</InlineNotification>\n')),Object(o.b)("h3",null,"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"propType"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"children"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"node"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pass in the children that will be rendered within the notification")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"className"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specify an optional className to be applied to the container node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kind"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"info")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"error"),", ",Object(o.b)("inlineCode",{parentName:"td"},"info"),", ",Object(o.b)("inlineCode",{parentName:"td"},"success"),", ",Object(o.b)("inlineCode",{parentName:"td"},"warning"))))))}p.isMDXComponent=!0},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-inline-notification-mdx-477c02f77f7f39b6bca8.js.map