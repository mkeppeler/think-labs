(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("NmYn"),b=a.n(s),l=a("Wbzz"),r=a("Xrax"),c=a("k4MR"),o=a("TSYQ"),p=a.n(o),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,s=void 0===i?[]:i;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=s.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,s=i.baseUrl,b=i.subDirectory,r=s+"/edit/"+i.branch+b+"/src/pages"+t;return s?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:r},"Edit this page on GitHub"))):null},y=a("FCXl"),w=a("dI71"),f=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),s=a===i,r=new RegExp(i+"/?(#.*)?$"),c=n.replace(r,a);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=s,t),f.listItem)},Object(u.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},s))))))},t}(i.a.Component),O=a("MjG9"),x=a("CzIb"),j=a("Asxa"),N=a("OIbQ"),v=a.n(N),T=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(j.c,{className:v.a.row},Object(u.b)(j.a,null,Object(u.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,s=t.frontmatter,o=void 0===s?{}:s,p=t.relativePagePath,d=t.titleType,m=o.tabs,A=o.title,w=o.theme,f=o.description,j=o.keywords,N=o.date,v=Object(x.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,q=I?n.pathname.replace(I,""):n.pathname,Q=m?q.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",B=w||v;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:B,pageTitle:A,pageDescription:f,pageKeywords:j,titleType:d},Object(u.b)(g,{title:i?Object(u.b)(i,null):A,label:"label",tabs:m,theme:B}),m&&Object(u.b)(k,{title:A,slug:q,tabs:m,currentTab:Q}),Object(u.b)(O.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p}),Object(u.b)(T,{date:N})),Object(u.b)(y.a,{pageContext:t,location:n,slug:q,tabs:m,currentTab:Q}),Object(u.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},YMFj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));var n=a("wx14"),i=a("zLVn"),s=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),["components"]),r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},o=c("PageDescription"),p=c("InlineNotification"),d={_frontmatter:r},m=b.a;function u(e){var t=e.components,a=Object(i.a)(e,l);return Object(s.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(o,{mdxType:"PageDescription"},Object(s.b)("p",null,"In this part of the the lab you will learn how Instana can be used to monitor websites, which is often called end-user monitoring.")),Object(s.b)("h2",null,"Website Montoring"),Object(s.b)("p",null,"Got to the ",Object(s.b)("strong",{parentName:"p"},"WebSites ","&"," Mobile Apps")," perspective in the Instana UI."),Object(s.b)("p",null,"Select the website called ",Object(s.b)("strong",{parentName:"p"},"Robot Shop"),", which we have already created for you. Look at the configuration tab to see the details."),Object(s.b)("p",null,"For website monitoring a tracking script has to be integrated in your website, to track browser requests. The request information is send to an instana reporting URL, usind a unique key.\nThe robot-shop application that you deployed into your Kubernetes cluster has this script already included, so nothing to do on the application site for you."),Object(s.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," When deploying the robot-shop application you allready specified the values:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"eum.key"),Object(s.b)("li",{parentName:"ul"},"eum.url")),Object(s.b)("p",null,"Which correspond to the reportingURL and the required key. ")),Object(s.b)("p",null,"If not still open, open a new borwser tab and enter the application URL for ",Object(s.b)("strong",{parentName:"p"},"Stan’s Robot Shop")," and browse the application. E.g. order some nice "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'export CLUSTER_ID=$(ibmcloud ks cluster ls | grep lab2220 | awk \'{print $2}\')\nNODEPORT=$(kubectl get -o jsonpath="{.spec.ports[0].nodePort}" service web)\nURL=$(ibmcloud ks cluster get --cluster $CLUSTER_ID --show-resources | grep "Ingress Subdomain" | awk \'{print $NF}\')\necho "http://$URL:$NODEPORT"\n')),Object(s.b)("p",null,"Click arround for some time, maybe order the artificial intelligence ",Object(s.b)("strong",{parentName:"p"},"STAN")," or reload the base URL of the application."),Object(s.b)("p",null,"Go back to the Instana UI, ensure that you selected ",Object(s.b)("strong",{parentName:"p"},"Live")," to get actual updated into the view.\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAACLUlEQVQ4y1VUW46cMBDk/leIlJ/8RDlBpNwhykdeUpTsimXnyTBgYxtsQ6eqMcrEUsuvdnVXdUNVX8/yo36Sr+eL/LKj/LZW5pQkpSzxweaY1Lie5ihhmsWOTtpbJyPmCXvnvFQ/uxf50v6RD3Utb5+e5T1mG2Z9EPRhFBemDXS3ArwHebQq+ElmPEqwFQcZIM4HBSHoiDWNaz5gdnPcMiSLlBe1XKzqnBPrPRwmfeg5u23vA/YAJgjPuNfMC13SjJAnaiAEhF/VG6sROZZlkSs0MThb11XP2u4uL80B0bOeHaF1czjqei33dfOq98y4MijEAABGWeBEuozGyMxqwH0/GN2TkgWjG0B455Ax/fmeb8ik6uB8ulxB14PCJPtIAGivrdLk0IxK1g56H05nZbIPpZ5YFK1OxAZiQ5N1WSVkFCpCdESlDDvYbl6rP8H3311GLBdRFHKntd6KmZENAD9fLnKG6PDUTAmsM7Moawbas8owPycxAZTJnw05BJh3kpDxbZzEoJ0GyEEZZlSaFZxZybB1waZ73M5juYNVrvTYXiX22pKzOrGN9ibes+Ga/r40O8/+a2y2zevxpFV+1InObImhH+RjHeTNdyudGZUNA1lj5NOzl3ffDHqS504DVbkIS11UXGSn2uXtG+ZXMKKqvZvKF5F1fx6j3MMiXchiUQwbVxmhY0Vxh74Xj7bp7p00TaNaMBApELjrDRr+Xn4YSQGbYVIglwD0APgXAXg/yj6vcwIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-website-summary",title:"instana-website-summary",src:"/think-labs/static/c9f91443bbb841f13d229dde4280a93e/3cbba/instana-website-summary.png",srcSet:["/think-labs/static/c9f91443bbb841f13d229dde4280a93e/7fc1e/instana-website-summary.png 288w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/a5df1/instana-website-summary.png 576w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/3cbba/instana-website-summary.png 1152w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/0b124/instana-website-summary.png 1728w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/4ea69/instana-website-summary.png 2304w","/think-labs/static/c9f91443bbb841f13d229dde4280a93e/61c60/instana-website-summary.png 2368w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("p",null,"Look at the different tabs"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Summary"),Object(s.b)("li",{parentName:"ul"},"Speed"),Object(s.b)("li",{parentName:"ul"},"Resources"),Object(s.b)("li",{parentName:"ul"},"HTTP Requests"),Object(s.b)("li",{parentName:"ul"},"JS Errors (should be empty ;-)"),Object(s.b)("li",{parentName:"ul"},"Geography - maybe switch to the 3D view"),Object(s.b)("li",{parentName:"ul"},"Custom Events - empty"),Object(s.b)("li",{parentName:"ul"},"Pages"),Object(s.b)("li",{parentName:"ul"},"Alerts - hopefully also empty")),Object(s.b)("p",null,"Go back to the ",Object(s.b)("strong",{parentName:"p"},"HTTP Requests")," Tab and click on the origin for your cluster"),Object(s.b)("p",null,"To analyse a specific call end to end, click on on of the bars in the call windows and select ",Object(s.b)("inlineCode",{parentName:"p"},"View in Analyse"),"\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.83333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAABYlAAAWJQFJUiTwAAACR0lEQVQ4y3VUyY4UMQzN//8UR84gQNzQzAgB3V2V1Ymz85zUsEgQuaNU4uX52W71fH5/d/v65sf9vTaltv9JLhXCOQciHyhxjimrg+yLM59O80VbXMbIIaaUyzIo0IYNzrWJbEf1dVfQ7qXOjq1GKI7JiV0g5wMs6zJrvXMuiNZ7b1tax70KgTglwVEk2vj80jwZY6y1wYckgeucE3Cs99ALASFKHwM+lThuzSMQxUP74+Pz8ttH7xQorEzawjzGsA564Ti1thafCi7hW/IpAjuOkWvxRDtVkSyHmBgCVS5lscUCm2KiKEh2Mvhh33nKJ+D166a2/vuyCQvqdP40JiJUhlfOKSHQXGuMKQVIabEt3NWVP+4TMzJScCPfcvXXwiW0T2vm60LInNv8Q1MtgP9eiGSkc4QR5+8U3f18ai0vNmUpkLzsxy7dRd7aIaiUUF2bsTeK3oZvpaZdfOQixqBfKhCoir3IdgRB/fFkXShX+WapQtp+VZ6iCSizOw4NGnZMVGcTg1fnrDEeHQJ60XEw9bn2RZSq8i2h8Ay7dW7au83tfsVCx/HqNvTh22dtUxldYJM0JoaGeRtAA52QlxDFfYClXOZMKZvIaFu4UY7iaW1MESkJ4oUCgIXCPjAhxnmZl6tP2q7i1SQBMxgCc3poABdiYH+Qq11Kih7xJON1aP14HICAaUXz7rIrIN55ntqwIJcm/3B7chwRupTNCOrs4BoHtDNGbk1TUwCGLgcX648CWZXImfM6l+qkPa/XXwqo8HotPwEJKFN8uLsVWQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-website-httprequests",title:"instana-website-httprequests",src:"/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/3cbba/instana-website-httprequests.png",srcSet:["/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/7fc1e/instana-website-httprequests.png 288w","/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/a5df1/instana-website-httprequests.png 576w","/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/3cbba/instana-website-httprequests.png 1152w","/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/0b124/instana-website-httprequests.png 1728w","/think-labs/static/c6264bcb8e7ce7c5a1da2aed18844a4b/d890f/instana-website-httprequests.png 1852w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("p",null,"Open the Call group ",Object(s.b)("inlineCode",{parentName:"p"},"/api/catalogue/categories"),"and click on one of the get GET requests\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAABgElEQVQozy1S23bkIAzL/39hX3bbbTozuXCLwWAb0lQzXY6Oj0gipNhMR+bdR1TmBpKO7EK8L9v9sdba1Hofp/UhovjCe8+lqIqqcq0ThMvuShWIM85owrVR4UT5pR0hHs4Hynnx+f3mPpe4egox4fmUuQJivYrGt9njBXEqjVj9wXvMW6A9FZfK3ZV/W/lY88MztpF4QuIjF4hZbF7T+22dV78fHFlve/z79dqCh7yl4osskZZA4A5iKP87q2nKGrNR7VTtqCO3bxYJdOZ6sVyloY6D3fzogXppE/7t1xniipQPv81un537ctunK0sE6prOQMPTGbJscf8z2yOYp4nQNVExQ3dgU7iFo0Z6AoRZjtwKS1czOGiv3NZlqwyvPkXKIdFvw1o3GWfWXmw8oV3H2fpp53ld1/f1XH0MzNLGwAgRu6y7h/IJ1WqdmuUXQKqikb1px8wACJro5jzq0xmxcTVKa4hdVSAOLKkqAAIxTmnWYYwFZzNbtx13BxF+AMPkO0N6aQETAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-analyse-httprequestgroup",title:"instana-analyse-httprequestgroup",src:"/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/3cbba/instana-analyse-httprequestgroup.png",srcSet:["/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/7fc1e/instana-analyse-httprequestgroup.png 288w","/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/a5df1/instana-analyse-httprequestgroup.png 576w","/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/3cbba/instana-analyse-httprequestgroup.png 1152w","/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/0b124/instana-analyse-httprequestgroup.png 1728w","/think-labs/static/33ee9adae21a2f1a23e80c9883f3aa34/59ab2/instana-analyse-httprequestgroup.png 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("p",null,"You will be preseted with the different activities in request. To view what gets executed on the backend of the application for this request, click ",Object(s.b)("inlineCode",{parentName:"p"},"View Backend Trace"),".\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAABYlAAAWJQFJUiTwAAACQklEQVQoz11TyY7UMBDt//8KDiAhDnDihIZVAmlGGkaIC9P0Qndnj+PYjh3vmed0d0aiUimVl1d5tWTV84FQprTpGGsILesWfpymEGKIEzQmG61zXIiWdIyLUWttzCDVSgwqr5qqIXlZH07Fv2MG5xylalrYomqwU7ed0lopLdU4AmodnJUcDe7iEmWCMs6FBBH4HWWE9mS2bUd7JgCwzp/VzHY1Gktwxjm4gar3iS6eWeKiPgQwT2ovqrVN4J5xZOGThGmajAsIjFyTALfI7E5Xcd6vlDHaWCy0cyb4GP2emZzr6K2x1kCs9cH54OE65xbwTNu6qFV5eOTZvrmteDamk+cPJH9srWHPME0t3Q1KGnzZguGXh7f368/VXyYrPf0ncfIaGYdlw9vg1LVgNel3+enYtAWjNaVl2120uTgVodBl/+wPaBXAQqqOynP7YEYzq06q9MVZlnK2atQAAgwWkqoT5+rcfbywDs20Kc+lZ6mLMaQ0sEo19CuN29oQUOzBYEQAqbRCyBB3x+zPZm9dUPMOWrUdwj3xv6hXHrEA9k50ev1Qbk/5Ma8RpOkYqtBS/vH73at377Oy2R3LQ16Trv/wY/viZv3602O5yTE2M7gft7+L/ak4ZBXwRU2SNl1WET6ohvT7U3ksm7brb273L79u33zbFLsCnU9gLVy9ZlSIQYK2kWn6NYaMCQw+JiT2XMpRI9O18Het+0mcPNMeMafK97lExphYfx1m54JEZW0q05BaMZ+lggUUzOPH8P4J5ROSImQc1oQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-analyse-requesttype",title:"instana-analyse-requesttype",src:"/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/3cbba/instana-analyse-requesttype.png",srcSet:["/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/7fc1e/instana-analyse-requesttype.png 288w","/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/a5df1/instana-analyse-requesttype.png 576w","/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/3cbba/instana-analyse-requesttype.png 1152w","/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/0b124/instana-analyse-requesttype.png 1728w","/think-labs/static/1475065ec93e4e8d2e0911b49820b1b3/59ab2/instana-analyse-requesttype.png 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("p",null,"Scroll down to the Calls Section to see the details of the call and the time spend in the sub calls.\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC7ElEQVQ4y21Ua2/UMBC8X89v4QeAkAChFkQlaGn7hYoepXe9V++Rd2I7jpMMs5tcKVJPWq2T2LOzO+ObZEWJ3SFBaRzKynAdI7QdmtBq+Cb8F7Vv4FyNnOcOUYw0y2Gt03dyfmK4iJIU232E1WaLOMlQlBVzyiL2ZdARWMHrIct7W3tMrPM4xIkCpnkBeR42+qeNR2bPs4R2IWv/D3QiqMLECG3vNVuylmyc01xZfue7wjgtKN9LY7RtGZXzA6jsnzgukjRD27bKMC8KzrDVMVhukPZlzn3Xojhs0YWBScF9acbxVBauafW8bxoyJKAwzPJSgdqu03wURZg1dY1Z6vB6WmIaOzTspBq70g64rpi1ZWFYkkWaJkDfApB49usDo0FkPT6sCZx5tGSZsRsBEoFk3jIGmaPOUJhsWHm+M7jbVJjvayyiBouDxzJpsUyBxwy0R896gyDb3R53f+5xP5vhYbHEcrVWUAI2VKrB5uYaD+enuPv2GdOzE9xKfPmI3ze3mJH83T5gQXAfgh7MyTBOc0QcVS7CkNiTykLdWQNTlfC1Gdvujj0/e5a5DoD7tEBUWlgKUlF5ISVK6wxFWTFyRD/GVLxmERFHnC+V5eYMuR2E43Ounq0RQtAiR6MrQ/GRROh6dASquFHeFyUZU1GxRO39qH7QAmKZo/nFdm7UQm3jaNy0NIirWmknpWPYkWmvG4VVz2JyM4T95nGrd1kA5xRF/CqFBobOachaGNm61nAaXtmVMreSt4Xz6lhEwMTwIoSwbcJwFXWGWW7oJ7z48w2ZhQ6/koBX1x4Xu0YFkssgrAwPFlYINEfADod8gXz9CenmDHX2E/nuAun2Etn2B+MS+eEK+f4K9eEcnVtz1oAZAQsaXsIooNiGgKacI56/w2b6lsCniGfvEf1+A8N3EtnqBDb6jhB/RWtXnCFotUpV7vtByHb8D50YzolZq1JobZ1j0VYpKjr5xmj7wY2yx47q6t+c92MM679KnWymnn1qKwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instana-analyse-backendtrace",title:"instana-analyse-backendtrace",src:"/think-labs/static/c15969195be7816524edff9278a04c72/3cbba/instana-analyse-backendtrace.png",srcSet:["/think-labs/static/c15969195be7816524edff9278a04c72/7fc1e/instana-analyse-backendtrace.png 288w","/think-labs/static/c15969195be7816524edff9278a04c72/a5df1/instana-analyse-backendtrace.png 576w","/think-labs/static/c15969195be7816524edff9278a04c72/3cbba/instana-analyse-backendtrace.png 1152w","/think-labs/static/c15969195be7816524edff9278a04c72/0b124/instana-analyse-backendtrace.png 1728w","/think-labs/static/c15969195be7816524edff9278a04c72/59ab2/instana-analyse-backendtrace.png 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("p",null,"Congratulations you have sucessfully observed a request end to end from the browser to a database."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-instana-lab-instana-lab-website-mdx-02c68a869f4be00824c9.js.map