(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),l=t("NmYn"),r=t.n(l),s=t("Wbzz"),o=t("Xrax"),d=t("k4MR"),c=t("TSYQ"),b=t.n(c),g=t("QH2O"),p=t.n(g),u=t("qKvR"),m=function(e){var a,t=e.title,n=e.theme,i=e.tabs,l=void 0===i?[]:i;return Object(u.b)("div",{className:b()(p.a.pageHeader,(a={},a[p.a.withTabs]=l.length,a[p.a.darkMode]="dark"===n,a))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},t)))))},h=t("BAC9"),f=function(e){var a=e.relativePagePath,t=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||n,l=i.baseUrl,r=i.subDirectory,o=l+"/edit/"+i.branch+r+"/src/pages"+a;return l?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},A=t("FCXl"),I=t("dI71"),w=t("I8xM"),k=function(e){function a(){return e.apply(this,arguments)||this}return Object(I.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var a,t=r()(e,{lower:!0,strict:!0}),l=t===i,o=new RegExp(i+"/?(#.*)?$"),d=n.replace(o,t);return Object(u.b)("li",{key:e,className:b()((a={},a[w.selectedItem]=l,a),w.listItem)},Object(u.b)(s.Link,{className:w.link,to:""+d},e))}));return Object(u.b)("div",{className:w.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":a},Object(u.b)("ul",{className:w.list},l))))))},a}(i.a.Component),E=t("MjG9"),v=t("CzIb"),O=t("Asxa"),N=t("OIbQ"),y=t.n(N),M=function(e){var a=e.date,t=new Date(a);return a?Object(u.b)(O.c,{className:y.a.row},Object(u.b)(O.a,null,Object(u.b)("div",{className:y.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};a.a=function(e){var a=e.pageContext,t=e.children,n=e.location,i=e.Title,l=a.frontmatter,c=void 0===l?{}:l,b=a.relativePagePath,g=a.titleType,p=c.tabs,h=c.title,I=c.theme,w=c.description,O=c.keywords,N=c.date,y=Object(v.a)().interiorTheme,x=Object(s.useStaticQuery)("2456312558").site.pathPrefix,j=x?n.pathname.replace(x,""):n.pathname,S=p?j.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",T=I||y;return Object(u.b)(d.a,{tabs:p,homepage:!1,theme:T,pageTitle:h,pageDescription:w,pageKeywords:O,titleType:g},Object(u.b)(m,{title:i?Object(u.b)(i,null):h,label:"label",tabs:p,theme:T}),p&&Object(u.b)(k,{title:h,slug:j,tabs:p,currentTab:S}),Object(u.b)(E.a,{padded:!0},t,Object(u.b)(f,{relativePagePath:b}),Object(u.b)(M,{date:N})),Object(u.b)(A.a,{pageContext:a,location:n,slug:j,tabs:p,currentTab:S}),Object(u.b)(o.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,a,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kLha:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return h}));var n=t("wx14"),i=t("zLVn"),l=(t("q1tI"),t("7ljp")),r=t("013z"),s=(t("qKvR"),["components"]),o={},d=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",a)}},c=d("PageDescription"),b=d("InlineNotification"),g=d("Accordion"),p=d("AccordionItem"),u={_frontmatter:o},m=r.a;function h(e){var a=e.components,t=Object(i.a)(e,s);return Object(l.b)(m,Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)(c,{mdxType:"PageDescription"},Object(l.b)("p",null,"In diesem Abschnitt richten Sie Ihre Zielumgebung ein, in der Sie die Beispielanwendung und den Edge-Agenten bereitstellen. Wenn Sie Ihre eigene Umgebung mitbringen möchten, können Sie dies gerne tun.")),Object(l.b)("h2",null,"Installation und Registrierung des Agenten"),Object(l.b)("p",null,"In dieser Übung verwenden Sie die automatisierte Installations- und Registrierungsmethode für Agenten. Andere Optionen sind"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Erweiterte manuelle Installation und Registrierung des Agenten"),Object(l.b)("li",{parentName:"ul"},"Installation und Registrierung von Massenagenten"),Object(l.b)("li",{parentName:"ul"},"Installation und Registrierung des SDO-Agenten (Secure Device Onboarding)")),Object(l.b)(b,{kind:"info",mdxType:"InlineNotification"},"**Hinweis:** Diese Schritte sind für alle Edge-Gerätetypen (Architekturen) gleich."),Object(l.b)("p",null,"Wenn Sie Ihr Gerät noch nicht mit den Schritten im Abschnitt ",Object(l.b)("a",{parentName:"p",href:"/Markus-Keppeler/think-labs/edge-lab/requirements/deutsch"},"Anforderungen")," vorbereitet haben, tun Sie dies jetzt."),Object(l.b)("p",null,"Der IBM Edge Application Manager sollte kein oder Ihr Gerät auflisten, wie unten gezeigt\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB9klEQVQ4y61Ty47UMBDMB/IdO2iGXYmd3+ACFyQkLvATCCHEBQQCIQ5ICCRuO8u8nMRvx0lcdHuT3VmYYS5YqXTZKVd3O0lxbzbF+fl9zOfzjNlshslkcgQnmJzc4C6tnZ2eYjqdoljWCQsR8EtoXG41lqXFqnYobYvStKhslyF0hDAxR7rgekJ3FcsAbBxgab1YbytsRI1KamzKGqKSBJV5Wes83xKYX4O0lTQZtTLwziB4A2c1CkEbN0JCagcpJYzRsNZAEXfWQmsFrVTmu7AE7ywUGX75afHhu8WPC4PCOgdHCCGgbVvEyIgDj8N85Ddomoi+i1jXDc6eRdx5EPHoRSBDzuiuqhvRNM1fBpyg67qdRDHr+r6HUQJPHj+EqgUKY0w2ZOEh8GZOrKh17/218ZjEU3eLxSX5eBRKazonDaSEjrI52pCI9wTmXAFDkllVVXT4Puv8cEQtGQaqlAfPCz0IEouoEgabB4qOhcS5QsPmxHnOmjDoHLfexpyUj6CIdMsVDZWkIf7JjyENiQu+/a+RWx4NOcM+8OBPil/cMd2tCsfFXZ5Sn+PHT5/x9t37W2v79HsNd2PfJ7QxIKglolmjbUJ+Mfu0Rw357+B/dLGSeP5G4ukriYuVRuMtDu/5R8vj1NKX8/ob8PIroMP4/HDLvwF5NL1IskB8yAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IEAM-nonode",title:"IEAM-nonode",src:"/Markus-Keppeler/think-labs/static/413181e39116caf3ec4348d8ba222709/3cbba/IEAM-nonode.png",srcSet:["/Markus-Keppeler/think-labs/static/413181e39116caf3ec4348d8ba222709/7fc1e/IEAM-nonode.png 288w","/Markus-Keppeler/think-labs/static/413181e39116caf3ec4348d8ba222709/a5df1/IEAM-nonode.png 576w","/Markus-Keppeler/think-labs/static/413181e39116caf3ec4348d8ba222709/3cbba/IEAM-nonode.png 1152w","/Markus-Keppeler/think-labs/static/413181e39116caf3ec4348d8ba222709/0b124/IEAM-nonode.png 1728w","/Markus-Keppeler/think-labs/static/413181e39116caf3ec4348d8ba222709/f5b13/IEAM-nonode.png 2228w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)("p",null,"1) Setzen Sie die folgenden Umgebungsvariablen auf Ihrem Gerät."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"export HZN_DEVICE_ID=<yourname>\nexport HZN_EXCHANGE_USER_AUTH=iamapikey:<api-key>\nexport HZN_ORG_ID=<your-exchange-organization>\nexport HZN_FSS_CSSURL=https://<ieam-management-hub-ingress>/edge-css/\nexport HZN_EXCHANGE_URL=https://<ieam-management-hub-ingress>/edge-exchange/v1\n")),Object(l.b)(b,{kind:"info",mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Hinweis:")," Wir haben bereits die Umgebung für die Einrichtung von Edge-Knoten vorbereitet, in der wir den Apikey und die Organisation für Sie erstellt haben.")),Object(l.b)("p",null,"2) Für die automatische Installation laden Sie das Skript agent-install.sh vom Cloud Sync Service (CSS) auf Ihr Gerät herunter und machen es ausführbar:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'curl -u "$HZN_ORG_ID/$HZN_EXCHANGE_USER_AUTH" -k -o agent-install.sh $HZN_FSS_CSSURL/api/v1/objects/IBM/agent_files/agent-install.sh/data\nchmod +x agent-install.sh\n')),Object(l.b)("p",null,"3) Führen Sie agent-install.sh aus, um die erforderlichen Dateien von CSS abzurufen, den Horizon-Agent zu installieren und zu konfigurieren und Ihr Edge-Gerät für die Ausführung des helloworld-Beispiel-Edge-Dienstes zu registrieren:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"sudo -s -E ./agent-install.sh -i 'css:' -p IBM/pattern-ibm.helloworld -w '*' -T 120\n")),Object(l.b)(b,{kind:"info",mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Hinweis:")," Um alle verfügbaren agent-install.sh-Flag-Beschreibungen zu sehen, führen Sie aus: ",Object(l.b)("inlineCode",{parentName:"p"},"./agent-install.sh -h"))),Object(l.b)(g,{mdxType:"Accordion"},Object(l.b)(p,{title:"agent-install output",mdxType:"AccordionItem"},Object(l.b)("p",null,"Bei einer erfolgreichen Installation sollten Sie die folgende Cli-Ausgabe sehen. Abhängig von Ihrem Gerät und Ihrer Verbindung kann dies einige Zeit dauern."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ curl -u \"$HZN_ORG_ID/$HZN_EXCHANGE_USER_AUTH\" -k -o agent-install.sh $HZN_FSS_CSSURL/api/v1/objects/IBM/agent_files/agent-install.sh/data\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  113k    0  113k    0     0  76924      0 --:--:--  0:00:01 --:--:-- 76924\n$ chmod +x agent-install.sh\n$ sudo -s -E ./agent-install.sh -i 'css:' -p IBM/pattern-ibm.helloworld -w '*' -T 120\n2021-04-27 12:12:57 AGENT_INSTALL_ZIP:  (from default value)\n2021-04-27 12:12:58 INPUT_FILE_PATH: css: (from command line flag)\n2021-04-27 12:12:58 INPUT_FILE_PATH adjusted to: css:/api/v1/objects/IBM/agent_files\n2021-04-27 12:12:58 AGENT_CFG_FILE:  (from default value)\n2021-04-27 12:12:58 AGENT_VERBOSITY: 3 (from environment variable)\n2021-04-27 12:12:58 HZN_ORG_ID: thinkedge (from environment variable)\n2021-04-27 12:12:58 HZN_MGMT_HUB_CERT_PATH:  (from default value)\n2021-04-27 12:12:58 AGENT_CERT_FILE: agent-install.crt (from default value)\n2021-04-27 12:12:58 HZN_FSS_CSSURL: https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-css (from environment variable)\n2021-04-27 12:12:58 HZN_EXCHANGE_USER_AUTH: ****** (from environment variable)\n2021-04-27 12:12:58 HZN_EXCHANGE_NODE_AUTH:  (from default value)\n2021-04-27 12:12:58 Downloading file https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-css/api/v1/objects/IBM/agent_files/agent-install.crt/data using --insecure ...\n2021-04-27 12:12:59 Downloading file https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-css/api/v1/objects/IBM/agent_files/agent-install.cfg/data ...\n2021-04-27 12:13:00 AGENT_SKIP_REGISTRATION: false (from default value)\n2021-04-27 12:13:00 HZN_EXCHANGE_URL: https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-exchange/v1 (from configuration file)\n2021-04-27 12:13:00 NODE_ID:  (from default value)\n2021-04-27 12:13:00 HZN_DEVICE_ID: my-pi (from environment variable)\n2021-04-27 12:13:00 HZN_NODE_ID:  (from default value)\n2021-04-27 12:13:00 HZN_EXCHANGE_PATTERN: IBM/pattern-ibm.helloworld (from command line flag)\n2021-04-27 12:13:00 HZN_NODE_POLICY:  (from default value)\n2021-04-27 12:13:00 AGENT_WAIT_FOR_SERVICE: * (from command line flag)\n2021-04-27 12:13:00 AGENT_WAIT_FOR_SERVICE_ORG:  (from default value)\n2021-04-27 12:13:00 AGENT_REGISTRATION_TIMEOUT: 120 (from command line flag)\n2021-04-27 12:13:00 AGENT_OVERWRITE: false (from default value)\n2021-04-27 12:13:00 AGENT_SKIP_PROMPT: false (from default value)\n2021-04-27 12:13:00 AGENT_INSTALL_ZIP: agent-install-files.tar.gz (from default value)\n2021-04-27 12:13:00 AGENT_DEPLOY_TYPE: device (from default value)\n2021-04-27 12:13:00 AGENT_WAIT_MAX_SECONDS: 30 (from default value)\n2021-04-27 12:13:01 NODE_ID_MAPPING_FILE: node-id-mapping.csv (from default value)\n2021-04-27 12:13:01 PKG_APT_KEY:  (from default value)\n2021-04-27 12:13:01 APT_REPO_BRANCH: updates (from default value)\n2021-04-27 12:13:01 AGENT_IMAGE_TAR_FILE: amd64_anax.tar.gz (from default value)\n2021-04-27 12:13:05 OS: linux, Distro: raspbian, Distro Release: 10, Distro Code Name: buster, Architecture: armhf\n2021-04-27 12:13:05 WARNING: Using node id from HZN_DEVICE_ID\n2021-04-27 12:13:05 Node type: device\n2021-04-27 12:13:05 Updating apt package index...\n2021-04-27 12:14:15 Installing prerequisites, this could take a minute...\n2021-04-27 12:16:17 Verifying that node my-pi in the exchange is type device (if it exists)...\n2021-04-27 12:16:18 Creating /etc/default/horizon ...\n2021-04-27 12:16:19 Downloading file https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-css/api/v1/objects/IBM/agent_files/horizon-agent-linux-deb-armhf.tar.gz/data ...\n2021-04-27 12:16:42 Installing the horizon packages in /root/. ...\n2021-04-27 12:18:22 Waiting for state: Horizon agent ready \n2021-04-27 12:18:24 Done: Horizon agent ready\n2021-04-27 12:18:25 Registering the edge node...\nhzn register -m 'make-pi' -o 'thinkedge' -u 'iamapikey:I1qBL7mXekVo-jxJf_3M3th6xEWaPuuYvegbxBZthSoL' -n 'my-pi:' -s '*'  -t '120' -p 'IBM/pattern-ibm.helloworld'\nHorizon Exchange base URL: https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-exchange/v1\nGenerated random node token\nNode thinkedge/my-pi does not exist in the Exchange with the specified token, creating/updating it...\nnode added or updated\nNode my-pi created.\nWill proceeed with the given pattern IBM/pattern-ibm.helloworld.\nInitializing the Horizon node with node type 'device'...\nNote: no input file was specified. This is only valid if none of the services need variables set.\nHowever, if there is 'userInput' specified in the node already in the Exchange, the userInput will be used.\nChanging Horizon state to configured to register this node with Horizon...\nHorizon node is registered. Workload services should begin executing shortly.\nWaiting for up to 120 seconds for following services to start:\n    IBM/ibm.helloworld\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: no agreements formed yet\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: agreement is formed\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: agreement is accepted\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: service is created\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: service is created\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: service is created\nTimeout waiting for some services to successfully start. Analyzing possible reasons for the timeout...\n\nCurrently, there are no errors recorded in the node's event log.\nUsing the 'hzn deploycheck all -p' command to verify that node, service configuration and pattern is compatible.\nNeither node id nor node policy is specified. Getting node policy from the local node.\nNeither node id nor node user input file is specified. Getting node user input from the local node.\n{\n  \"compatible\": true,\n  \"reason\": {\n    \"IBM/ibm.helloworld_1.0.0_arm\": \"Compatible\"\n  }\n}\n\nAnalysis complete.\n\n")))),Object(l.b)("p",null,"Wenn Sie sich die IBM Edge Application Manager-Benutzeroberfläche ansehen, sehen Sie, dass Ihr Gerät auf der Registerkarte “Nodes” angezeigt wird. Schließlich sollte es sich im Status Active with services befinden. Die von uns gewählte Agenteninstallation stellt auch einen Beispieldienst bereit.\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.47222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACiklEQVQ4y41Ty2oUQRTtjeBW8g9+h/gVLhUXUbeCIKZHYpxJ/ADRPxARogYCCUYlcSFZaCDJZCJxmImvPGZ6unu6uquqX8d7q7tniPHVcLpuVZ0691G3rPv1OmZnH6DemIVdu4sp2ybUyrGyCVM27vwBdq2G6XszsIln9YMMzlDh2JNwghhelIGmI/DclzkCDdD0FGgZLv08QpoD1sFRDwPXR6/Xg+u66Pf7GAwGBo7jwPO8EXzfPwHP8zEc+kiVR3AhAh+W6wuEkYbWBZRS/wVJSBOFA0diej7B7WfAVkfA0po2owgRQUqJJEkQx/EJ8Fqapqf2klgjToGX776g/niZShfDCgJhxMIwhCoFfwVHJIJg5LACiwI5pHCw394hBwqWEALVpyjlLMuIgiIlioq/kBy6VEMWzPPc8FiMbcl2UvA4MCslARaJ6bBij0RiW/IB3iM7IvGEHdFeQnNN0fFeWp7hkWEE+XaHlA7lwNHDNWnACGelSETl4Ns/Iq5PXBZlBxXSiseCeZlun4Ru7rUwubuNuW57VAYm6rIUf/vyKuUsLyRnOp/x4vjQ2Cz49PCHsTkCFuQyNDptXNnZxDVyOtnaxnUaLzc38fBrd1Rrq/J7a28XTREY+wmJPfq2b+yY68s9SiU5/34N1uJzWMsLsJYWinFxHhc+rI8Fq5Q3qMuvtrbQoOhufGrCKWuZ5oUgR3jx4zrOvl3GxOoKzq2+wsTaCs68WcKlrY2xoCkstweF+l1GeM2FV9pcCq+PWoN4B3TbXTq0T7xuFJqxQ/NjrcZtI0RomjRQJMrC9MJjHVM7aLPOwqERTPGvzwhyS0SSn11kQmZE1MCyBJOYI8s98RuE5dPlR/ITxJOh2JC+9t8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IEAM-nodes-chart",title:"IEAM-nodes-chart",src:"/Markus-Keppeler/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/3cbba/IEAM-nodes-chart.png",srcSet:["/Markus-Keppeler/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/7fc1e/IEAM-nodes-chart.png 288w","/Markus-Keppeler/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/a5df1/IEAM-nodes-chart.png 576w","/Markus-Keppeler/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/3cbba/IEAM-nodes-chart.png 1152w","/Markus-Keppeler/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/0b124/IEAM-nodes-chart.png 1728w","/Markus-Keppeler/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/5ed2b/IEAM-nodes-chart.png 2242w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)("p",null,"Sie können zwischen der Diagramm- und der Listenansicht wechseln\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.47222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABV0lEQVQ4y+2Qy07DMBBF/duIJohHqRB/wRK+gwUSiy4Q6q5K2yjvxImT2Hn1MraaiAqQWHTBgkjHM/d6PBmb3cznWCzuML9dwLIvMLMswj7EMSdmFs5/wLJtXF5dw6I6FosBSaEQcolEtOD1AJITWudyD9EAJL9ANjJaONHvAeb5EdIsRxRFyLIMcRwjTVNDkiTgnE/keX4E5zmKIkevNByi4GC8qFDWCk3THFBQ6pjvPEn0nYKfSthPCmePwGqnwOq6ogKJuq5RVZUp7roObdtO8Tj/7LUQVYOlA9w/vOD5dQW22Wzged5EEARwXRdhGGK73cL3feOv12vj6Xqzt9uZvYBQZYL3tyUcxwGrJF2T/rofBjPFQFFPqSfo+95o7WtP67Gmo3zUSrXQn34yVtDjlmVprqyjvraU8leMz2TOUS4oMi2EECeD6UU3PRXslM3+G/7Rhh/RPLNyE/96nwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IEAM-nodes-list",title:"IEAM-nodes-list",src:"/Markus-Keppeler/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/3cbba/IEAM-nodes-list.png",srcSet:["/Markus-Keppeler/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/7fc1e/IEAM-nodes-list.png 288w","/Markus-Keppeler/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/a5df1/IEAM-nodes-list.png 576w","/Markus-Keppeler/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/3cbba/IEAM-nodes-list.png 1152w","/Markus-Keppeler/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/0b124/IEAM-nodes-list.png 1728w","/Markus-Keppeler/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/5ed2b/IEAM-nodes-list.png 2242w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)("p",null,"Wählen Sie Ihr Gerät aus, um detaillierte Informationen über Ihren Knoten zu erhalten\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABvklEQVQ4y5VUa4+bMBDkdzc5KW2k3u/rh0r9nguvAAH8AJvHnMfgiFxy7RVptOtdMzvZXRLtXg74/uOI19efOB6P2O/3X8Zut8e33eIfDgePSBmgKGtIKTDPM/7n6S0g+/tYlGUZzuczmqaBEAJt23qflgixAOb+hoiXhmHAOI5QSnl/miZveZZSYmCu6yAdecj3fe+LfURU17VP8iG5tfYmnz7zJDDO3+YogAQsSAhCSETX69W/xAudU8GX6QeVWmt/JlmIEzxvCQOioiiQ57kn5ctK6cXqxbKIXv1tnO14SiiU9D+VF8bBOlUbWMKsvrmLhx4+EKZpitPp5CdUC42qUSgb2ueIC4200ihr6VdtGcaGkPKNqzZMwJ90xq+3Gb/PM3IBlNLt6AY852KGGYFpHJ4rZO+qqkLN3RMKjatGq7VC9wFsS+NydbtgUSjvFZKQQyGpZh/H4TbpcZxu8FN3tjNuB+0EqT/pYZgkqxtjHOxqH2HtAg7FfDYUrk2SxIvClfwr4N2nhFmWuym/oXSE1YqyLL3lBlwuF3D5kyRBHMe3PGP+C1k/uRthy1VpO9fsRxW8GFSHP4d/KXwHTB66T/yLtHYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IEAM-node-details",title:"IEAM-node-details",src:"/Markus-Keppeler/think-labs/static/16321f08007ab24d6cc113ed40e6f421/3cbba/IEAM-node-details.png",srcSet:["/Markus-Keppeler/think-labs/static/16321f08007ab24d6cc113ed40e6f421/7fc1e/IEAM-node-details.png 288w","/Markus-Keppeler/think-labs/static/16321f08007ab24d6cc113ed40e6f421/a5df1/IEAM-node-details.png 576w","/Markus-Keppeler/think-labs/static/16321f08007ab24d6cc113ed40e6f421/3cbba/IEAM-node-details.png 1152w","/Markus-Keppeler/think-labs/static/16321f08007ab24d6cc113ed40e6f421/0b124/IEAM-node-details.png 1728w","/Markus-Keppeler/think-labs/static/16321f08007ab24d6cc113ed40e6f421/ade7f/IEAM-node-details.png 2220w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)("p",null,"Um die Ausgabe des helloworld-Beispiel-Edge-Dienstes anzuzeigen, der als Teil der Agent-Installation installiert wird, führen Sie aus"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"hzn service log -f ibm.helloworld\n# Press Ctrl-c to stop the output display\n")),Object(l.b)(g,{mdxType:"Accordion"},Object(l.b)(p,{title:"service output",mdxType:"AccordionItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ hzn service log -f ibm.helloworld\nDisplaying log messages for service ibm.helloworld with service id 593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e.\nUse ctrl-C to terminate this command.\nApr 27 12:20:40 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:43 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:46 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:49 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:52 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:55 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:58 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\n")))),Object(l.b)("p",null,"Wenn der helloworld-Edge-Dienst nicht gestartet wird, führen Sie diesen Befehl aus, um Fehlermeldungen anzuzeigen:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"hzn eventlog list -f\n# Press Ctrl-c to stop the output display\n")),Object(l.b)(g,{mdxType:"Accordion"},Object(l.b)(p,{title:"eventlog output",mdxType:"AccordionItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'$ hzn eventlog list -f\n  "2021-04-27 12:18:30:   Start node configuration/registration for node my-pi.",\n  "2021-04-27 12:18:36:   Start service auto configuration for IBM/ibm.helloworld.",\n  "2021-04-27 12:18:36:   Complete service auto configuration for IBM/ibm.helloworld.",\n  "2021-04-27 12:18:37:   Complete node configuration/registration for node my-pi.",\n  "2021-04-27 12:18:37:   Start policy advertising with the Exchange for service IBM/ibm.helloworld.",\n  "2021-04-27 12:18:38:   Complete policy advertising with the Exchange for service IBM/ibm.helloworld.",\n  "2021-04-27 12:19:42:   Node received Proposal message using agreement 593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e for service IBM/ibm.helloworld from the agbot IBM/agbot.",\n  "2021-04-27 12:19:47:   Node received Proposal message using agreement 66ed9bb65e4405db0f3904d0e8443c7b80c9067f56db9220f2715cb53efd03d3 for service IBM/ibm.helloworld from the agbot IBM/agbot.",\n  "2021-04-27 12:19:48:   Agreement 593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e already exists, ignoring proposal: ibm.helloworld",\n  "2021-04-27 12:19:55:   Agreement reached for service ibm.helloworld. The agreement id is 593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e.",\n  "2021-04-27 12:19:56:   Start dependent services for IBM/ibm.helloworld.",\n  "2021-04-27 12:19:56:   Start workload service for IBM/ibm.helloworld.",\n  "2021-04-27 12:20:22:   Image loaded for IBM/ibm.helloworld.",\n  "2021-04-27 12:20:41:   Workload service containers for IBM/ibm.helloworld are up and running."\n')))),Object(l.b)("p",null,"(optional) Verwenden Sie den Befehl hzn auf diesem Randknoten, um Dienste, Muster und Bereitstellungsrichtlinien in Horizon Exchange anzuzeigen. Legen Sie Ihre spezifischen Informationen als Umgebungsvariablen in Ihrer Shell fest und führen Sie die folgenden Befehle aus:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"eval export $(cat agent-install.cfg)\nhzn exchange service list IBM/\nhzn exchange pattern list IBM/\nhzn exchange deployment listpolicy\n")),Object(l.b)("p",null,"Untersuchen Sie alle hzn-Befehlsflags und -Unterbefehle:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"hzn --help\n")),Object(l.b)("p",null,"Führen Sie abschließend den folgenden Befehl aus, um die Registrierung des Geräts aufzuheben und den Beispielkantendienst zu entfernen"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"hzn unregister -f\n")),Object(l.b)(g,{mdxType:"Accordion"},Object(l.b)(p,{title:"unregister output",mdxType:"AccordionItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ hzn unregister -f\nUnregistering this node, cancelling all agreements, stopping all workloads, and restarting Horizon...\nWaiting for Horizon node unregister to complete: No Timeout specified ...\nWaiting for agent service to restart and checking the node configuration state...\nHorizon node unregistered. You may now run 'hzn register ...' again, if desired.\n")))),Object(l.b)("p",null,"Ihr Gerät sollte in der IBM Edge Application Manager UI-Knotenansicht im nicht registrierten Zustand angezeigt werden.\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.47222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACkklEQVQ4y41TS08TURSejYlbw3/wdxh/hUtdqQvi2kiriIVgoiuMhJXGlTHBQIJCaKpAAiGiJlCpMUKhLBpopzPTuTN3Hnfm85w701bE10m+Oefee+a753WNB6USJiYmURqfQKF4FyOFAqGY655NGCngzh9QKBYxen8MBfIz2m4CsxvgxJYw3Qi2n4CWffDakSncEKDlGdA2LPrYBJUCRvO4hY7loNVqwbIstNttdDodDdM0Ydt2H47jnIJtO+h2HajAJlgQrgPDcgQ8P0QYZgiC4L8gCSoO0DQlRmdj3H4F7NQFjDCkQ9+HT2DHOI4RRdEp8J5S6sxZHIWIFDC31kBpeolKF8FwXaHJPM/rE/4K3heuCynlqX0mBVJIYeJwb5cuCGAIIdCTgFJOVII0TeFzShQVi0cXWlRDJuQzSX5M1rfjzI8DM1SSICFEHIm+EbQmR/6Bz4iUyWOyiYFSVNqPz1Rus2ZoQu5ut9slh1iTCcFphfoHjkBHS+Xg7h+Tr0Opx4nSF/Sgcl9N2EvXdiQeTq1j5N4UhodvodE4yqNNdPdZ/03SXsqcHsv08w+orO2TJTHzrIw3yzW9H6uMkFMdr+/h2u42bnyt4nqtipukr37ZxpOjg36tDQ6V5fHTdXyvm9p+W9nHy7lqnzDiGaUaX9xYhbHwGsbSPIzF+UwvzOLSx82fCbOQa99OUJysYObFFsYevdclYOH6RHmElz9t4vy7JQytlHFhZRlDq2Wcqyziys7nAaEubN7245aLja0GXBHk0anBaJBfk7p9QD8dSp+0p3Wd1idhMBgbITw9MkJyl7PCR1Gs68bDy6PiaUKFf4km5JHw6SYp/fzFZJqHmME2+/Dz5JTEb+DlT5cfyQ9KQ50STu1wZwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IEAM-node-unregistered",title:"IEAM-node-unregistered",src:"/Markus-Keppeler/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/3cbba/IEAM-node-unregistered.png",srcSet:["/Markus-Keppeler/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/7fc1e/IEAM-node-unregistered.png 288w","/Markus-Keppeler/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/a5df1/IEAM-node-unregistered.png 576w","/Markus-Keppeler/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/3cbba/IEAM-node-unregistered.png 1152w","/Markus-Keppeler/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/0b124/IEAM-node-unregistered.png 1728w","/Markus-Keppeler/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/94e1b/IEAM-node-unregistered.png 2244w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)("p",null,"Sie können jetzt mit der Entwicklung Ihres First Edge-Service beginnen"))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-lab-connect-deutsch-mdx-d96bd67d921f4c9a2ded.js.map