(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),i=a("NmYn"),b=a.n(i),c=a("Wbzz"),l=a("Xrax"),r=a("k4MR"),o=a("TSYQ"),p=a.n(o),d=a("QH2O"),u=a.n(d),g=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,s=e.tabs,i=void 0===s?[]:s;return Object(g.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:u.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||n,i=s.baseUrl,b=s.subDirectory,l=i+"/edit/"+s.branch+b+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:l},"Edit this page on GitHub"))):null},y=a("FCXl"),k=a("dI71"),O=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(k.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,s=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),i=a===s,l=new RegExp(s+"/?(#.*)?$"),r=n.replace(l,a);return Object(g.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(g.b)(c.Link,{className:O.link,to:""+r},e))}));return Object(g.b)("div",{className:O.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:O.list},i))))))},t}(s.a.Component),w=a("MjG9"),j=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,s=e.Title,i=t.frontmatter,o=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,u=o.tabs,A=o.title,k=o.theme,O=o.description,x=o.keywords,N=Object(j.a)().interiorTheme,v=Object(c.useStaticQuery)("2456312558").site.pathPrefix,T=v?n.pathname.replace(v,""):n.pathname,M=u?T.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"",Q=k||N;return Object(g.b)(r.a,{tabs:u,homepage:!1,theme:Q,pageTitle:A,pageDescription:O,pageKeywords:x,titleType:d},Object(g.b)(m,{title:s?Object(g.b)(s,null):A,label:"label",tabs:u,theme:Q}),u&&Object(g.b)(f,{title:A,slug:T,tabs:u,currentTab:M}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:p})),Object(g.b)(y.a,{pageContext:t,location:n,slug:T,tabs:u,currentTab:M}),Object(g.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},YMFj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("wx14"),s=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),c=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},r=l("PageDescription"),o=l("InlineNotification"),p={_frontmatter:c},d=b.a;function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r,{mdxType:"PageDescription"},Object(i.b)("p",null,"In this part of the the lab you will learn how Instana can be used to monitor websites, which is often called end-user monitoring.")),Object(i.b)("h2",null,"Website Montoring"),Object(i.b)("p",null,"Got to the ",Object(i.b)("strong",{parentName:"p"},"WebSites ","&"," Mobile Apps")," perspective in the Instana UI."),Object(i.b)("p",null,"Select the website called ",Object(i.b)("strong",{parentName:"p"},"Robot Shop"),", which we have already created for you. Look at the configuration tab to see the details."),Object(i.b)("p",null,"For website monitoring a tracking script has to be integrated in your website, to track browser requests. The request information is send to an instana reporting URL, usind a unique key.\nThe robot-shop application that you deployed into your Kubernetes cluster has this script already included, so nothing to do on the application site for you."),Object(i.b)(o,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," When deploying the robot-shop application you allready specified the values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"eum.key"),Object(i.b)("li",{parentName:"ul"},"eum.url")),Object(i.b)("p",null,"Which correspond to the reportingURL and the required key. ")),Object(i.b)("p",null,"If not still open, open a new borwser tab and enter the application URL for ",Object(i.b)("strong",{parentName:"p"},"Stan’s Robot Shop")," and browse the application. E.g. order some nice "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'export CLUSTER_ID=$(ibmcloud ks cluster ls | grep lab2220 | awk \'{print $2}\')\nNODEPORT=$(kubectl get -o jsonpath="{.spec.ports[0].nodePort}" service web)\nURL=$(ibmcloud ks cluster get --cluster $CLUSTER_ID --show-resources | grep "Ingress Subdomain" | awk \'{print $NF}\')\necho "http://$URL:$NODEPORT"\n')),Object(i.b)("p",null,"Click arround for some time, maybe order the artificial intelligence ",Object(i.b)("strong",{parentName:"p"},"STAN")," or reload the base URL of the application."),Object(i.b)("p",null,"Go back to the Instana UI, ensure that you selected ",Object(i.b)("strong",{parentName:"p"},"Live")," to get actual updated into the view.\n",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAACMElEQVQ4y1VUSY7cMAz0/78QIJdckicE84dgDjPJIZitx9Or292yrV02U0XbSUcAIYmSisUi7epp9y6/Ni/ycDjK736Qp66XmLPkXCTdWExZjesQk/gQpR+sNOdWBswBe2udVI/nZ7lvnuXb5k0+v7zK17eN9D7qA68Pk1gfZtDVFuA1yK1VAY8jHmXYBEcBiHVeQQg6YE3jmg/ILqaZIbPIZVQri1UX0O2dw4WgDx1nO++dxx7AESD0ca/Ml3SZZoI8SQNFvVcZaoaIHGUc5QRNOvimaVJf017kvd4ielHfDlrX252ueYXnm/pDz8m4uhojBGWUETeYLqMxMlkZFOpqOt0zpd5aOQOEZxaMeZ/v+YZyVPtjI/vjCek6da4jA6A5NZomx8xoZm2h93Z/0EzWoalnFmUROWXM0GQaJ/EFuiWIjgAjZFjBVnNa/YC7/84KYtmEotDJ/BvXSxfBBoA/jkc5QHSKRKYE1pksljUDraxKyQiSpfOJGnbakMbDnJUMLc9DkM4FMTgLYBKXSkdW0s9dMOueZn9azmAVRfVYrFVir42l6CW20cyi/GXDNdvGLc1O33+NzTb42O0V4FYnXmZLmKuR7xsvn3720ppBs2Ggvuvk7tXJl8cOPUm/1UDVCkBdVFywU+3K/A3zK2BVrzYsX0SRAfvDkOTiR2l9kR7F6NMkQ2SVA7Uy4tA27aWVuq5VCzY5UyBwe+3Q8Jflh5EVsDZBgWwGEOZhAfwDQBw/eVPvHwoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"instana-website-summary",title:"instana-website-summary",src:"/think-labs/static/c9f91443bbb841f13d229dde4280a93e/3cbba/instana-website-summary.png",srcSet:["/think-labs/static/c9f91443bbb841f13d229dde4280a93e/7fc1e/instana-website-summary.png 288w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/a5df1/instana-website-summary.png 576w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/3cbba/instana-website-summary.png 1152w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/0b124/instana-website-summary.png 1728w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/4ea69/instana-website-summary.png 2304w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/61c60/instana-website-summary.png 2368w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"Look at the different tabs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Summary"),Object(i.b)("li",{parentName:"ul"},"Speed"),Object(i.b)("li",{parentName:"ul"},"Resources"),Object(i.b)("li",{parentName:"ul"},"HTTP Requests"),Object(i.b)("li",{parentName:"ul"},"JS Errors (should be empty ;-)"),Object(i.b)("li",{parentName:"ul"},"Geography - maybe switch to the 3D view"),Object(i.b)("li",{parentName:"ul"},"Custom Events - empty"),Object(i.b)("li",{parentName:"ul"},"Pages"),Object(i.b)("li",{parentName:"ul"},"Alerts - hopefully also empty")),Object(i.b)("p",null,"Go back to the ",Object(i.b)("strong",{parentName:"p"},"HTTP Requests")," Tab and click on the origin for your cluster"),Object(i.b)("p",null,"To analyse a specific call end to end, click on on of the bars in the call windows and select ",Object(i.b)("inlineCode",{parentName:"p"},"View in Analyse"),"\n",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.83333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAABYlAAAWJQFJUiTwAAACRUlEQVQ4y21TyY4UMQzN//8UR86AQByQgBmNEN1TXdnjxFl4drrRCBG5olTi7dnP5tvx8uHy8u739eNpG/e3Uhu/PdfKVGtMKcRUqELMJdpnb7/c7PfT4TJnirmU2tSgQXu74C6yHfFjN1QqjmsMZs5QnIsK+ZhciLBkNetjUG2l0Bijb+kD9ybHSDlLHizR5tfnHpK11jkXQiwSmNdaMZMLvuQSI0K0MSccGXXTgweQfJzh+PykfgceU0xRkXTNec7pPPTicTtP5/BrMmLCeRcMuXJek7iFlO6XwKmYoYZSlMbUGizwiwgGASHIZIPBh33jlN8590Ed3X9l71IFc1h7szZrKEJ1S0GgpWvOJQ2QeLDkhuQUP+4LERCZh96/a80Fg5uz67EQstb+VtmMsev/n4VIVpgj4EO4puyvt5+9V62mLINmKsC5W7dV9w5Bp7rW0rpLysHFX43Lbj5UDGq/BWVjsRfZjiDo/35tPLS3Sw77FQxzMdqINvvjOFGGHROE2YUJyNU7awMYI1RlMQ2Vx5R3s5uCDc/M2qzez+D5sTY8MI6UEK2190+nK20O0FOnAEyoRKzNgAaYUFWSUmBPiFzWmkq1GQMhbDbWh5t1OWdgkoyVnEhYSjgmJgQKMi93nghJkfGdJEAVMRtUXk+ZhKYwjuR5SEvBkZBkvA57Xl8PpIA8Qd7ddiOopLwddCcCY4XMny4/XEmzz6aYcYmR8iHgmHI+re3aEYkMliMHoSf22jJVqrxvZNYer38VwFa9aX8A88FTcb4b5tMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"instana-website-httprequests",title:"instana-website-httprequests",src:"/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/3cbba/instana-website-httprequests.png",srcSet:["/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/7fc1e/instana-website-httprequests.png 288w","/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/a5df1/instana-website-httprequests.png 576w","/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/3cbba/instana-website-httprequests.png 1152w","/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/0b124/instana-website-httprequests.png 1728w","/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/d890f/instana-website-httprequests.png 1852w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"Open the Call group ",Object(i.b)("inlineCode",{parentName:"p"},"/api/catalogue/categories"),"and click on one of the get GET requests\n",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAABgElEQVQozy1S23bkIAzL/39hX3bbbTozuXCLwWAb0lQzXY6Oj0gipNhMR+bdR1TmBpKO7EK8L9v9sdba1Hofp/UhovjCe8+lqIqqcq0ThMvuShWIM85owrVR4UT5pR0hHs4Hynnx+f3mPpe4egox4fmUuQJivYrGt9njBXEqjVj9wXvMW6A9FZfK3ZV/W/lY88MztpF4QuIjF4hZbF7T+22dV78fHFlve/z79dqCh7yl4osskZZA4A5iKP87q2nKGrNR7VTtqCO3bxYJdOZ6sVyloY6D3fzogXppE/7t1xniipQPv81un537ctunK0sE6prOQMPTGbJscf8z2yOYp4nQNVExQ3dgU7iFo0Z6AoRZjtwKS1czOGiv3NZlqwyvPkXKIdFvw1o3GWfWXmw8oV3H2fpp53ld1/f1XH0MzNLGwAgRu6y7h/IJ1WqdmuUXQKqikb1px8wACJro5jzq0xmxcTVKa4hdVSAOLKkqAAIxTmnWYYwFZzNbtx13BxF+AMPkO0N6aQETAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"instana-analyse-httprequestgroup",title:"instana-analyse-httprequestgroup",src:"/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/3cbba/instana-analyse-httprequestgroup.png",srcSet:["/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/7fc1e/instana-analyse-httprequestgroup.png 288w","/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/a5df1/instana-analyse-httprequestgroup.png 576w","/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/3cbba/instana-analyse-httprequestgroup.png 1152w","/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/0b124/instana-analyse-httprequestgroup.png 1728w","/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/59ab2/instana-analyse-httprequestgroup.png 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"You will be preseted with the different activities in request. To view what gets executed on the backend of the application for this request, click ",Object(i.b)("inlineCode",{parentName:"p"},"View Backend Trace"),".\n",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAABYlAAAWJQFJUiTwAAACRElEQVQoz21TS4/UMAye//8vEAfggsSJC6vRckBoV1pWiAPa3Xkwnb6bpk2bNA8n5UvnsRLCtSLHiR3789dVJ4a8Yv0w1k2b5tX+cOT9oI2dtDmpmoyctFRKDCPjnHe9lEprje1qGFVe1mXN8rJK0vxPkmZFVTNeVKysm6Jq4I+eplXaSDVBkdFYC2MlJ4PIomx4J6B9TN/BYG3XtN2ycuTivTDWWUdQsyiM1WQsa3FZ+BC8D0Q+LN8i4arkvXXO2lfV2sbgrheT1hTFz/NsnLdEc/i/zBdxRCtlDODBRqMYTyHQvjeZ0IEsGkNzWMk78mSMcc5dg5eyrQtaFYcnke7ru1KkUzx5fQAVzFNjTe+ufs0t341KGrxscX77+PHhaV2+9LLU8z8SZtLo2F8dZL1TF8Aq1u2yY1I3ec8rzoumPWt9NkrGoVf/yR4xKgRj1C3H2DSaByXO3DgzRKvTuhiRLSfFtE1EG1VIro5CqGX6bgEJ0BDWWCSdZxanGHxsAzuiiLbGbW0YSuwG5FMxK94xuLlL0t+bPXpTi2f28270D4x+clKEXAgmN7T6+bHYHrMkq5AEaSrGGy7W3+7fffp8LOp9UhyyCmz78n375ub5/fop32QoaAnups2vfAdipyUu4VpWsrxu8cMMSiMXgpO8RvDN3e7t7fbD1022vQTrwVXPPR+GUU7xH1KxcrC3H0B8kM13QgIkkPZloPvG/WBuPJU9gaeKukwKCbKBSYEWeJzzowT85DyMiKU7A+YBGOBC1r/rsZDyD9obpwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"instana-analyse-requesttype",title:"instana-analyse-requesttype",src:"/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/3cbba/instana-analyse-requesttype.png",srcSet:["/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/7fc1e/instana-analyse-requesttype.png 288w","/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/a5df1/instana-analyse-requesttype.png 576w","/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/3cbba/instana-analyse-requesttype.png 1152w","/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/0b124/instana-analyse-requesttype.png 1728w","/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/59ab2/instana-analyse-requesttype.png 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"Scroll down to the Calls Section to see the details of the call and the time spend in the sub calls.\n",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC6klEQVQ4y21Ua2/TQBDMr+e/8J2HKiGVAgJUKsiXoja0TdqkaR62z+fzvXy2h921E4rUSKt7+G52dmcuk7Iy2O4LGOthakvzHE1qjxGb9F+E2MD7AE339lkOVWpY52WP708sTbJCYbPLsFpvkBclKlPTqOTAi6AjsICHYeR9FyImzkfs80IAla7A6+FgPB48MHs+ckgVPI//QCeMaqwbaMcooyPW1vshaF3zd9qrrJeE/N1YK2Vzq1wcQPn8xNOkUCXathWGuqqQaM4lOzpQ1TVK2u9pr9pv0KWBSUXnFN2ragfftHI/Ng0xJEBmyOIwUNt1Mh5EYWZNCFgoj9czg1nh0VAl9VjVUIFFTaOUzAxZBKVyEA0AHD2Ovz5RNMhcxMkq4K6MaIklsz6AcL+5DdxH6SEzWece91uL2yeLxS5gmTV4oFgVLZYl8KQB7yhROwiy2e5wc3uHu/kC9w9LLFeP0iICbEipBuvfUyzOz3Dz/ROuv36UuPr8AX8urzEn8je7hPtisBCz0cQwVxqZNtAkDLM8qsz98M7C1gYx2LHs7lDzszX3dQDcqQqZcXAkSE3KMylWWnrIyrKqGfkxJ+UCJelIHDY2Z05tN47tIByttXg2IKUkSQ5GF4aefMSRul6AajrI+5UhxqQoWyLEOKqfJIEqy6P52XZ+1EJs452DMhZ5HYR2YTyFE6YtJeGDzKqnZPwy2Frrp428ZX6GCxJFk1M40cDQewmeMyMXgoSXiMLOcN8MvRbP7egFjK3DCZhtk4anKD0staVMePEXG2KWOlzlCa+mERfbRgTix8D+tXSxckygOQB22OsH6PUp1PobQnkJvb2A2vxCuf0pofdTlLspwv4HOv9IvQbsCFiR4TWFFUC2DQFaM0e+eIf17C304xny+Qmy2RvUtGcX76GWp3DZOVL2Ba1bUg9BVqtF5b4fhOQeC0NLfSLxJGugV8alU1ukVN7v+BuP/eBGMoP0+vh/GOMYw/wvJZFsmn6HkqgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"instana-analyse-backendtrace",title:"instana-analyse-backendtrace",src:"/think-labs/static/c15969195be7816524edff9278a04c72/3cbba/instana-analyse-backendtrace.png",srcSet:["/think-labs/static/c15969195be7816524edff9278a04c72/7fc1e/instana-analyse-backendtrace.png 288w","/think-labs/static/c15969195be7816524edff9278a04c72/a5df1/instana-analyse-backendtrace.png 576w","/think-labs/static/c15969195be7816524edff9278a04c72/3cbba/instana-analyse-backendtrace.png 1152w","/think-labs/static/c15969195be7816524edff9278a04c72/0b124/instana-analyse-backendtrace.png 1728w","/think-labs/static/c15969195be7816524edff9278a04c72/59ab2/instana-analyse-backendtrace.png 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"Congratulations you have sucessfully observed a request end to end from the browser to a database."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-instana-lab-instana-lab-website-mdx-389a1e439a867141a2dd.js.map