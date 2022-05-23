(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),u=a.n(d),h=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(h.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),y=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,c=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(h.b)("div",{className:"bx--row "+g.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),j=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,c=new RegExp(o+"/?(#.*)?$"),s=n.replace(c,a);return Object(h.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(h.b)(l.Link,{className:j.link,to:""+s},e))}));return Object(h.b)("div",{className:j.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:j.list},i))))))},t}(o.a.Component),N=a("MjG9"),x=a("CzIb"),w=a("Asxa"),A=a("OIbQ"),I=a.n(A),E=function(e){var t=e.date,a=new Date(t);return t?Object(h.b)(w.c,{className:I.a.row},Object(h.b)(w.a,null,Object(h.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,u=b.tabs,g=b.title,f=b.theme,j=b.description,w=b.keywords,A=b.date,I=Object(x.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=P?n.pathname.replace(P,""):n.pathname,S=u?k.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",T=f||I;return Object(h.b)(s.a,{tabs:u,homepage:!1,theme:T,pageTitle:g,pageDescription:j,pageKeywords:w,titleType:d},Object(h.b)(m,{title:o?Object(h.b)(o,null):g,label:"label",tabs:u,theme:T}),u&&Object(h.b)(v,{title:g,slug:k,tabs:u,currentTab:S}),Object(h.b)(N.a,{padded:!0},a,Object(h.b)(y,{relativePagePath:p}),Object(h.b)(E,{date:A})),Object(h.b)(O.a,{pageContext:t,location:n,slug:k,tabs:u,currentTab:S}),Object(h.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},G10e:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=s("PageDescription"),p=s("InlineNotification"),d={_frontmatter:c},u=r.a;function h(e){var t=e.components,a=Object(o.a)(e,l);return Object(i.b)(u,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"},Object(i.b)("p",null,"In this section you will deploy the edge service that you created in a previous step to your edge environment.")),Object(i.b)("h2",null,"Deploying an edge service with a deployment policy"),Object(i.b)("h3",null,"Preconditions for deploying your own service"),Object(i.b)("p",null,"  If you have not already done do, complete the section ",Object(i.b)("a",{parentName:"p",href:"../service/english"},"Create an Edge Service")),Object(i.b)("h3",null,"Using the edge service with deployment policy"),Object(i.b)("p",null,"The Horizon Policy mechanism offers an alternative to using Deployment Patterns. Policies provide much finer control over the deployment placement of edge services. It also provides a greater separation of concerns, allowing Edge Nodes owners, Service code developers, and Business owners to each independently articulate their own Policies. There are therefore three types of Horizon Policies:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Node Policy (provided at registration time by the node owner)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Service Policy (may be applied to a published Service in the Exchange)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Deployment Policy (which approximately corresponds to a Deployment Pattern)"))),Object(i.b)("h2",null,"Node Policy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As an alternative to specifying a Deployment Pattern when you register your Edge Node, you may register with a Node Policy.")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Get the required helloworld node policy file:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/open-horizon/examples/master/edge/services/helloworld/horizon/node.policy.json\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Below is the node.policy.json file you obtained in step one:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "properties": [\n    { "name": "openhorizon.example", "value": "hello-$USER_ID" }\n  ],\n  "constraints": [\n  ]\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It provides values for one just properties (openhorizon.example), change the value to ",Object(i.b)("strong",{parentName:"li"},"hello-$USER_ID")," this should restrict the services that get deployed to this edge node to your hello service.")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Register your Node Policy with this policy")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hzn register --policy node.policy.json\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"When the registration completes, use the following command to review the Node Policy:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hzn policy list\n")),Object(i.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notice")," that in addition to the three properties stated in the node_policy.json file, Horizon has added a few more (openhorizon.cpu, openhorizon.arch, and openhorizon.memory). Horizon provides this additional information automatically and these properties may be used in any of your Policy constraints.")),Object(i.b)("p",null,"Your device should now also be visible in ",Object(i.b)("strong",{parentName:"p"},"Active without services")," in the IBM Edge Application Manager UI\n",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACW0lEQVQ4y5VTy4pTQRC9vyIqfocLF/6COLh05caVoC5E8Bcmk0ni6ELciGbhKL6YEUZn4SKBhGFAGRgfOEnuI/fZffvePlZVJ5AxAbHhUFVd1aerq6q9RrON9sNH6Gw9RquzhfWNTTQIi/JvfRktbGx20Gy14YUZEKQGQaLgx4r0ErGyIBOJhuiCwiKvgBKAXgDb5EJsSCfpjccTjMYBwjBC4PuYRhH8yQTTqbOjMCR9KraTqxFFzu/FSYYozpAXGlr/H5Si/KzGkz2FtQbQfKfg5XmOghDHsaAoCpRluQxTwhhzak9rlhpxZrDefoqj7yfwsjQVkqqqllDPJBNlWYaELmSiuq5PxVhbIZiMoIocXkKBSnN5qch0MFdaDohOF1lrxU4pjklpQ3x8hvdLIlRKyXljKkfIwZyFKqlVqDBf1SwT9iUzQimRlMCIb1HnunocxN3hZ9MdGJ5Y9A++4evhAVIqBy/OJEkSmYA8SWGNwarFF3tcE7csng2BO28Mrt+4iYuXLqPX64uHYwyDnhvSoYB0n5rBMhCpxSeE3Cleqba4+94RQ03w4OUv9H+42irOiOqzG/g4s7eDc592BecJZwkXPn/EIE34KUS4kOG9DxZffrqpv0XkJ+7FjrCq0R39hrf9HN6rF4Suwzbpr7vYn4ZEaOnJNF92RngcAfd3gNtvLfaPa9mjGCk6VR39eIorgx7Whn1cZTlg2cc1so+oWRzjxWkmbddlRQcr+Z0V1QS1+w3cEEuItcK/ltSQu6byQrJQ2kDPfoDS7jfMfwfPneHRIHsV5mPzB2gmWhvFt6eBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IEAM-node-active",title:"IEAM-node-active",src:"/think-labs/static/e8eab757d4e82d359853301c840cf849/3cbba/IEAM-node-active.png",srcSet:["/think-labs/static/e8eab757d4e82d359853301c840cf849/7fc1e/IEAM-node-active.png 288w","/think-labs/static/e8eab757d4e82d359853301c840cf849/a5df1/IEAM-node-active.png 576w","/think-labs/static/e8eab757d4e82d359853301c840cf849/3cbba/IEAM-node-active.png 1152w","/think-labs/static/e8eab757d4e82d359853301c840cf849/0b124/IEAM-node-active.png 1728w","/think-labs/static/e8eab757d4e82d359853301c840cf849/f8b1a/IEAM-node-active.png 2246w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("h2",null,"Service Policy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Like the other two Policy types, Service Policy contains a set of properties and a set of constraints. The properties of a Service Policy could state characteristics of the Service code that Node Policy authors or Deployment Policy authors may find relevant. The constraints of a Service Policy can be used to restrict where this Service can be run. The Service developer could, for example, assert that this Service requires a particular hardware setup such as CPU/GPU constraints, memory constraints, specific sensors, actuators or other peripheral devices required, etc."),Object(i.b)("li",{parentName:"ul"},"Below is the ",Object(i.b)("strong",{parentName:"li"},"service.policy.json")," file that was created as part of your service creation in the horizon directory:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n    "properties": [\n        {\n            "name": "prop1",\n            "value": "value1"\n        }\n    ],\n    "constraints": []\n}\n')),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"View the pubished service policy attached to your service:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hzn exchange service listpolicy ${HZN_ORG_ID}/hello-${USER_ID}_0.0.1_$(hzn architecture)\n")),Object(i.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notice")," that the generated service policy is not automatically added to your Service at publishing time.")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Create a ",Object(i.b)("strong",{parentName:"li"},"service.policy.json")," file with the content below")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "properties": [\n  ],\n  "constraints": [\n    "openhorizon.memory >= 100"\n  ]\n}\n')),Object(i.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note")," this simple Service Policy doesn’t provide any properties, but it does have a constraint. This example constraint is one that a Service developer might add, stating that their Service must only run on edge nodes with 100 MB or more memory.")),Object(i.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notice")," that Horizon has again automatically added some additional properties to your Policy. These generated property values can be used in constraints in Node Policies and Deployment Policies.")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Update the service.policies attached to you service")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hzn exchange service addpolicy -f service.policy.json ${HZN_ORG_ID}/hello-${USER_ID}_0.0.1_$(hzn architecture)\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"View the pubished updates to the service policy attached to your service:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hzn exchange service listpolicy ${HZN_ORG_ID}/hello-${USER_ID}_0.0.1_$(hzn architecture)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Now that you have set up the Policy for your Edge Node and the published Service policy is in the exchange, we can move on to the final step of defining a Deployment Policy to tie them all together and cause software to be automatically deployed on your Edge Node.")),Object(i.b)("h2",null,"Deployment Policy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deployment Policy is what ties together Edge Nodes, Published Services, and the Policies defined for each of those, making it roughly analogous to the Deployment Patterns you have previously worked with."),Object(i.b)("li",{parentName:"ul"},"Deployment Policy, like the other two Policy types, contains a set of properties and a set of constraints, but it contains other things as well. For example, it explicitly identifies the Service it will cause to be deployed onto Edge Nodes if negotiation is successful, in addition to configuration variable values, performing the equivalent function to the -f horizon/userinput.json clause of a Deployment Pattern hzn register … command. The Deployment Policy approach for configuration values is more powerful because this operation can be performed centrally (no need to connect directly to the Edge Node).")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a ",Object(i.b)("strong",{parentName:"li"},"deployment.policy.json")," file with the content below for your service:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "label": "$SERVICE_NAME Deployment Policy",\n  "description": "A super-simple sample Horizon Deployment Policy",\n  "service": {\n    "name": "$SERVICE_NAME",\n    "org": "$HZN_ORG_ID",\n    "arch": "*",\n    "serviceVersions": [\n      {\n        "version": "$SERVICE_VERSION",\n        "priority":{}\n      }\n    ]\n  },\n  "properties": [\n  ],\n  "constraints": [\n    "openhorizon.example == hello-$USER_ID"\n  ],\n  "userInput": [\n    {\n      "serviceOrgid": "$HZN_ORG_ID",\n      "serviceUrl": "$SERVICE_NAME",\n      "serviceVersionRange": "[0.0.0,INFINITY)",\n      "inputs": [\n        {\n          "name": "HW_WHO",\n          "value": "Valued Customer"\n        }\n      ]\n    }\n  ]\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This simple example of a Deployment Policy doesn’t provide any properties, but it does have one constraints value that is satisfied by the properties set in the node.policy.json file, so this Deployment Policy should successfully deploy our Service onto the Edge Node."),Object(i.b)("li",{parentName:"ul"},"At the end, the userInput section has the same purpose as the horizon/userinput.json files provided for other examples if the given services requires them. In this case the helloworld service defines only one configuration variable, HW_WHO, and the userInput section here provides a value for HW_WHO (i.e., Valued Customer).")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Publish and view your deployment policy in the Horizon Exchange:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hzn exchange deployment addpolicy -f deployment.policy.json ${HZN_ORG_ID}/policy-hello-${USER_ID}_0.0.1\nhzn exchange deployment listpolicy ${HZN_ORG_ID}/policy-hello-${USER_ID}_0.0.1\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"By now your edge device should have formed an agreement with one of the Horizon agreement bots (this typically takes about 15 seconds). Repeatedly query the agreements of this device until the agreement_finalized_time and agreement_execution_start_time fields are filled in:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hzn agreement list\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"After the agreement is made, list the edge service docker container that has been started as a result:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"sudo docker ps\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"See the helloworld service output:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"sudo hzn service log -f hello-$USER_ID\n")),Object(i.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Press Ctrl C to stop the command output.")),Object(i.b)("p",null,"Again look in the IBM Edge Application Manager UI, your device should show the state ",Object(i.b)("strong",{parentName:"p"},"Active with servies"),"\n",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACUUlEQVQ4y5VTXWtTQRC9f0VU/Be+9U+IxTfxQS0IPvlDmqZNrArim+al+uCDLbQWFEwwxpgKfaiYWHO/v3bv3uxxZu6NpE1BXDjMzN3ZM7Nn9jqNZgutx0/Q3n6KrfY21jc20SAs2vP+MrawsdlGc6sFx08BLzHwYgU3UuQXiJQFhYg1xBfkFlkJFAD0AjimLUSGfLLOyXiKH2MPk98hXNdFGAZwp1OxHsWB75MfSlzZixEE1b4TxSmCKEWWa2j9f1CK+rMaz/cVVhtA862Ck2UZckIcRVKB46IolmEKGGPOfNOarUaUGqy3XuD45BecNEmQ5znKslzCrLZMlKapFGWi2Wx2JsfaEt70FCrP4MSUqDTLSyLTwUwpOSA+FbLWSpxQHpPSB9njM/y9IEJFZ3gZU1aEnMxdKMLiKutOeC+uCUUikcDI3qLPujqcxNrxtakkulGI7miE0WCAJI6FmDuJyQ9pklmcwJ4rPF9c2GFN5uvZ5CfuDT7j9toarq+s4FO3K985xzDouj4d8sh3aRhsPbFa9oRQ14QxBfe/DSpm6uLRh0N8dKcSihSkz67n4tL+O1w52BVcJVwmXHu/h34Syw3/EvJ6MPqKg8BHQNXufB9iXA9LCMsZOqcTODsv4bx+RehU2CH/TQeHoU+Elq5M78vWhMck+MOjIe4O+9ijbkQ/Ii+EsESP9L3R72L1Sw832fbZ9nCLYj7LOU6UpDJ2TVcy/DNamqyqrjh/GpYQaYV/LdGQp6ayXLpQ/PoJSleQYdR/B5MbfhoUX4T5s/kDgSFY/cExj+EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IEAM-node-active-service",title:"IEAM-node-active-service",src:"/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/3cbba/IEAM-node-active-service.png",srcSet:["/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/7fc1e/IEAM-node-active-service.png 288w","/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/a5df1/IEAM-node-active-service.png 576w","/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/3cbba/IEAM-node-active-service.png 1152w","/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/0b124/IEAM-node-active-service.png 1728w","/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/f8b1a/IEAM-node-active-service.png 2246w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Unregister your edge node:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hzn unregister -f\n")))}h.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-edge-lab-deploy-policy-english-mdx-bf6544d4f4c3769fb5a3.js.map