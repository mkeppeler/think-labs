(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),c=a("NmYn"),o=a.n(c),s=a("Wbzz"),l=a("Xrax"),r=a("k4MR"),d=a("TSYQ"),b=a.n(d),m=a("QH2O"),p=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,c=void 0===i?[]:i;return Object(u.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=c.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},A=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,c=i.baseUrl,o=i.subDirectory,l=c+"/edit/"+i.branch+o+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),y=a("dI71"),O=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),c=a===i,l=new RegExp(i+"/?(#.*)?$"),r=n.replace(l,a);return Object(u.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=c,t),O.listItem)},Object(u.b)(s.Link,{className:O.link,to:""+r},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},c))))))},t}(i.a.Component),v=a("MjG9"),j=a("CzIb"),w=a("Asxa"),T=a("OIbQ"),k=a.n(T),S=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(w.c,{className:k.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,c=t.frontmatter,d=void 0===c?{}:c,b=t.relativePagePath,m=t.titleType,p=d.tabs,A=d.title,y=d.theme,O=d.description,w=d.keywords,T=d.date,k=Object(j.a)().interiorTheme,B=Object(s.useStaticQuery)("2456312558").site.pathPrefix,I=B?n.pathname.replace(B,""):n.pathname,E=p?I.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",C=y||k;return Object(u.b)(r.a,{tabs:p,homepage:!1,theme:C,pageTitle:A,pageDescription:O,pageKeywords:w,titleType:m},Object(u.b)(g,{title:i?Object(u.b)(i,null):A,label:"label",tabs:p,theme:C}),p&&Object(u.b)(x,{title:A,slug:I,tabs:p,currentTab:E}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:b}),Object(u.b)(S,{date:T})),Object(u.b)(h.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:E}),Object(u.b)(l.a,null))}},"AAK/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return g}));var n=a("wx14"),i=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),["components"]),l={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},d=r("PageDescription"),b=r("Row"),m=r("Column"),p={_frontmatter:l},u=o.a;function g(e){var t=e.components,a=Object(i.a)(e,s);return Object(c.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(d,{mdxType:"PageDescription"},Object(c.b)("p",null,"This summary talks about what you should have learned during the lab and how you can achive full enterprise observability with ",Object(c.b)("strong",{parentName:"p"},"Instana"))),Object(c.b)("h2",null,"What you learned"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"How to use the Instana UI"),Object(c.b)("li",{parentName:"ul"},"How to install the Instana Agent"),Object(c.b)("li",{parentName:"ul"},"Observing infrastructure, Kubernetes, Applications/Services and web-sites"),Object(c.b)("li",{parentName:"ul"},"Understanding the Dynamic Graph, Context Guide and how it helps to simplify tasks"),Object(c.b)("li",{parentName:"ul"},"Basic understanding of smart alerts and how to use them to analyse/idetify issues")),Object(c.b)("h2",null,"Why go Instana?"),Object(c.b)(b,{mdxType:"Row"},Object(c.b)(m,{colSm:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"350px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"134.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Automatic Continuous Discovery of Your Full Application Stack",title:"Automatic Continuous Discovery of Your Full Application Stack",src:"/Markus-Keppeler/think-labs/static/ca48ccebd20e76ea5b6d115005443ba7/b4640/Automatic-Continuous-Discovery-of-Your-Full-Application-Stack.png",srcSet:["/Markus-Keppeler/think-labs/static/ca48ccebd20e76ea5b6d115005443ba7/7fc1e/Automatic-Continuous-Discovery-of-Your-Full-Application-Stack.png 288w","/Markus-Keppeler/think-labs/static/ca48ccebd20e76ea5b6d115005443ba7/b4640/Automatic-Continuous-Discovery-of-Your-Full-Application-Stack.png 350w"],sizes:"(max-width: 350px) 100vw, 350px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(c.b)(m,{colSm:4,colLg:8,noGutterSm:!0,mdxType:"Column"},Object(c.b)("h3",null,"Automatic, Continuous Discovery of Your Full Application Stack"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A single, lightweight agent per host continually discovers all components and deploys sensors crafted to monitor each technology"),Object(c.b)("li",{parentName:"ul"},"With no human intervention, sensors automatically collect configuration, changes, metrics, and events"),Object(c.b)("li",{parentName:"ul"},"Metrics from all components are collected in high fidelity with 1 second data granularity"),Object(c.b)("li",{parentName:"ul"},"Every request is traced across each microservice, automatically capturing the response time and context. No sampling, no partial traces"),Object(c.b)("li",{parentName:"ul"},"To understand how a system of services works together and the impact of component failure, Instana enhances traces with information about the underlying service, application, and system infrastructure using our Dynamic Graph")))),Object(c.b)(b,{mdxType:"Row"},Object(c.b)(m,{colSm:4,colLg:8,noGutterSm:!0,mdxType:"Column"},Object(c.b)("h3",null,"Build a Dependency Map for Real-Time Performance Analysis"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"All gathered data is organized into dependency relationships in our custom data store, the Dynamic Graph, continuously modeling your services and infrastructure"),Object(c.b)("li",{parentName:"ul"},"Every discovered component becomes a node in the graph that captures its state and includes metric data, configuration, dependencies, and component health"),Object(c.b)("li",{parentName:"ul"},"Continuous discovery defines the evolving dependency chain of the Dynamic Graph enabling both temporal and spatial deterministic analysis"))),Object(c.b)(m,{colSm:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"350px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"134.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Build a Dependency Map for Real Time Performance Analysis",title:"Build a Dependency Map for Real Time Performance Analysis",src:"/Markus-Keppeler/think-labs/static/4a82e86e576248a7021bdd7d02f2e96e/b4640/Build-a-Dependency-Map-for-Real-Time-Performance-Analysis.png",srcSet:["/Markus-Keppeler/think-labs/static/4a82e86e576248a7021bdd7d02f2e96e/7fc1e/Build-a-Dependency-Map-for-Real-Time-Performance-Analysis.png 288w","/Markus-Keppeler/think-labs/static/4a82e86e576248a7021bdd7d02f2e96e/b4640/Build-a-Dependency-Map-for-Real-Time-Performance-Analysis.png 350w"],sizes:"(max-width: 350px) 100vw, 350px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(c.b)(b,{mdxType:"Row"},Object(c.b)(m,{colSm:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"350px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"134.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Gain an Immediate and Exact Understanding of Performance",title:"Gain an Immediate and Exact Understanding of Performance",src:"/Markus-Keppeler/think-labs/static/91fc6837a1c606c1d593d3625bde6889/b4640/Gain-an-Immediate-and-Exact-Understanding-of-Performance.png",srcSet:["/Markus-Keppeler/think-labs/static/91fc6837a1c606c1d593d3625bde6889/7fc1e/Gain-an-Immediate-and-Exact-Understanding-of-Performance.png 288w","/Markus-Keppeler/think-labs/static/91fc6837a1c606c1d593d3625bde6889/b4640/Gain-an-Immediate-and-Exact-Understanding-of-Performance.png 350w"],sizes:"(max-width: 350px) 100vw, 350px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(c.b)(m,{colSm:4,colLg:8,noGutterSm:!0,mdxType:"Column"},Object(c.b)("h3",null,"Gain an Immediate and Exact Understanding of Performance"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Stream processing is used to analyze incoming data in real-time, uncovering service issues and creating “Incidents” nearly instantaneously"),Object(c.b)("li",{parentName:"ul"},"Every component’s health is determined by applying machine learning and preset health rules. “Issues” are created for any unhealthy component, while Incidents are only raised when end users are impacted"),Object(c.b)("li",{parentName:"ul"},"An Incident is a ‘root cause report’ with a correlated sequence of Events and Issues identifying the exact source of the problem"),Object(c.b)("li",{parentName:"ul"},"Incidents include metrics, traces, exceptions, logged errors, and configuration data correlated via the Dynamic Graph to facilitate root cause analysis")))),Object(c.b)(b,{mdxType:"Row"},Object(c.b)(m,{colSm:4,colLg:8,noGutterSm:!0,mdxType:"Column"},Object(c.b)("h3",null,"Optimize Performance with Unbounded Analytics™"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Unbounded Analytics is an analysis capability covering all of the browser and backend trace details collected by Instana"),Object(c.b)("li",{parentName:"ul"},"Filter every aspect of your data in an unlimited combination of ways, discovering performance outliers, problem patterns, or uniquely tagged traces"),Object(c.b)("li",{parentName:"ul"},"Some problems require more effort and sleuthing to solve. All Traces (remember, Instana doesn’t sample) are available to help you find the needle in the haystack"))),Object(c.b)(m,{colSm:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"350px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"134.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Optimize Performance with Unbounded Analytics",title:"Optimize Performance with Unbounded Analytics",src:"/Markus-Keppeler/think-labs/static/37b01420df81dee53c5fecde67dead92/b4640/Optimize-Performance-with-Unbounded-Analytics.png",srcSet:["/Markus-Keppeler/think-labs/static/37b01420df81dee53c5fecde67dead92/7fc1e/Optimize-Performance-with-Unbounded-Analytics.png 288w","/Markus-Keppeler/think-labs/static/37b01420df81dee53c5fecde67dead92/b4640/Optimize-Performance-with-Unbounded-Analytics.png 350w"],sizes:"(max-width: 350px) 100vw, 350px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-instana-lab-instana-lab-summary-mdx-e0c5aa895d88a5c7216f.js.map