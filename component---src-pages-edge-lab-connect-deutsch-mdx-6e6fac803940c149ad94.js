(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),o=t("NmYn"),r=t.n(o),l=t("Wbzz"),s=t("Xrax"),d=t("k4MR"),c=t("TSYQ"),b=t.n(c),g=t("QH2O"),p=t.n(g),m=t("qKvR"),u=function(e){var a,t=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:b()(p.a.pageHeader,(a={},a[p.a.withTabs]=o.length,a[p.a.darkMode]="dark"===n,a))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},t)))))},h=t("BAC9"),f=function(e){var a=e.relativePagePath,t=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||n,o=i.baseUrl,r=i.subDirectory,s=o+"/edit/"+i.branch+r+"/src/pages"+a;return o?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},A=t("FCXl"),I=t("dI71"),w=t("I8xM"),O=function(e){function a(){return e.apply(this,arguments)||this}return Object(I.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var a,t=r()(e,{lower:!0,strict:!0}),o=t===i,s=new RegExp(i+"/?(#.*)?$"),d=n.replace(s,t);return Object(m.b)("li",{key:e,className:b()((a={},a[w.selectedItem]=o,a),w.listItem)},Object(m.b)(l.Link,{className:w.link,to:""+d},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":a},Object(m.b)("ul",{className:w.list},o))))))},a}(i.a.Component),E=t("MjG9"),N=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,n=e.location,i=e.Title,o=a.frontmatter,c=void 0===o?{}:o,b=a.relativePagePath,g=a.titleType,p=c.tabs,h=c.title,I=c.theme,w=c.description,j=c.keywords,v=Object(N.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,y=k?n.pathname.replace(k,""):n.pathname,x=p?y.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",M=I||v;return Object(m.b)(d.a,{tabs:p,homepage:!1,theme:M,pageTitle:h,pageDescription:w,pageKeywords:j,titleType:g},Object(m.b)(u,{title:i?Object(m.b)(i,null):h,label:"label",tabs:p,theme:M}),p&&Object(m.b)(O,{title:h,slug:y,tabs:p,currentTab:x}),Object(m.b)(E.a,{padded:!0},t,Object(m.b)(f,{relativePagePath:b})),Object(m.b)(A.a,{pageContext:a,location:n,slug:y,tabs:p,currentTab:x}),Object(m.b)(s.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kLha:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return u}));var n=t("wx14"),i=t("zLVn"),o=(t("q1tI"),t("7ljp")),r=t("013z"),l=(t("qKvR"),{}),s=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",a)}},d=s("PageDescription"),c=s("InlineNotification"),b=s("Accordion"),g=s("AccordionItem"),p={_frontmatter:l},m=r.a;function u(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)(d,{mdxType:"PageDescription"},Object(o.b)("p",null,"In diesem Abschnitt richten Sie Ihre Zielumgebung ein, in der Sie die Beispielanwendung und den Edge-Agenten bereitstellen. Wenn Sie Ihre eigene Umgebung mitbringen möchten, können Sie dies gerne tun.")),Object(o.b)("h2",null,"Installation und Registrierung des Agenten"),Object(o.b)("p",null,"In dieser Übung verwenden Sie die automatisierte Installations- und Registrierungsmethode für Agenten. Andere Optionen sind"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Erweiterte manuelle Installation und Registrierung des Agenten"),Object(o.b)("li",{parentName:"ul"},"Installation und Registrierung von Massenagenten"),Object(o.b)("li",{parentName:"ul"},"Installation und Registrierung des SDO-Agenten (Secure Device Onboarding)")),Object(o.b)(c,{kind:"info",mdxType:"InlineNotification"},"**Hinweis:** Diese Schritte sind für alle Edge-Gerätetypen (Architekturen) gleich."),Object(o.b)("p",null,"Wenn Sie Ihr Gerät noch nicht mit den Schritten im Abschnitt ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/think-labs/edge-lab/requirements/deutsch"}),"Anforderungen")," vorbereitet haben, tun Sie dies jetzt."),Object(o.b)("p",null,"Der IBM Edge Application Manager sollte kein oder Ihr Gerät auflisten, wie unten gezeigt\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB80lEQVQ4y61Ty4oTQRTtD/Q7JpIwA05+w41uhAE34kcoKLhRRBQRYRYKrhLNJOlHvR/dXcd7y+4x0cRsLDh9T92cOvfe6nQxm01xeXkP8/k8YzabYTKZnMAZJme/cZdyF+fnmE6nKFZNwrL0+FEqfN9KrCqNm9qi0i1KHVGZFrXpsFUBpYoZRGF7gNI5Vg7YGNqHhGK9bbApG9RCYVM12NYCZS0zrxqVOeeY34K0tdAZjdRwVsM7DWsUirJiQwGhLIQQ0FrBaE28IYGGUhJKSuJmD4bgrIEkw0/fNN59Mfi60CiMsbDWwnuPtm0RIyMOPP7CLh8QQkTfRaybgIsnEXfuRzx85tnQZEPubkQI4S8DLtB13V4h1vV9DyMrXD16ANmUKDSNx4YsPAY+zIUlje6cuzUei3gfsFgsycehkErRPSkgJXRUzdKBRLwnMOcOGILM6rqmy3dZ54YratmQOuXF+0INgsQi6oTB5p6iZSFx7lCzOXHes8YPOsu8jbkoX0HBj9zR0Eka4p/8FNJQuODH/1p55NGQKxwCL56CX9wp3V6HY3KXp9Tn+P7DR7x+83Yvd0h/0HA39n1CGz28XCHqNdrgc+6Q9qQhfzH8jS7XAk9fCTx+IbC4UQjO4PiZf4w8bi39c15eA88/A8qPvx8f+Scswb051uS3tQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-nonode",title:"IEAM-nonode",src:"/think-labs/static/413181e39116caf3ec4348d8ba222709/3cbba/IEAM-nonode.png",srcSet:["/think-labs/static/413181e39116caf3ec4348d8ba222709/7fc1e/IEAM-nonode.png 288w","/think-labs/static/413181e39116caf3ec4348d8ba222709/a5df1/IEAM-nonode.png 576w","/think-labs/static/413181e39116caf3ec4348d8ba222709/3cbba/IEAM-nonode.png 1152w","/think-labs/static/413181e39116caf3ec4348d8ba222709/0b124/IEAM-nonode.png 1728w","/think-labs/static/413181e39116caf3ec4348d8ba222709/f5b13/IEAM-nonode.png 2228w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null,"1) Setzen Sie die folgenden Umgebungsvariablen auf Ihrem Gerät."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export HZN_DEVICE_ID=<yourname>\nexport HZN_EXCHANGE_USER_AUTH=iamapikey:<api-key>\nexport HZN_ORG_ID=<your-exchange-organization>\nexport HZN_FSS_CSSURL=https://<ieam-management-hub-ingress>/edge-css/\nexport HZN_EXCHANGE_URL=https://<ieam-management-hub-ingress>/edge-exchange/v1\n")),Object(o.b)(c,{kind:"info",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Hinweis:")," Wir haben bereits die Umgebung für die Einrichtung von Edge-Knoten vorbereitet, in der wir den Apikey und die Organisation für Sie erstellt haben.")),Object(o.b)("p",null,"2) Für die automatische Installation laden Sie das Skript agent-install.sh vom Cloud Sync Service (CSS) auf Ihr Gerät herunter und machen es ausführbar:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -u "$HZN_ORG_ID/$HZN_EXCHANGE_USER_AUTH" -k -o agent-install.sh $HZN_FSS_CSSURL/api/v1/objects/IBM/agent_files/agent-install.sh/data\nchmod +x agent-install.sh\n')),Object(o.b)("p",null,"3) Führen Sie agent-install.sh aus, um die erforderlichen Dateien von CSS abzurufen, den Horizon-Agent zu installieren und zu konfigurieren und Ihr Edge-Gerät für die Ausführung des helloworld-Beispiel-Edge-Dienstes zu registrieren:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo -s -E ./agent-install.sh -i 'css:' -p IBM/pattern-ibm.helloworld -w '*' -T 120\n")),Object(o.b)(c,{kind:"info",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Hinweis:")," Um alle verfügbaren agent-install.sh-Flag-Beschreibungen zu sehen, führen Sie aus: ",Object(o.b)("inlineCode",{parentName:"p"},"./agent-install.sh -h"))),Object(o.b)(b,{mdxType:"Accordion"},Object(o.b)(g,{title:"agent-install output",mdxType:"AccordionItem"},Object(o.b)("p",null,"Bei einer erfolgreichen Installation sollten Sie die folgende Cli-Ausgabe sehen. Abhängig von Ihrem Gerät und Ihrer Verbindung kann dies einige Zeit dauern."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -u \"$HZN_ORG_ID/$HZN_EXCHANGE_USER_AUTH\" -k -o agent-install.sh $HZN_FSS_CSSURL/api/v1/objects/IBM/agent_files/agent-install.sh/data\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  113k    0  113k    0     0  76924      0 --:--:--  0:00:01 --:--:-- 76924\n$ chmod +x agent-install.sh\n$ sudo -s -E ./agent-install.sh -i 'css:' -p IBM/pattern-ibm.helloworld -w '*' -T 120\n2021-04-27 12:12:57 AGENT_INSTALL_ZIP:  (from default value)\n2021-04-27 12:12:58 INPUT_FILE_PATH: css: (from command line flag)\n2021-04-27 12:12:58 INPUT_FILE_PATH adjusted to: css:/api/v1/objects/IBM/agent_files\n2021-04-27 12:12:58 AGENT_CFG_FILE:  (from default value)\n2021-04-27 12:12:58 AGENT_VERBOSITY: 3 (from environment variable)\n2021-04-27 12:12:58 HZN_ORG_ID: thinkedge (from environment variable)\n2021-04-27 12:12:58 HZN_MGMT_HUB_CERT_PATH:  (from default value)\n2021-04-27 12:12:58 AGENT_CERT_FILE: agent-install.crt (from default value)\n2021-04-27 12:12:58 HZN_FSS_CSSURL: https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-css (from environment variable)\n2021-04-27 12:12:58 HZN_EXCHANGE_USER_AUTH: ****** (from environment variable)\n2021-04-27 12:12:58 HZN_EXCHANGE_NODE_AUTH:  (from default value)\n2021-04-27 12:12:58 Downloading file https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-css/api/v1/objects/IBM/agent_files/agent-install.crt/data using --insecure ...\n2021-04-27 12:12:59 Downloading file https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-css/api/v1/objects/IBM/agent_files/agent-install.cfg/data ...\n2021-04-27 12:13:00 AGENT_SKIP_REGISTRATION: false (from default value)\n2021-04-27 12:13:00 HZN_EXCHANGE_URL: https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-exchange/v1 (from configuration file)\n2021-04-27 12:13:00 NODE_ID:  (from default value)\n2021-04-27 12:13:00 HZN_DEVICE_ID: my-pi (from environment variable)\n2021-04-27 12:13:00 HZN_NODE_ID:  (from default value)\n2021-04-27 12:13:00 HZN_EXCHANGE_PATTERN: IBM/pattern-ibm.helloworld (from command line flag)\n2021-04-27 12:13:00 HZN_NODE_POLICY:  (from default value)\n2021-04-27 12:13:00 AGENT_WAIT_FOR_SERVICE: * (from command line flag)\n2021-04-27 12:13:00 AGENT_WAIT_FOR_SERVICE_ORG:  (from default value)\n2021-04-27 12:13:00 AGENT_REGISTRATION_TIMEOUT: 120 (from command line flag)\n2021-04-27 12:13:00 AGENT_OVERWRITE: false (from default value)\n2021-04-27 12:13:00 AGENT_SKIP_PROMPT: false (from default value)\n2021-04-27 12:13:00 AGENT_INSTALL_ZIP: agent-install-files.tar.gz (from default value)\n2021-04-27 12:13:00 AGENT_DEPLOY_TYPE: device (from default value)\n2021-04-27 12:13:00 AGENT_WAIT_MAX_SECONDS: 30 (from default value)\n2021-04-27 12:13:01 NODE_ID_MAPPING_FILE: node-id-mapping.csv (from default value)\n2021-04-27 12:13:01 PKG_APT_KEY:  (from default value)\n2021-04-27 12:13:01 APT_REPO_BRANCH: updates (from default value)\n2021-04-27 12:13:01 AGENT_IMAGE_TAR_FILE: amd64_anax.tar.gz (from default value)\n2021-04-27 12:13:05 OS: linux, Distro: raspbian, Distro Release: 10, Distro Code Name: buster, Architecture: armhf\n2021-04-27 12:13:05 WARNING: Using node id from HZN_DEVICE_ID\n2021-04-27 12:13:05 Node type: device\n2021-04-27 12:13:05 Updating apt package index...\n2021-04-27 12:14:15 Installing prerequisites, this could take a minute...\n2021-04-27 12:16:17 Verifying that node my-pi in the exchange is type device (if it exists)...\n2021-04-27 12:16:18 Creating /etc/default/horizon ...\n2021-04-27 12:16:19 Downloading file https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-css/api/v1/objects/IBM/agent_files/horizon-agent-linux-deb-armhf.tar.gz/data ...\n2021-04-27 12:16:42 Installing the horizon packages in /root/. ...\n2021-04-27 12:18:22 Waiting for state: Horizon agent ready \n2021-04-27 12:18:24 Done: Horizon agent ready\n2021-04-27 12:18:25 Registering the edge node...\nhzn register -m 'make-pi' -o 'thinkedge' -u 'iamapikey:I1qBL7mXekVo-jxJf_3M3th6xEWaPuuYvegbxBZthSoL' -n 'my-pi:' -s '*'  -t '120' -p 'IBM/pattern-ibm.helloworld'\nHorizon Exchange base URL: https://cp-console.edge-lab-2172-think21-6a6ac8c3d7a0ea50590dce8fa3fd273c-0000.us-south.containers.appdomain.cloud/edge-exchange/v1\nGenerated random node token\nNode thinkedge/my-pi does not exist in the Exchange with the specified token, creating/updating it...\nnode added or updated\nNode my-pi created.\nWill proceeed with the given pattern IBM/pattern-ibm.helloworld.\nInitializing the Horizon node with node type 'device'...\nNote: no input file was specified. This is only valid if none of the services need variables set.\nHowever, if there is 'userInput' specified in the node already in the Exchange, the userInput will be used.\nChanging Horizon state to configured to register this node with Horizon...\nHorizon node is registered. Workload services should begin executing shortly.\nWaiting for up to 120 seconds for following services to start:\n    IBM/ibm.helloworld\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: no agreements formed yet\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: agreement is formed\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: agreement is accepted\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: service is created\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: service is created\nStatus of the services you are watching:\n    IBM/ibm.helloworld  Waiting: service is created\nTimeout waiting for some services to successfully start. Analyzing possible reasons for the timeout...\n\nCurrently, there are no errors recorded in the node's event log.\nUsing the 'hzn deploycheck all -p' command to verify that node, service configuration and pattern is compatible.\nNeither node id nor node policy is specified. Getting node policy from the local node.\nNeither node id nor node user input file is specified. Getting node user input from the local node.\n{\n  \"compatible\": true,\n  \"reason\": {\n    \"IBM/ibm.helloworld_1.0.0_arm\": \"Compatible\"\n  }\n}\n\nAnalysis complete.\n\n")))),Object(o.b)("p",null,"Wenn Sie sich die IBM Edge Application Manager-Benutzeroberfläche ansehen, sehen Sie, dass Ihr Gerät auf der Registerkarte “Nodes” angezeigt wird. Schließlich sollte es sich im Status Active with services befinden. Die von uns gewählte Agenteninstallation stellt auch einen Beispieldienst bereit.\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.47222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACfElEQVQ4y41TW2sTQRTeB8FX8Uf4N8Q/4bv0xfosPmhT0SZGf4DoTxBRCxWhwQtUBPWhCqbWgJYkVJo02c3eZmdn9vZ5zuxuYrVeBj7OmZ1vv3OZM1az1UK7fQetW200Vq9jpdEgrFa29gkrDVz7Axp0fuPmmrGWHeawA4WJF8MJE7gyg6+AoIInc/hxgUADtD0Wri6RFYA1Gk8xc31Mp1O4rgvbtjGbzQwcx4HneXP4vn8EnucjCHxkykOuXIjQh+X6ApHU0LqEUuq/EBOyVGHsxFhbT3H1EdDtC1ha06GUkIQ4jpGmKZIkOQL+lmXZb2dpopFkwMabfTTvd+AECawwFEYsiiKoSvBXcEYiDOcBa7AoUEAJB8O9XQqgYAkhUC9FJed5ThSUJVFWvDigSz1kwaIoDI/F2I/ZTxc8KyMBFkno55gjEqn2Cz4jX5J4Sj6fpbTXlB2fcUBFPLYMI8i3G1A5VANnD5f6Yhb9bLIly0S+/UPi+sRlUQ5QI/uJZxVVuTZFuvy1h4u9Hdwe7M3bwERdteJvq6hLzotSstn/hseTsfHbJPjwcGR8zoAFuQ0caGm3i0u9z1imwGwv7H7C3f2B4UZGsIpwhbLbEaHxH4wPcO/70PgJ95dnlFpy5u1rWM/WYXU2YG0SOk9p/wRnt98tBOuSP9DEL33pmuyWKbJtRoKfUynIGZ7bfo+TrzZxeusFTm09N/YE7c93Py4ETWN5PCjVg1jiJTde6fmNzkeDeCO67QH9NCTeQEbG9mk/0WoxNkJEZkhDRaIsTC880QmNgzbfWTgyghn+tYygpBciKRK/Ek6ZIcmPKzCJObEsz8UxiKqny4/kB9YFoeHyBPSfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-nodes-chart",title:"IEAM-nodes-chart",src:"/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/3cbba/IEAM-nodes-chart.png",srcSet:["/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/7fc1e/IEAM-nodes-chart.png 288w","/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/a5df1/IEAM-nodes-chart.png 576w","/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/3cbba/IEAM-nodes-chart.png 1152w","/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/0b124/IEAM-nodes-chart.png 1728w","/think-labs/static/8ccaea5b6bd87c8db221270d82e1c854/5ed2b/IEAM-nodes-chart.png 2242w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null,"Sie können zwischen der Diagramm- und der Listenansicht wechseln\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.47222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABVElEQVQ4y+2RyU7DMBCG/dqIphVLqVDfgiu8BhfEoQckeqvSRdkTO4vtLO6PbZqoFeXWAwcsfZ7x78l4ZkLup1PMZo+YPszgjCcYOY5mfLC9rxk5uP4FR9/f3N5ZS+JCIc4lQiqQFA0y3oFJID9AuQITe+Q1oI9nyepvuj1APD9CmjFEUYQsyxDHMdI0tSRJAkrpAGPsBEoZ8pxBSQNFmVOQjFUouURd1xYp5Q/qM5rQdK1EkApMXiSunoHlVoJwXukAAc45qqqywW3bommawZ76x1qDoqqxcIH50xte35cg6/UanucNBEGA3W6HMAyx2WwGfbVaWc3E27vtFr7vI9DIMsHnxwKu64JUQreqX90rZatQ2poq+6rUQTda13XW74ym/f4spf4jepmRkVwPtyxL27KxfdtCiBPOaf2Yjr8nZiuK4mIQs5mkl4JcMtl/wj+a8Au20LNuylpLzwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-nodes-list",title:"IEAM-nodes-list",src:"/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/3cbba/IEAM-nodes-list.png",srcSet:["/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/7fc1e/IEAM-nodes-list.png 288w","/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/a5df1/IEAM-nodes-list.png 576w","/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/3cbba/IEAM-nodes-list.png 1152w","/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/0b124/IEAM-nodes-list.png 1728w","/think-labs/static/71ce72b6530f399ba0f65998fdb5f4b3/5ed2b/IEAM-nodes-list.png 2242w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null,"Wählen Sie Ihr Gerät aus, um detaillierte Informationen über Ihren Knoten zu erhalten\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABvUlEQVQ4y5VU246bQAzlu5tUSjdS9/v6UKnv2QAhQIC5cBngdI7JpGw2abdIR/aM7WNjG6LN1x2+vezx+vod+/0e2+3209hstviyWfTdbieITA/kRQWtFeZ5xv883QDobolhLMOj0+mE4/GIqqqglELTNKjrWiQR7gJo+xsiOjnnMI4jjDGiT9MkkmetNRxtbQvtyYO96zpJdo+IldHIhxfDMNxeiTrtJOi9vraxAPozIaEIpRFdLhcJokPrq2Aw9VCltVbOJAv3BM9rwoAoz3NkWSakDDbGvpNMQhlggvTteEiojJZm02F0A5zP7NwV1If+j766Dz38QMgpHw4HmVClLMraoKgpHyPOLdLSoqi0rNoyjBUhy+99NjcBv9IZP95m/DzOyBRQaL+jK/CcqRn9CEyje1whe1eW5bJ7yqBujEhrDdo7sC21t1XNgqVC/b5CEnIoJLXSR3eb9D2cf4229zs4TND2SQ/DJJm973vZN5EPMHBAgkHa9HRtkiReKrySfwb0fTLlzE/5DYUnLK8oikJkmqY4n8/g8idJgjiOb3beyRdy/eRuhDVXpWn9ynysgo6h6vBz+FeFvwEr37pEclNgDQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-node-details",title:"IEAM-node-details",src:"/think-labs/static/16321f08007ab24d6cc113ed40e6f421/3cbba/IEAM-node-details.png",srcSet:["/think-labs/static/16321f08007ab24d6cc113ed40e6f421/7fc1e/IEAM-node-details.png 288w","/think-labs/static/16321f08007ab24d6cc113ed40e6f421/a5df1/IEAM-node-details.png 576w","/think-labs/static/16321f08007ab24d6cc113ed40e6f421/3cbba/IEAM-node-details.png 1152w","/think-labs/static/16321f08007ab24d6cc113ed40e6f421/0b124/IEAM-node-details.png 1728w","/think-labs/static/16321f08007ab24d6cc113ed40e6f421/ade7f/IEAM-node-details.png 2220w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null,"Um die Ausgabe des helloworld-Beispiel-Edge-Dienstes anzuzeigen, der als Teil der Agent-Installation installiert wird, führen Sie aus"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"hzn service log -f ibm.helloworld\n# Press Ctrl-c to stop the output display\n")),Object(o.b)(b,{mdxType:"Accordion"},Object(o.b)(g,{title:"service output",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ hzn service log -f ibm.helloworld\nDisplaying log messages for service ibm.helloworld with service id 593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e.\nUse ctrl-C to terminate this command.\nApr 27 12:20:40 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:43 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:46 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:49 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:52 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:55 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\nApr 27 12:20:58 make-pi workload-593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e_ibm.helloworld[1407]: my-pi says: Hello World!!\n")))),Object(o.b)("p",null,"Wenn der helloworld-Edge-Dienst nicht gestartet wird, führen Sie diesen Befehl aus, um Fehlermeldungen anzuzeigen:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"hzn eventlog list -f\n# Press Ctrl-c to stop the output display\n")),Object(o.b)(b,{mdxType:"Accordion"},Object(o.b)(g,{title:"eventlog output",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'$ hzn eventlog list -f\n  "2021-04-27 12:18:30:   Start node configuration/registration for node my-pi.",\n  "2021-04-27 12:18:36:   Start service auto configuration for IBM/ibm.helloworld.",\n  "2021-04-27 12:18:36:   Complete service auto configuration for IBM/ibm.helloworld.",\n  "2021-04-27 12:18:37:   Complete node configuration/registration for node my-pi.",\n  "2021-04-27 12:18:37:   Start policy advertising with the Exchange for service IBM/ibm.helloworld.",\n  "2021-04-27 12:18:38:   Complete policy advertising with the Exchange for service IBM/ibm.helloworld.",\n  "2021-04-27 12:19:42:   Node received Proposal message using agreement 593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e for service IBM/ibm.helloworld from the agbot IBM/agbot.",\n  "2021-04-27 12:19:47:   Node received Proposal message using agreement 66ed9bb65e4405db0f3904d0e8443c7b80c9067f56db9220f2715cb53efd03d3 for service IBM/ibm.helloworld from the agbot IBM/agbot.",\n  "2021-04-27 12:19:48:   Agreement 593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e already exists, ignoring proposal: ibm.helloworld",\n  "2021-04-27 12:19:55:   Agreement reached for service ibm.helloworld. The agreement id is 593a50ceadeae6c83f74b63d2591cb87af962472a8c3e4cd18d007d14d78c00e.",\n  "2021-04-27 12:19:56:   Start dependent services for IBM/ibm.helloworld.",\n  "2021-04-27 12:19:56:   Start workload service for IBM/ibm.helloworld.",\n  "2021-04-27 12:20:22:   Image loaded for IBM/ibm.helloworld.",\n  "2021-04-27 12:20:41:   Workload service containers for IBM/ibm.helloworld are up and running."\n')))),Object(o.b)("p",null,"(optional) Verwenden Sie den Befehl hzn auf diesem Randknoten, um Dienste, Muster und Bereitstellungsrichtlinien in Horizon Exchange anzuzeigen. Legen Sie Ihre spezifischen Informationen als Umgebungsvariablen in Ihrer Shell fest und führen Sie die folgenden Befehle aus:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"eval export $(cat agent-install.cfg)\nhzn exchange service list IBM/\nhzn exchange pattern list IBM/\nhzn exchange deployment listpolicy\n")),Object(o.b)("p",null,"Untersuchen Sie alle hzn-Befehlsflags und -Unterbefehle:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"hzn --help\n")),Object(o.b)("p",null,"Führen Sie abschließend den folgenden Befehl aus, um die Registrierung des Geräts aufzuheben und den Beispielkantendienst zu entfernen"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"hzn unregister -f\n")),Object(o.b)(b,{mdxType:"Accordion"},Object(o.b)(g,{title:"unregister output",mdxType:"AccordionItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ hzn unregister -f\nUnregistering this node, cancelling all agreements, stopping all workloads, and restarting Horizon...\nWaiting for Horizon node unregister to complete: No Timeout specified ...\nWaiting for agent service to restart and checking the node configuration state...\nHorizon node unregistered. You may now run 'hzn register ...' again, if desired.\n")))),Object(o.b)("p",null,"Ihr Gerät sollte in der IBM Edge Application Manager UI-Knotenansicht im nicht registrierten Zustand angezeigt werden.\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.47222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACjUlEQVQ4y41TS2sUQRCeg+BV/BH+DfFPeBdPCsG7ZiMxiTGCngwaPIjgRRAjESUhIRIRo5gguHENSt6HxN2dnVfPdM90z3xW9czuGo2Pho+qrqr+uqqr2hkdG8P4+ATGro+jNnQVg7UaYaiSXZ0wWMOVP6BG/uFrI1Y67ShHO1Ro+hJulMFLDAIFhBX8JEcgC4QpQNsj4aUlTAE4+wctdLwArVYLnueh3W6j0+lYuK4L3/d7CILgEHw/QBgGMMpHrjyIKIDjBQJxkiJNSyil/guSYLTCgSsxMq1x+QlQ3xJw0pScSYKEwIFaa2RZdghsM8b85tNZiswAM2/2MHpvDm6YwYkiYcniOO4R/gq2iyiClPKQnUmBAkq42Nlo0AUKjhAC3aWo5JwyKYqiLIl0XnyhR2/IhOzjOCazcazrfpxj8hw5gY3K3kjdor3kA+wzORLOnHRigDZlHPtMpbNkWELubhiGFKAtmRBcVmoPcAYMDuTuf6fYgErXubEXdGGqWEvYLdcPJG5OLmNw+A4GBi5hd3fP2jl77j7Lv62iW3KeF9Yw9fADFpY2yJNg6sE8Xi58sXZtSsKMSrqxvYHzjTourn/GhfU1K881PmFyb9vGxkzIqfK6ffctvm26Vp9d3MTjZ2s9woxnlLp6avk1nBfTcOZm4MwS5p7T/ilOr777mbBMufG1iaGJRdx/tIKRW6+oq7LXoKzK8MzqexxfnMXJpQWcWJq38hjtz9Y/9gntw1Ztb7YiLK/sIhKqys70R4Pi9qnb23RoRyYkYyu3aN9MVX9shIhpZDSE5C6XxFmm7bvx8PKoxJbQ4F/LEib0QxK6SdHQlj+m/IY8xLKycYxMpC1JHIG4+rr8SX4AVC6dFcMUfC4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-node-unregistered",title:"IEAM-node-unregistered",src:"/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/3cbba/IEAM-node-unregistered.png",srcSet:["/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/7fc1e/IEAM-node-unregistered.png 288w","/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/a5df1/IEAM-node-unregistered.png 576w","/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/3cbba/IEAM-node-unregistered.png 1152w","/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/0b124/IEAM-node-unregistered.png 1728w","/think-labs/static/9e36fee8a0d683e34da91fa0e037524a/94e1b/IEAM-node-unregistered.png 2244w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null,"Sie können jetzt mit der Entwicklung Ihres First Edge-Service beginnen"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-lab-connect-deutsch-mdx-6e6fac803940c149ad94.js.map