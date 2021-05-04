(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),b=a("NmYn"),r=a.n(b),s=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),l=a("TSYQ"),p=a.n(l),d=a("QH2O"),u=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,o=e.theme,n=e.tabs,b=void 0===n?[]:n;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===o,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,o=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||o,b=n.baseUrl,r=n.subDirectory,c=b+"/edit/"+n.branch+r+"/src/pages"+t;return b?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),x=a("dI71"),w=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,n=o.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),b=a===n,c=new RegExp(n+"/?(#.*)?$"),i=o.replace(c,a);return Object(m.b)("li",{key:e,className:p()((t={},t[w.selectedItem]=b,t),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+i},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},b))))))},t}(n.a.Component),N=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,b=t.frontmatter,l=void 0===b?{}:b,p=t.relativePagePath,d=t.titleType,u=l.tabs,g=l.title,x=l.theme,w=l.description,k=l.keywords,v=Object(y.a)().interiorTheme,T=Object(s.useStaticQuery)("2456312558").site.pathPrefix,A=T?o.pathname.replace(T,""):o.pathname,P=u?A.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",E=x||v;return Object(m.b)(i.a,{tabs:u,homepage:!1,theme:E,pageTitle:g,pageDescription:w,pageKeywords:k,titleType:d},Object(m.b)(h,{title:n?Object(m.b)(n,null):g,label:"label",tabs:u,theme:E}),u&&Object(m.b)(f,{title:g,slug:A,tabs:u,currentTab:P}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(j.a,{pageContext:t,location:o,slug:A,tabs:u,currentTab:P}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},NWjB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var o=a("wx14"),n=a("zLVn"),b=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},i=c("PageDescription"),l=c("InlineNotification"),p={_frontmatter:s},d=r.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(d,Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(i,{mdxType:"PageDescription"},Object(b.b)("p",null,"In this part of the lab you will install a sample application into your environment and see how Instana does an automatic discovery to achieve full observability of your enterprise.")),Object(b.b)("h2",null,"Installing the Robot-Shop Application"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Stan’s Robot Shop")," is a sample microservices application which built with different technologies like NodeJS, Java, MongoDB, RabbitMQ, etc. to demonstrate the monitoring capabilities.\nYou can look to the ",Object(b.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/instana/robot-shop"}),"robot-shop")," git repository for more details."),Object(b.b)("p",null,"We will use a helm-chart with helm v3.x to install the appliction."),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Create a namespace in which we will run robot-shop by executing")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns robot-shop\n")),Object(b.b)("ol",{start:2},Object(b.b)("li",{parentName:"ol"},"To change the context in kubectl to use the robot-shop namespace execute")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"kubectl config set-context --current --namespace=robot-shop\n")),Object(b.b)("ol",{start:3},Object(b.b)("li",{parentName:"ol"},"Get the helm chart from ",Object(b.b)("a",Object(o.a)({parentName:"li"},{href:"/think-labs/7b46571e49a46b2f4cd69bc5d29239c2/robot-shop-1.1.0.tgz"}),"here")," with curl")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"curl -fsSL -o robot-shop.tar.gz https://github.com/mkeppeler/instana/raw/main/robot-shop-1.1.0.tgz\n")),Object(b.b)("p",null,"The execution of the helm chart requires helm version 3. When you completed the Setup Environment section of this lab, you should have configured helm 3.\nIf you are unsure, check with:"),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"helm3 version\n")),Object(b.b)("ol",{start:4},Object(b.b)("li",{parentName:"ol"},"Execute the helm installation by issuing the following command in the root of the helm chart directory")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"helm3 install robot-shop \\\n  --set psp.enabled=true \\\n  --set eum.key=<your EUM access key> \\\n  --set eum.url=<your EUM endpoint> \\\n  --namespace robot-shop \\\n  ./robot-shop.tar.gz\n")),Object(b.b)("ol",{start:5},Object(b.b)("li",{parentName:"ol"},"Check that the apllication get deployed correctly and is up and running")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods\n")),Object(b.b)(l,{kind:"info",mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," This can take some time depending on the environment, because the container images need to be downloaded.")),Object(b.b)("ol",{start:6},Object(b.b)("li",{parentName:"ol"},"After the pods are all pods are ready and show the status running, lookup the endpoint of your application access it")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'export CLUSTER_ID=$(ibmcloud ks cluster ls | grep lab2220 | awk \'{print $2}\')\nNODEPORT=$(kubectl get -o jsonpath="{.spec.ports[0].nodePort}" service web)\nURL=$(ibmcloud ks cluster get --cluster $CLUSTER_ID --show-resources | grep "Ingress Subdomain" | awk \'{print $NF}\')\necho "http://$URL:$NODEPORT"\n')),Object(b.b)("p",null,"Copy the URL output to a browser and hit enter. You should be presented with ",Object(b.b)("strong",{parentName:"p"},"Stan’s Robot Shop")),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.34722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAADiElEQVQ4y0WTW08bVxRG5yUV2B5fwSnh5sv4ju3xfXwfG2NsTMBQAy4mJkElUBIKaQKJUkVBLapUqc9VflGfK/UHrR6bQB8+bemc2Wt/e+8zkrG9hrGxgjGnYVxuYFxt3cXReamMafox5m9neGSxorfavP/0iYt3V5xdXPL9cEimXMEwNU21uUqiWEYyZDUM6SyGaAxDMo1ByzOZSDKZzjAZVzHYHRhFwiPZjCqK7h8+pzc4oLvXpyaKx8T334i7FycndJ8NkeSYihyNIwfDmDI55CdzTDtneTznxjm7iNPtE1KY9viwLLiYmHIyYbExaXVgsDmQZ2bxqEmubn+nsNFFMq22MbU7yC4PsuLHPLtAoNQm0ukTWt/F19zEv7aFstbFv9lDabTwq2n8qSzeRBrL3CK3f33h73/+5dXNr8KhaNdUbyCL/uXZeSyiYrTWJdbcIVLfJJLWCeVqhDUdX7aMt1jDv9zGU2uyWKjg9Pr4+MefvBUOhxdvkMzClVzRMQ2eIUeiWJ7MC+A28faAyNo+ke7B2Glwe4C328dfaxHQV/GtdPAUdKzCoU2MxJ/NM+GcQbIsejFHYpiTGcwuL1YxNy3VItE7Ib6yR7rYQU3oxDM1olmhVImEVkXVKriWUthdynhMJmHEOu8SwHk3FgEZOTOLA9uCh2ruKdn+OblMh0K0TjbVIBavEE/pRHN1wmIEgUwFb6rIlDeAReRZFz1iae47hxbXSMo4WgVwudSjcPyRXPeYcmGTfLZNRmuhVdeJFZpipsuECw2CWg2HN4hZ5Iw5QpJVPIt7WYRsCwrN0g71y98o7L2mWd+lUd1C17vkK+ss5VZQSy3C+QZKuopDCY/N3DMkqyfASLav0e4JUqvu0zq8otk5Yq1zyPbBj1Q3hiSbuyRaOyw1v8OtP8VbbuEMiEW6/Q/5ks0b4l5WYd/uC6P131A6vUE7+0zx4oby9S3ZtzfEf/5M9OoG5fwDrstfUI5/whlW7wwpdwzJJgD3sgrZfUsU10+pDK6pDK8oHF2jvXxP/od3JM8+oPbF9nsvCG0d4OnsMhUSwBHMFxkzJFtgiZHsX6NDtFDSD2lsvGK595p891Q8oTPUwTkZ8TbT+hbxsmg328CbruOMJLD5Iw/5kj0Y439FcQTjVKoHNDovqbaPyLSeo7aGqNvHpAQsVtkkJICBsvhbcg2mw0kBiz4w/gP7zOVRg/RNOQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"stans-robot-shop",title:"stans-robot-shop",src:"/think-labs/static/94dc514abd05b27312692f42bb2ddc63/3cbba/stans-robot-shop.png",srcSet:["/think-labs/static/94dc514abd05b27312692f42bb2ddc63/7fc1e/stans-robot-shop.png 288w","/think-labs/static/94dc514abd05b27312692f42bb2ddc63/a5df1/stans-robot-shop.png 576w","/think-labs/static/94dc514abd05b27312692f42bb2ddc63/3cbba/stans-robot-shop.png 1152w","/think-labs/static/94dc514abd05b27312692f42bb2ddc63/0b124/stans-robot-shop.png 1728w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(b.b)("p",null,"Congratulations you can now proceed to the next step."))}u.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-instana-lab-application-mdx-facb42a0aacff4c54ca9.js.map