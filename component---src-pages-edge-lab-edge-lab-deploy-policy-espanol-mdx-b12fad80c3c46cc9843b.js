(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,a,t){"use strict";var o=t("q1tI"),i=t.n(o),n=t("NmYn"),r=t.n(n),l=t("Wbzz"),c=t("Xrax"),s=t("k4MR"),d=t("TSYQ"),p=t.n(d),b=t("QH2O"),u=t.n(b),m=t("qKvR"),g=function(e){var a,t=e.title,o=e.theme,i=e.tabs,n=void 0===i?[]:i;return Object(m.b)("div",{className:p()(u.a.pageHeader,(a={},a[u.a.withTabs]=n.length,a[u.a.darkMode]="dark"===o,a))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},t)))))},j=t("BAC9"),O=function(e){var a=e.relativePagePath,t=e.repository,o=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||o,n=i.baseUrl,r=i.subDirectory,c=n+"/edit/"+i.branch+r+"/src/pages"+a;return n?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},v=t("FCXl"),h=t("dI71"),f=t("I8xM"),N=function(e){function a(){return e.apply(this,arguments)||this}return Object(h.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var a,t=r()(e,{lower:!0,strict:!0}),n=t===i,c=new RegExp(i+"/?(#.*)?$"),s=o.replace(c,t);return Object(m.b)("li",{key:e,className:p()((a={},a[f.selectedItem]=n,a),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+s},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":a},Object(m.b)("ul",{className:f.list},n))))))},a}(i.a.Component),A=t("MjG9"),y=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,o=e.location,i=e.Title,n=a.frontmatter,d=void 0===n?{}:n,p=a.relativePagePath,b=a.titleType,u=d.tabs,j=d.title,h=d.theme,f=d.description,x=d.keywords,E=Object(y.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,w=P?o.pathname.replace(P,""):o.pathname,I=u?w.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",z=h||E;return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:z,pageTitle:j,pageDescription:f,pageKeywords:x,titleType:b},Object(m.b)(g,{title:i?Object(m.b)(i,null):j,label:"label",tabs:u,theme:z}),u&&Object(m.b)(N,{title:j,slug:w,tabs:u,currentTab:I}),Object(m.b)(A.a,{padded:!0},t,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(v.a,{pageContext:a,location:o,slug:w,tabs:u,currentTab:I}),Object(m.b)(c.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qcQC:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return u}));var o=t("wx14"),i=t("zLVn"),n=(t("q1tI"),t("7ljp")),r=t("013z"),l=(t("qKvR"),{}),c=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)}},s=c("PageDescription"),d=c("InlineNotification"),p={_frontmatter:l},b=r.a;function u(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.b)(b,Object(o.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"En esta sección desplegará el servicio de borde que creó en un paso anterior en su entorno de borde.")),Object(n.b)("h2",null,"Despliegue de un servicio de borde con una política de despliegue"),Object(n.b)("h3",null,"PCondiciones previas para desplegar su propio servicio"),Object(n.b)("p",null,"  Si aún no lo ha hecho, complete la sección ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"../service/espanol"}),"Crear un servicio de borde")),Object(n.b)("h3",null,"Uso del servicio de borde con política de despliegue"),Object(n.b)("p",null,"El mecanismo de políticas de Horizonte ofrece una alternativa al uso de patronesde despliegue. Las políticas proporcionan un control mucho más fino sobre la ubicación del despliegue de los servicios de borde. También proporciona una mayor separación de preocupaciones, permitiendo a los propietarios de los Nodos Edge, a los desarrolladores del código del Servicio y a los propietarios de la Empresa articular independientemente sus propias Políticas. Por lo tanto, existen tres tipos de políticas Horizon:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Política de nodo (proporcionada en el momento del registro por el propietario del nodo)")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Política de Servicio (puede aplicarse a un Servicio publicado en la Bolsa)")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Política de despliegue (que corresponde aproximadamente a un patrón de despliegue)"))),Object(n.b)("h2",null,"Política de nodo"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Como alternativa a la especificación de un Patrón de Despliegue al registrar su Nodo Edge, puede registrarse con una Política de Nodo.")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Obtenga el archivo de política de nodo helloworld requerido:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"wget https://raw.githubusercontent.com/open-horizon/examples/master/edge/services/helloworld/horizon/node.policy.json\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Abajo está el archivo node.policy.json que obtuviste en el primer paso:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n  "properties": [\n    { "name": "openhorizon.example", "value": "hello-$USER_ID" }\n  ],\n  "constraints": [\n  ]\n}\n')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Proporciona valores para una sola propiedad (openhorizon.example), cambie el valor a ",Object(n.b)("strong",{parentName:"li"},"hello-$USER_ID")," esto debería restringir los servicios que se despliegan a este nodo de borde a su servicio hello.")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Registre su política de nodo con esta política")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"hzn register --policy node.policy.json\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Cuando se complete el registro, utilice el siguiente comando para revisar la política de nodo:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"hzn policy list\n")),Object(n.b)(d,{kind:"info",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Observe")," que, además de las tres propiedades indicadas en el archivo node_policy.json, Horizon ha añadido algunas más (openhorizon.cpu, openhorizon.arch y openhorizon.memory). Horizon proporciona esta información adicional de forma automática y estas propiedades pueden utilizarse en cualquiera de sus restricciones de política.")),Object(n.b)("p",null,"Su dispositivo debería ser ahora también visible en ",Object(n.b)("strong",{parentName:"p"},"Active sin servicios")," en la interfaz de usuario de IBM Edge Application Manager\n",Object(n.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACUElEQVQ4y5WTy24TMRSG/SqIy3uwYMEjAOqaDStWSMACseANQpo2VZewASpEQaByqdR2wyKBQlWJClFxS0hmJnOzPfb45xx7UgU1Eqqlb3w8tv9zfHws2p0ulrqr6K6sYml5Ba37i2i1Oyem3VnGIiFGORDlBlGmME4V2RVS5ZBpeNj2SIfSAhUAPQOPaQqpIZt68ev3EMM/EeI4QTQeY5IkGI9GmEzCOIljsid+HPr5JEmYF0lagCmlhtYnQymK0Wk82FJYWAQ6GwpCyhKyLJGmqUdKiaqqjmMMDDH7T2vuNdLCoNV9iK+HA4giL7yItfYYddOzUFEUyMghC9V1/c8a5yyi0RCKghM5LVSa0wsfhaRj8Aa2S3LknPPjjNaxKP2Apjne49eRoFTK7zfGQmR5DhblKFRFVwWLabNNJDw3FSwpPbJJAc/N2pxXwXnj2+Fjkw98Gjj09w7wZX8POTnj5iPMMl8BJfXOGMxr7Fi4o6HDo8/ArZcGV69dx/kLF9Hr9UMqmkswdNyENsVkR0Q8A895QWODZK4dbm8EYagR7j37if73kFvFEVF+NqMxTm29xZntd56zxGni3M4mPmYpHwXC1u4owjuvHd7/CFV/g8QH4cRB0NZ4OqSyWH8M8fwJsRZYJ/vFGnaSmAQdRBOT/x4mwN03wM1XDtvfav+P/VVe0OJDOsGl3R6uzHCZWNjt46As/BqRFiVVvIKuLG20/nVaKlbU4TXwhTgi1Qr/az6HMqM6LKWPQmlDwuEFKN1cRPM6uO4MlwaN5zEtm78nGVnnQBwMZAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-node-active",title:"IEAM-node-active",src:"/think-labs/static/e8eab757d4e82d359853301c840cf849/3cbba/IEAM-node-active.png",srcSet:["/think-labs/static/e8eab757d4e82d359853301c840cf849/7fc1e/IEAM-node-active.png 288w","/think-labs/static/e8eab757d4e82d359853301c840cf849/a5df1/IEAM-node-active.png 576w","/think-labs/static/e8eab757d4e82d359853301c840cf849/3cbba/IEAM-node-active.png 1152w","/think-labs/static/e8eab757d4e82d359853301c840cf849/0b124/IEAM-node-active.png 1728w","/think-labs/static/e8eab757d4e82d359853301c840cf849/f8b1a/IEAM-node-active.png 2246w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("h2",null,"Política de servicio"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Al igual que los otros dos tipos de Políticas, la Política de Servicio contiene un conjunto de propiedades y un conjunto de restricciones. Las propiedades de una Política de Servicio pueden indicar características del código del Servicio que los autores de la Política de Nodo o los autores de la Política de Despliegue pueden encontrar relevantes. Las restricciones de una Política de Servicio pueden utilizarse para restringir dónde puede ejecutarse este Servicio. El desarrollador del Servicio podría, por ejemplo, afirmar que este Servicio requiere una configuración de hardware particular como restricciones de CPU/GPU,\nrestricciones de memoria, sensores específicos, actuadores u otros dispositivos periféricos requeridos, etc."),Object(n.b)("li",{parentName:"ul"},"A continuación se muestra el archivo ",Object(n.b)("strong",{parentName:"li"},"service.policy.json")," que se creó como parte de la creación de su servicio en el directorio horizonte:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n    "properties": [\n        {\n            "name": "prop1",\n            "value": "value1"\n        }\n    ],\n    "constraints": []\n}\n')),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Vea la política de servicio publicada adjunta a su servicio:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"hzn exchange service listpolicy ${HZN_ORG_ID}/hello-${USER_ID}_0.0.1_$(hzn architecture)\n")),Object(n.b)(d,{kind:"info",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tenga")," que Horizon ha vuelto a añadir automáticamente algunas propiedades adicionales a su política. Estos valores de propiedad generados pueden utilizarseen las restricciones de las políticas de nodo y las políticas de despliegue.")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Cree un archivo ",Object(n.b)("strong",{parentName:"li"},"service.policy.json")," con el siguiente contenido")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n  "properties": [\n  ],\n  "constraints": [\n    "openhorizon.memory >= 100"\n  ]\n}\n')),Object(n.b)(d,{kind:"info",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tenga")," en cuenta que esta simple Política de Servicio no proporciona ninguna propiedad, pero tiene una restricción. Esta restricción de ejemplo es una que un desarrollador de Servicios podría añadir, indicando que su Servicio sólo debe ejecutarse en nodos de borde con 100 MB o más de memoria.")),Object(n.b)(d,{kind:"info",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tenga")," que Horizon ha vuelto a añadir automáticamente algunas propiedades adicionales a su política. Estos valores de propiedad generados pueden utilizarseen las restricciones de las políticas de nodo y las políticas de despliegue.")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Actualice el service.policies adjunto a su servicio")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"hzn exchange service addpolicy -f service.policy.json ${HZN_ORG_ID}/hello-${USER_ID}_0.0.1_$(hzn architecture)\n")),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Vea las actualizaciones publicadas de la política de servicio adjunta a su servicio:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"hzn exchange service listpolicy ${HZN_ORG_ID}/hello-${USER_ID}_0.0.1_$(hzn architecture)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Ahora que ha configurado la política para su nodo de borde y que la política de servicio publicada está en el intercambio, podemos pasar al paso final de definir una política de despliegue para unirlos todos y hacer que el software se despliegue automáticamente en su nodo de borde.")),Object(n.b)("h2",null,"Política de Despliegue"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"La Política de Despliegue es lo que une los Nodos Edge, los Servicios Publicadosy las Políticas definidas para cada uno de ellos, haciéndola más o menos análogaa los Patrones de Despliegue con los que has trabajado previamente."),Object(n.b)("li",{parentName:"ul"},"La Política de Despliegue, al igual que los otros dos tipos de Políticas, contiene un conjunto de propiedades y un conjunto de restricciones, pero también contiene otras cosas. Por ejemplo, identifica explícitamente el Servicio que hará que se despliegue en los Nodos Edge si la negociación tiene éxito, además de losvalores de las variables de configuración, realizando la función equivalente a la cláusula -f horizon/userinput.json de un comando hzn register … del Patrón de Despliegue. El enfoque de la Política de Despliegue para los valores de configuración es más potente porque esta operación se puede realizar de forma centralizada (no es necesario conectarse directamente al Edge Node).Deployment Policy, like the other two Policy types, contains a set of properties and a set of constraints, but it contains other things as well. For example, it explicitly identifies the Service it will cause to be deployed onto Edge Nodes if negotiation is successful, in addition to configuration variable values, performing the equivalent function to the -f horizon/userinput.json clause of a Deployment Pattern hzn register … command. The Deployment Policy approach for configuration values is more powerful because this operation can be performed centrally (no need to connect directly to the Edge Node).")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Cree un archivo ",Object(n.b)("strong",{parentName:"li"},"deployment.policy.json")," con el contenido siguiente para su servicio:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n  "label": "$SERVICE_NAME Deployment Policy",\n  "description": "A super-simple sample Horizon Deployment Policy",\n  "service": {\n    "name": "$SERVICE_NAME",\n    "org": "$HZN_ORG_ID",\n    "arch": "*",\n    "serviceVersions": [\n      {\n        "version": "$SERVICE_VERSION",\n        "priority":{}\n      }\n    ]\n  },\n  "properties": [\n  ],\n  "constraints": [\n    "openhorizon.example == hello-$USER_ID"\n  ],\n  "userInput": [\n    {\n      "serviceOrgid": "$HZN_ORG_ID",\n      "serviceUrl": "$SERVICE_NAME",\n      "serviceVersionRange": "[0.0.0,INFINITY)",\n      "inputs": [\n        {\n          "name": "HW_WHO",\n          "value": "Valued Customer"\n        }\n      ]\n    }\n  ]\n}\n')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Este sencillo ejemplo de Política de Despliegue no proporciona ninguna propiedad, pero tiene un valor de restricción que se satisface con las propiedades establecidas en el archivo node.policy.json, por lo que esta Política de Despliegue debería desplegar con éxito nuestro Servicio en el Nodo Edge."),Object(n.b)("li",{parentName:"ul"},"Al final, la sección userInput tiene el mismo propósito que los archivos horizon/userinput.json proporcionados para otros ejemplos si los servicios dados los requieren. En este caso, el servicio helloworld define sólo una variable de configuración, HW_WHO, y la sección userInput proporciona aquí un valor para HW_WHO (es decir, cliente valorado).")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Publique y vea su política de despliegue en Horizon Exchange:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"hzn exchange deployment addpolicy -f deployment.policy.json ${HZN_ORG_ID}/policy-hello-${USER_ID}_0.0.1\nhzn exchange deployment listpolicy ${HZN_ORG_ID}/policy-hello-${USER_ID}_0.0.1\n")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"En este momento su dispositivo de borde debería haber formado un acuerdo con uno de los bots de acuerdos de Horizon (esto suele tardar unos 15 segundos). Consulte repetidamente los acuerdos de este dispositivo hasta que se completen los campos agreement_finalized_time y agreement_execution_start_time:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"hzn agreement list\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Una vez realizado el acuerdo, enumera el contenedor docker del servicio edge que se ha iniciado como resultado:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"sudo docker ps\n")),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Vea la salida del servicio ibm.helloworld:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"sudo hzn service log -f hello-$USER_ID\n")),Object(n.b)(d,{kind:"info",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Nota:")," Pulse Ctrl C para detener la salida del comando.")),Object(n.b)("p",null,"Vuelve a mirar en la interfaz de usuario de IBM Edge Application Manager, tu dispositivo debería mostrar el estado ",Object(n.b)("strong",{parentName:"p"},"Activo con servicios"),"\n",Object(n.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACSElEQVQ4y5VT22oUQRDtXxEvn+FTfkIlryKIBsRHv2Pd3WRDXgR90iBEX4QYSCIouJqwxjUSlGBisjM703Prnksfq2pmYYwBScGhq6a6TlVX1ahuf4DFwQoGyytYXFpG53EPnW7/wuj2l9AjKC8G/LiAHxl42pCeQxuHyELAuiBzSEsgB2BbYJtc0AXpdKofh6c4PPJxfBrC8zyEYQBvMpHTJzuYTkkPxa7P8xEEtV8FOgEjzSysvRiMoRqdxdNNg/ke0H9joLIsRZamiLSmDBop6UWeIz+LokBBaH+zlk8LnRToDJ7h4OdvqCROkGUZyrL8B1VzMlGSJJKUiaqq+uuOcyX8yQkMFadiumgstxdSRWqMBIhOiZxzYkd0j0npAyz5OEbuEWFGMSxFUUJFcQwm5SoMoS1lUwn7ZoTckqxpAfvaOvdVaeldKM+mlBjqEMPxGOPRCHEUCbFUSHpIk0zpdGcSz4QTK9f68OT4F+6NdnB7YQHX5+bwcTisW9EMoaDnBhQ0Jd0nTFtgnxDmlJ0lIuP+11HNHMV49P4dPngTMaUV1J8N38OlzXVc2XoruEq4TLi2vYGdSMsLVdEQsjwYf8FWMEVA2e7s7+GoGZYQlhVentBarD2HevWCsFpjjfTXq9imOFQOigNmzz6gsT/8toe7e7tYb6qryJsLYYnP1N8bu0PcauEmYX73E76nidxROklp4w2tAk2Tf0ZHkzX1E2er4QjaGvxPpIdZRHuYZlKF4e0nGFtDBtH8HUxe8GqQfR5ma/MHTWxYyaT7/ioAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IEAM-node-active-service",title:"IEAM-node-active-service",src:"/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/3cbba/IEAM-node-active-service.png",srcSet:["/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/7fc1e/IEAM-node-active-service.png 288w","/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/a5df1/IEAM-node-active-service.png 576w","/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/3cbba/IEAM-node-active-service.png 1152w","/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/0b124/IEAM-node-active-service.png 1728w","/think-labs/static/6f697b06db56db61071fe0f48a9eaf53/f8b1a/IEAM-node-active-service.png 2246w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("ol",{start:5},Object(n.b)("li",{parentName:"ol"},"Desregistre su nodo Edge:")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"hzn unregister -f\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-lab-edge-lab-deploy-policy-espanol-mdx-b12fad80c3c46cc9843b.js.map