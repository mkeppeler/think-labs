(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("NmYn"),o=a.n(s),r=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),u=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,s=void 0===i?[]:i;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=s.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,s=i.baseUrl,o=i.subDirectory,c=s+"/edit/"+i.branch+o+"/src/pages"+t;return s?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},A=a("FCXl"),w=a("dI71"),k=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),l=n.replace(c,a);return Object(m.b)("li",{key:e,className:p()((t={},t[k.selectedItem]=s,t),k.listItem)},Object(m.b)(r.Link,{className:k.link,to:""+l},e))}));return Object(m.b)("div",{className:k.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:k.list},s))))))},t}(i.a.Component),y=a("MjG9"),x=a("CzIb"),j=a("Asxa"),v=a("OIbQ"),N=a.n(v),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(j.c,{className:N.a.row},Object(m.b)(j.a,null,Object(m.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,s=t.frontmatter,b=void 0===s?{}:s,p=t.relativePagePath,d=t.titleType,u=b.tabs,g=b.title,w=b.theme,k=b.description,j=b.keywords,v=b.date,N=Object(x.a)().interiorTheme,B=Object(r.useStaticQuery)("2456312558").site.pathPrefix,I=B?n.pathname.replace(B,""):n.pathname,C=u?I.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",K=w||N;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:K,pageTitle:g,pageDescription:k,pageKeywords:j,titleType:d},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:u,theme:K}),u&&Object(m.b)(O,{title:g,slug:I,tabs:u,currentTab:C}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:p}),Object(m.b)(T,{date:v})),Object(m.b)(A.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:C}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},PzYb:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return f}));var n=a("wx14"),i=a("zLVn"),s=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("qKvR"),["components"]),c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},b=l("PageDescription"),p=l("Row"),d=l("Column"),u=l("Accordion"),m=l("AccordionItem"),h={_frontmatter:c},g=o.a;function f(e){var t=e.components,a=Object(i.a)(e,r);return Object(s.b)(g,Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(b,{mdxType:"PageDescription"},Object(s.b)("p",null,"In this part of the the lab you will learn how to use the context guide and its benefits in Instana.")),Object(s.b)("h2",null,"The Context Guide"),Object(s.b)("p",null,"You might have noticed two dropdown menues, ",Object(s.b)("inlineCode",{parentName:"p"},"Stack")," and ",Object(s.b)("inlineCode",{parentName:"p"},"Upstream / Downstream")," in the top area of your views.\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"998px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.763888888888888%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAmElEQVQI1x3MSQuCYACEYf97xw7ty6GoLCRQ7BOy3SUtKyoMog6BRHRogfoLb9rhgYEZRrIfB5Srg7gHaDef2TOkI6YUGjplWZCpqaSrXbJ1jVys0jYoNnsxnVJL/CW7VF5m6u+Qwk+EFZ8G7zOL14nwGzH2tqimi2mt6I181L6LZs7Rhx5DZ4NprzEmy38/iHNCETP2xws/XaV+BR0L1JMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-context-buttons",title:"instana-context-buttons",src:"/Markus-Keppeler/think-labs/static/21c4dfc545e3bd401726ae8d53e2b9ba/e2fd6/instana-context-buttons.png",srcSet:["/Markus-Keppeler/think-labs/static/21c4dfc545e3bd401726ae8d53e2b9ba/7fc1e/instana-context-buttons.png 288w","/Markus-Keppeler/think-labs/static/21c4dfc545e3bd401726ae8d53e2b9ba/a5df1/instana-context-buttons.png 576w","/Markus-Keppeler/think-labs/static/21c4dfc545e3bd401726ae8d53e2b9ba/e2fd6/instana-context-buttons.png 998w"],sizes:"(max-width: 998px) 100vw, 998px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("p",null,"They are available on all dashboards like infrastructure, kubernetes, application dashboards and help to understand the context of the component you are currently viewing.\nThe contest guide is a visual representation of application prespective services and the related underlying infrastructure. Underneath this capability is Instanas ",Object(s.b)("strong",{parentName:"p"},"Dynamic Graph"),", a component in which all physical components of the infrastructure are tracked and associated with their logical counterparts - all kept automatically up-to-date, even when changes occur.\nClick ",Object(s.b)("a",{parentName:"p",href:"https://www.instana.com/docs/dynamic_graph/"},"Dynamic Graph")," if you want to dig deeper to understand the ",Object(s.b)("a",{parentName:"p",href:"https://www.instana.com/docs/dynamic_graph/"},"Dynamic Graph"),"."),Object(s.b)("h2",null,"Stack"),Object(s.b)("p",null,"The Stack dropdown button shows the different application perspective services and infrastructure linked to your dasboard component.\nYou find three tabs:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Application"),Object(s.b)("li",{parentName:"ul"},"Kubernetes"),Object(s.b)("li",{parentName:"ul"},"Infrastructure")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Applicaiton")," provides an application centric view which help to understand to which application the component belongs, which services are related and which endpoints. You can click on eahc of them to navigate to that entity.\nThe ",Object(s.b)("strong",{parentName:"p"},"Kubernetes")," tab of the Context Guide will list Kubernetes resources like Clusters, Deployments, Pods, Services, etc.\nWhereas ",Object(s.b)("strong",{parentName:"p"},"Infrastructure")," provides you a physical infrastructure view on related components like Hosts, Processes, Docker Container, Java Virtual Machines or others."),Object(s.b)(p,{mdxType:"Row"},Object(s.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAACqElEQVQ4y4VU227TQBT0l8If8Bl8BQ+oqgoSNyHxUEB8Aar6XKFWCEhStYkd765319dhZh2HJI2KpSNnT7xz5sy5ZK8/fsPJm3O8OPuEk7fnOPvwFafvPuP0/Re8pP8V38++X+Dp5SWeXFzg+dUV0PUIdYO6qdG0LZqm5e/RMhtr5K7Cj1+/cTObY7HKUTUNAq3vBzhjkS9XWK8NWvq6rkPbdoi6l9+hKA3W/EbAMUZkeQi4ryrMizX+5AVu+UHJi54fDMNA0J6EaGRVOp/ARv8Aw3NpHDwx9FTeIwuVhzWG0fLEpmEU3kgmMF0UgMwzJfmmQE3Xb//T4wVorGU6JW0N6yM6/jcCPbSWrJXydJZ2gak3KdCA1WqFrKa4PkSUZYncRMR2w274x2yywoUEOJ0dCeiuAHWezxdMmY6KGuY2shCiPuyluWtlFdAeAFY+IJKUnuvrG2SRgsppfZ3YDcPxdEeG+0WxvKeC1OqIxHBOQGogMcuqhqv7RwEPq2zJ2LLlpKN8s8VCGtZQ2nnBwngKPvRH05Wlou1UtiKQCKkHxXAxnyFbs+9yNq2xBoXtybLB0v2Ejbnk3AtgDjSswqhhvdGwLNcj4N0yh96FW6Lwt4hNxWbu9tPeFGWqsnyOgIF9Kw23fegZoWRDO+pjQgETl2TRpt4+1HCXYZ/OfqthmhSeM6EHVqpw1LJN/s2F/v8ahrEPJ4YJUJTlNGSpdCbAYyaA7oiGsR4Zanwz0RXte24ZYx0cm3ybVj+mNjV6Feotw/4IQ90fR49RBCRgzfY0Sg8Z1mnz7J53iyK2mXaYgFL7cIXJCi6LY82tRlZjT+e9ogzjOsvatBi1McYojz1i1O8wdAcpa5K2DLUc42YVCVx+mSZJoiuwUtK73yxc56fRi6MElO0v7/4SgiTJQ3cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-context-buttons",title:"instana-context-buttons",src:"/Markus-Keppeler/think-labs/static/ebef5a6016c1be0f8e25a44f8fafe658/3cbba/instana-stack-app.png",srcSet:["/Markus-Keppeler/think-labs/static/ebef5a6016c1be0f8e25a44f8fafe658/7fc1e/instana-stack-app.png 288w","/Markus-Keppeler/think-labs/static/ebef5a6016c1be0f8e25a44f8fafe658/a5df1/instana-stack-app.png 576w","/Markus-Keppeler/think-labs/static/ebef5a6016c1be0f8e25a44f8fafe658/3cbba/instana-stack-app.png 1152w","/Markus-Keppeler/think-labs/static/ebef5a6016c1be0f8e25a44f8fafe658/92c65/instana-stack-app.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAADB0lEQVQ4y11UWY7TQBD1TZE4AffgBvwg1g9AfPDDcodhE0hMxCwCksx46Y7tttv74712nMmMpUp1daqrXq3R87ef8OT1Bzx68Q6PX73HM8lvPkL3T3n/kvzB5y+4/+0r7p2c4OFqBQwj6rZD27Xo+p78hqKeFx0PSWZh8wK1bzCNI1reV8OA6zTD+Z+/uNhskVc1qq5Dz/umbZGZGHZXIC/KcNfyLsrzHNZaGFKWZSjKEvoaKuz4WGSbBoaOir5DSUcDHU7jhGmawB+MlEVpmiKSVaGSl6qusXyLMqbDFUpXU88xoi7IpqgQW0ZVewwEsF6vEVVVhYLGrN0FLqOeiMYjz4Eou5bpYf7kTOSaDoWfjQ+8T5IEkUKUscwYGGMR87J0Ljy4ZZCkfMuZuBz0zH3HCJVP6dcEE7WEr5CL0qEkievxguKY6qZlBJ4Gh1nmO5Gc6IsT5tB7T0Rz2Mqj3eVIMxPychdlxcfSFYiQAuo4VX6v6xhZJLh1+KMKyk7GmQY9Cgb3NCNqgwH1nmQ5kDGhVPGcQm4IV0ohXCKUsZz9OFfyJlxV3DdtcKwc6j8Zqvi2ZpT6fEWE8pKXFTKbw7BJY4ZrGHbHNlBFF+pJTiFXnkXog1zWTQi7Iu/Zl64qEZ1tLX79S/Hz8go/SOLfzzc4u85xmTpcJGWgy7TEamNxSt3lv9XG4HSdBS7Z5DRoiS42Ba6yHbaJwVVqsY4zXGd56DPn98RzykZOc8cRbA5yRjJFTbkP6YiUK1VaPaQmF6laPuRlmZZ5XNQeyvUyKRoCFXKZsNCHQYmXOxZCZNjk4ocKjzNN+6LUoQ/7Q18e96F2AqvcBg9qF3nXlITtsX80HjX2XOWbtqmP24ZfEfqQSkKYcexECdeV+DItdxHKwLFBIRbC0Jc8B4MBtvczUubQ7/vq7uhpgWoQtFkkN1qyYdHOPVsSfdiHWgzaheIJ51GNrUcKW/ywHHgejkZRZ20ZcRUud/XtkBWuSLMsHi/G9wbiXYmUAyCUkrcmx+9Nyk1fBllV/g9bHwaGSKP7OgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-context-buttons",title:"instana-context-buttons",src:"/Markus-Keppeler/think-labs/static/1610bb423d5f8efcb82a401ad8401630/3cbba/instana-stack-k8s.png",srcSet:["/Markus-Keppeler/think-labs/static/1610bb423d5f8efcb82a401ad8401630/7fc1e/instana-stack-k8s.png 288w","/Markus-Keppeler/think-labs/static/1610bb423d5f8efcb82a401ad8401630/a5df1/instana-stack-k8s.png 576w","/Markus-Keppeler/think-labs/static/1610bb423d5f8efcb82a401ad8401630/3cbba/instana-stack-k8s.png 1152w","/Markus-Keppeler/think-labs/static/1610bb423d5f8efcb82a401ad8401630/92c65/instana-stack-k8s.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAACzUlEQVQ4y31US47VMBB8B+UCbLgE12DBAgaJBbBAQgIOgMSC0VwARiBm3ieJ/3G+TVU7ybwZEJZasZ24UtXV7d3Fu8/y4s1HefbqvTx//UFevv2kaw3ML7D39MtXeXT5TR5fXsqTqysJuZOxH6Xvs4zjiJhkGAYZ+kF2nMzzLLWxYpyXmJKuGRwdDru6Fme9DJjjhWScMamVH79/Im7kO6IOQSIBnfdSN40Ya+VUVeJ9ULBpmpaYZWSQCdZ8l4ZRTN+L6Xpp8JMmZ/F4f70/yC5jcTzVADXiwPAO6H7oT5YfycL+4fNweyu7BIlkldq2fPy/sRwk63Pg9dwtAQO0V1VhGEIUB3CmwWO/RCw/RM5i20nAk/LJeF13kL8Bdl0HdlnNsJBsrBMDg6xzS5S9GAEMABfbjZ3F3IakDm+A3js1w8IUY4w0MIhp+NcgEA/3iDW3A9iSIRkr4GrKCbL3h6M+D8cT9iqdr1GhdFZGGaoIkOFyhOQQkwLv93vZtQBsIIn5okTKbViTdpVrAdYIcx1ZkwTMBZDM0kNAMqwXEB48Z0aj1AwcaJHngBx6mtAViRmFTEL8hjWqkrnBDglMOljwSbf5jA9y6QFKhgTkIGMaugJukk9gtrpJpisQWfBD9uo8T2CYkcOobPnOpaxyWVo9uqeYggQbW3qYDN1S5KX95q1DOAhQu6AyOWiS8VEBh2HJIYFK/pbihtQ16Rvg0nodDvVIviyXR+5Lf9/vlEh3rbrImFTiqPVWrqZxA+Qe5TJv5coaVTIJnHUKyiF6zSEZ1sgnbx+dI+j6aoKNKDFPBVl/ws75dbJalxtg39HNqAX6112w3QmzruiqB6P1IuH6pnaaS44W+2AIMJVdLgTmkzKmJYfTWY5oiltqcsaeS51cH9GuoVQFi3uX24g/JnWZBawup9Lw58Fcsqitj6UzsMeL4qYy2o7TNKr0P5vACI8lEvJDAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-context-buttons",title:"instana-context-buttons",src:"/Markus-Keppeler/think-labs/static/d4ee7e212c3fc062aa463413f4da886c/3cbba/instana-stack-infra.png",srcSet:["/Markus-Keppeler/think-labs/static/d4ee7e212c3fc062aa463413f4da886c/7fc1e/instana-stack-infra.png 288w","/Markus-Keppeler/think-labs/static/d4ee7e212c3fc062aa463413f4da886c/a5df1/instana-stack-infra.png 576w","/Markus-Keppeler/think-labs/static/d4ee7e212c3fc062aa463413f4da886c/3cbba/instana-stack-infra.png 1152w","/Markus-Keppeler/think-labs/static/d4ee7e212c3fc062aa463413f4da886c/d9f40/instana-stack-infra.png 1214w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(s.b)("h2",null,"Upstream/Downstream"),Object(s.b)("p",null,"The Upstream/Downstream will help you with the visualization and navigation to the dependencies of an application, service or endpoint, an infrastructure entity or a kubernetes entity."),Object(s.b)("p",null,"The information on the Upstream tab is helpful to identify which services and applications are impacted when the current component has an issues with things like high latency or errors. It shows services and application that that call the current entity directly and also calls from upstream services that are not monitored by Instana which will be grouped under “Not Monitored By Instana”."),Object(s.b)("p",null,"The Downstream information is helpful for finding out what services and applications the current entity depends on that are experiencing similar issues and may be the root cause. The Downstream tab shows services and applications that the current entity is directly calling."),Object(s.b)("h2",null,"Using the Context Guide"),Object(s.b)("p",null,"If you think back to the ",Object(s.b)("a",{parentName:"p",href:"/Markus-Keppeler/think-labs/instana-lab/observe"},"Observe your Environment")," part of the lab, how would Context Guide have helped to identify the root case of the issue more quickly instead of navigating through all views?"),Object(s.b)("p",null,"Let’s get familar with the Context guide"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Navigate to the ",Object(s.b)("strong",{parentName:"li"},"cart")," node.js application dashboard")),Object(s.b)(u,{mdxType:"Accordion"},Object(s.b)(m,{title:"Hint",mdxType:"AccordionItem"},Object(s.b)("p",null,"This can be easily done through selecting your host on the infrastructure view, scroll down in the hostmenue that popup to Node.js Apps, select cart v1.0.0 from the dropdown list and click ",Object(s.b)("strong",{parentName:"p"},"Open Dashboard")))),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Can you figure out the following information and where to find it?")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"How is this application exposed"),Object(s.b)("li",{parentName:"ul"},"Which IP-Adress has the kubernetes node the application is running?"),Object(s.b)("li",{parentName:"ul"},"What is the process name of the application in the container?")),Object(s.b)(u,{mdxType:"Accordion"},Object(s.b)(m,{title:"Hint",mdxType:"AccordionItem"},Object(s.b)("p",null,"The place to look for this information is under ",Object(s.b)("strong",{parentName:"p"},"Stack")),Object(s.b)("p",null,"You should have figured out the application is exposed to other services through a service called ",Object(s.b)("inlineCode",{parentName:"p"},"cart")," on the ",Object(s.b)("strong",{parentName:"p"},"Application")," or tab."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If you click on the service you can see that it is a HTTP Service."),Object(s.b)("li",{parentName:"ul"},"Under Flow you get an visual repesentation from where the cart service is called and who what it is calling.")),Object(s.b)("p",null,"On the ",Object(s.b)("strong",{parentName:"p"},"Kubernetes")," tab you can get details about the Service and how it is defined in kubernetes (Details)."),Object(s.b)("p",null,"Also on the *",Object(s.b)("em",{parentName:"p"},"Kubernetes")," tab you find the IP-Adress of the kubernetes node on which the container with the application runs."),Object(s.b)("p",null,"Finally you should have found the process of the application inside the k8s container on the ",Object(s.b)("strong",{parentName:"p"},"Infrastructure")," tab - server.js"))),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Can you figure out which service the cart application calls?")),Object(s.b)(u,{mdxType:"Accordion"},Object(s.b)(m,{title:"Hint",mdxType:"AccordionItem"},Object(s.b)("p",null,"For sure you looked under ",Object(s.b)("strong",{parentName:"p"},"Upstream / Downstream")," ;o)"),Object(s.b)("p",null,"On the tab ",Object(s.b)("strong",{parentName:"p"},"Downstream")," you should have figured out that it calls the redis service and the catalogue service"))),Object(s.b)("p",null,"In this lab we are using a rather simple application, if you have a more complex application the ",Object(s.b)("strong",{parentName:"p"},"Context Guide")," will really simplify the understanding of your environment and speed-up problem identification and resolution."))}f.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-instana-lab-instana-lab-context-mdx-40343f9ce78d512fb841.js.map