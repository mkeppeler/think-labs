(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("NmYn"),b=n.n(r),c=n("Wbzz"),l=n("Xrax"),s=n("k4MR"),o=n("TSYQ"),d=n.n(o),p=n("QH2O"),u=n.n(p),m=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===a,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},n)))))},j=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,r=i.baseUrl,b=i.subDirectory,l=r+"/edit/"+i.branch+b+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},h=n("FCXl"),f=n("dI71"),A=n("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=b()(e,{lower:!0,strict:!0}),r=n===i,l=new RegExp(i+"/?(#.*)?$"),s=a.replace(l,n);return Object(m.b)("li",{key:e,className:d()((t={},t[A.selectedItem]=r,t),A.listItem)},Object(m.b)(c.Link,{className:A.link,to:""+s},e))}));return Object(m.b)("div",{className:A.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:A.list},r))))))},t}(i.a.Component),v=n("MjG9"),x=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,r=t.frontmatter,o=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,u=o.tabs,j=o.title,f=o.theme,A=o.description,S=o.keywords,w=Object(x.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,N=I?a.pathname.replace(I,""):a.pathname,D=u?N.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"",E=f||w;return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:E,pageTitle:j,pageDescription:A,pageKeywords:S,titleType:p},Object(m.b)(g,{title:i?Object(m.b)(i,null):j,label:"label",tabs:u,theme:E}),u&&Object(m.b)(k,{title:j,slug:N,tabs:u,currentTab:D}),Object(m.b)(v.a,{padded:!0},n,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(h.a,{pageContext:t,location:a,slug:N,tabs:u,currentTab:D}),Object(m.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},nYXO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return g}));var a=n("wx14"),i=n("zLVn"),r=(n("q1tI"),n("7ljp")),b=n("013z"),c=(n("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=l("PageDescription"),o=l("Tabs"),d=l("Tab"),p=l("InlineNotification"),u={_frontmatter:c},m=b.a;function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(m,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"In diesem Abschnitt werden Sie einen Beispieldienst erstellen/entwickeln, den Sieim IBM Edge Application Manager veröffentlichen und in einem späteren Schritt bereitstellen werden.")),Object(r.b)("h2",null,"Erstellen Ihres eigenen Hello World Edge Service"),Object(r.b)("p",null,"Folgen Sie den Schritten auf dieser Seite, um Ihren ersten einfachen Horizon-Edge-Service zu erstellen. Voraussetzungen für die Entwicklung eines eigenen Dienstes"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Wenn Sie dies noch nicht getan haben, führen Sie die Schritte in diesen Abschnitten aus:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Voraussetzungen für die Verwendung des Hello World-Beispiel-Edge-Service"),Object(r.b)("li",{parentName:"ul"},"Verwendung des Hello World-Beispiel-Edge-Dienstes mit Bereitstellungsmustern")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Wenn Sie macOS als Entwicklungshost verwenden, konfigurieren Sie Docker so, dass Anmeldeinformationen in ~/.docker gespeichert werden:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Öffnen Sie das Dialogfeld “Docker Preferences” (Docker-Voreinstellungen)"),Object(r.b)("li",{parentName:"ul"},"Deaktivieren Sie das Kontrollkästchen Docker-Anmeldeinformationen sicher im macOS-Schlüsselbund speichern")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Wenn Sie noch keine Docker-ID haben, erhalten Sie eine unter ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/"}),"hub.docker.com")," . Melden Sie sich bei Docker Hub mit Ihrer Docker Hub-IDan:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'export DOCKER_HUB_ID="<dockerhubid>"\necho "<dockerhubpassword>" | docker login -u $DOCKER_HUB_ID --password-stdin\n')),Object(r.b)("p",null,"Beispiel für die Ausgabe:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"WARNING! Your password will be stored unencrypted in /home/pi/.docker/config.json.\nConfigure a credential helper to remove this warning. See\nhttps://docs.docker.com/engine/reference/commandline/login/#credentials-store\n\nLogin Succeeded\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Erstellen Sie ein kryptografisches Signierschlüsselpaar. Damit können Sie Dienste signieren, wenn Sie sie in der Börse veröffentlichen. Dieser Schritt muss nur einmal durchgeführt werden.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'hzn key create "<x509-org>" "<x509-cn>"\n')),Object(r.b)("p",null,"wobei ","<","x509-org",">"," Ihr Firmenname ist und ","<","x509-cn",">"," normalerweise auf Ihre E-Mail-Adresse eingestellt ist."),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Installieren Sie git und jq:")),Object(r.b)(o,{mdxType:"Tabs"},Object(r.b)(d,{label:"RHEL",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo yum install -y git jq\n"))),Object(r.b)(d,{label:"Raspian/Ubuntu",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo apt install -y git jq\n"))),Object(r.b)(d,{label:"macOS",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"brew install git jq\n")))),Object(r.b)("h2",null,"Erstellen und Veröffentlichen Ihres eigenen Hello World Beispiel Edge Dienstes"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"cd in das Verzeichnis, in dem Sie Ihren neuen Dienst erstellen möchten, und führen Sie dann diesen Befehl aus, um die Dateien für einen einfachen Edge Dienst und die zugehörigen Horizon-Metadaten-Dateien zuerstellen:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'export USER_ID=<your-userID>\nhzn dev service new -s hello-$USER_ID -i "$DOCKER_HUB_ID/hello-$USER_ID"\n')),Object(r.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Beachten")," Sie, dass einige Projektvariablen in horizon/hzn.json definiert sind und in anderen Dateien referenziert werden, zum Beispiel horizon/service.definition.json.")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Bearbeiten Sie service.sh und ändern Sie etwas Einfaches, z. B. ändern Sie “Hello” in “Hallo”.")),Object(r.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Hinweis:")," Dieser Dienst ist der Einfachheit halber ein Shell-Skript, aber Sie könnenIhren Dienst in jeder beliebigen Sprache schreiben.")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Erstellen Sie das Docker-Image des Dienstes:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"make\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Testen Sie den Dienst, indem Sie ihn in der simulierten Agentenumgebungausführen:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn dev service start -S\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Prüfen Sie, ob der Container läuft:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo docker ps\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Zeigen Sie die Umgebungsvariablen an, die Horizon in Ihren Service-Container übergibt:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo docker inspect $(sudo docker ps -q --filter name=hello-$USER_ID) | jq '.[0].Config.Env'\n")),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Zeigen Sie die Ausgabe Ihres helloworld-Dienstes an:")),Object(r.b)(o,{mdxType:"Tabs"},Object(r.b)(d,{label:"RHEL",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo tail -f /var/log/messages | grep hello-$USER_ID\n"))),Object(r.b)(d,{label:"Raspian/Ubuntu",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo tail -f /var/log/syslog | grep hello-$USER_ID\n"))),Object(r.b)(d,{label:"macOS",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo docker logs -f $(sudo docker ps -q --filter name=hello-$USER_ID\n")))),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Stoppen Sie den Dienst:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo hzn dev service stop\n")),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},"Weisen Sie Horizon an, Ihr Docker-Image in Ihre Registry zu pushen und Ihren Dienst in Horizon Exchange zu veröffentlichen:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn exchange service publish -f horizon/service.definition.json\nhzn exchange service list\n")),Object(r.b)("p",null,"Wenn Sie zur IBM Edge Application Manager-Benutzeroberfläche wechseln, sollten Sie Ihren Dienst auf der Registerkarte ",Object(r.b)("strong",{parentName:"p"},"Services")," finden\n",Object(r.b)("span",Object(a.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.47222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABN0lEQVQ4y+2Qy06DQBSG571barRi9Q18CBfGpWv3TXTlwrhQI9LCXJlLofzOTKkSL8FYl5J8OWfC4eM/Qw7TFLPjE6RHMySTPYzHCcbJpKtd351H35D49/sH01hJLhosuImUcgWmG3ALiA6m1+CmhXCAP34JdRuaFiCcc0il8PiUYbGkniXKsowURQHG2Bthtg9jHEJwNJZhbSkqyUHm8zkCXGoo7WBtwP6IdePwXGhMz2uMzoCbewWSZRnyPIfRGlpXcbCu60GcczBGw65aXFw9ID29RClWm5WDRHuhUhWklLEfQvlrYuFbYyDpC+5ur+GsAaGURmHb+hv1TxgWQkTxEEEaa6V94hrC96Sq3tfcCrfDQ/SlIUToyTaN8dED/cHfQPp/+7TKb4R9ycdVdkr4V/wLd+cVb8S0CbrL+RAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-services",title:"IEAM-services",src:"/think-labs/static/393bb19489e93642b0a1620bca3b77cf/3cbba/IEAM-services.png",srcSet:["/think-labs/static/393bb19489e93642b0a1620bca3b77cf/7fc1e/IEAM-services.png 288w","/think-labs/static/393bb19489e93642b0a1620bca3b77cf/a5df1/IEAM-services.png 576w","/think-labs/static/393bb19489e93642b0a1620bca3b77cf/3cbba/IEAM-services.png 1152w","/think-labs/static/393bb19489e93642b0a1620bca3b77cf/0b124/IEAM-services.png 1728w","/think-labs/static/393bb19489e93642b0a1620bca3b77cf/94e1b/IEAM-services.png 2244w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("p",null,"Klicken Sie auf den Dienst, um die Details zu erhalten\n",Object(r.b)("span",Object(a.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABiklEQVQ4y4VU2XKDMAz0dxeSkOl/5WvyEq4YfHAYUL0iZiiF4pkF2djrXUmDiK93ut2/KUludL3eKIoiulwujDiO/0UUxfQVzXGSJAzR9BPJqqL3+01FUZDWmuGco7PR9kS6nTiepsmDSKRpRs/nk8kqTwxIKRlhvkZZlpTnOQvY+y7waNvWKxpYmTGG+r5nhViv65rniIEQY59S6g8EbrPWsmQQ4gBijK7rmBBjm4JhGJggpEgBSpOAVdgLm4BAOI4jNU3zyc/0i3DcEAYIkIX84TDUrrFe08ZSpSxJj1oZT6AWZQshLL9eLz6AvGBxzqlj+wwfY971jkwzo9YNac7bRiEUhPzAYrB3jBFNQoM/s2sZdtM05VaAwiNYD9jMpKFcWiqrj2W1scy58QGqCavnCmegA3YVokHRrNYaLgBI8T4DhBxWOcsyrlYoDG5fCuKB+RqhuXcJ284n1zrSvnLoQRQo9Nxe/x019kJ49BPA+uPxYMVr8nDBKeF6s/u0BH4aeMPids8R4Q9RTcCRLv7/2gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-service-details",title:"IEAM-service-details",src:"/think-labs/static/d21645ac956a7248dcaf46d0a8e5cded/3cbba/IEAM-service-details.png",srcSet:["/think-labs/static/d21645ac956a7248dcaf46d0a8e5cded/7fc1e/IEAM-service-details.png 288w","/think-labs/static/d21645ac956a7248dcaf46d0a8e5cded/a5df1/IEAM-service-details.png 576w","/think-labs/static/d21645ac956a7248dcaf46d0a8e5cded/3cbba/IEAM-service-details.png 1152w","/think-labs/static/d21645ac956a7248dcaf46d0a8e5cded/0b124/IEAM-service-details.png 1728w","/think-labs/static/d21645ac956a7248dcaf46d0a8e5cded/66c2b/IEAM-service-details.png 2222w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("p",null,"Sie können nun fortfahren und den Dienst im nächsten Teil des Labs bereitstellen."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-lab-edge-lab-service-deutsch-mdx-3523ef887f9981aeeac7.js.map