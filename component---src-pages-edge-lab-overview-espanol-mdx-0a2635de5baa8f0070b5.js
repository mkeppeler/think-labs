(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),s=a("NmYn"),i=a.n(s),r=a("Wbzz"),d=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),b=a.n(l),u=a("QH2O"),p=a.n(u),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,s=void 0===o?[]:o;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=s.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,s=o.baseUrl,i=o.subDirectory,d=s+"/edit/"+o.branch+i+"/src/pages"+t;return s?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:d},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),v=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===o,d=new RegExp(o+"/?(#.*)?$"),c=n.replace(d,a);return Object(m.b)("li",{key:e,className:b()((t={},t[v.selectedItem]=s,t),v.listItem)},Object(m.b)(r.Link,{className:v.link,to:""+c},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:v.list},s))))))},t}(o.a.Component),T=a("MjG9"),E=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,s=t.frontmatter,l=void 0===s?{}:s,b=t.relativePagePath,u=t.titleType,p=l.tabs,j=l.title,f=l.theme,v=l.description,w=l.keywords,P=Object(E.a)().interiorTheme,y=Object(r.useStaticQuery)("2456312558").site.pathPrefix,I=y?n.pathname.replace(y,""):n.pathname,k=p?I.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",M=f||P;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:M,pageTitle:j,pageDescription:v,pageKeywords:w,titleType:u},Object(m.b)(g,{title:o?Object(m.b)(o,null):j,label:"label",tabs:p,theme:M}),p&&Object(m.b)(h,{title:j,slug:I,tabs:p,currentTab:k}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(x,{relativePagePath:b})),Object(m.b)(O.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:k}),Object(m.b)(d.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},HdK9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return x}));var n=a("wx14"),o=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("013z"),r=a("p8Qk"),d=a.n(r),c=a("QXEG"),l=a.n(c),b=(a("qKvR"),{}),u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},p=u("PageDescription"),m=u("Video"),g={_frontmatter:b},j=i.a;function x(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)(j,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(p,{mdxType:"PageDescription"},Object(s.b)("p",null,"Esta sección proporciona una visión general de IBM Edge Application Manager (IEAM).")),Object(s.b)("h2",null,"Capacidades de IBM Edge Application Manager (IEAM)"),Object(s.b)("p",null,"IEAM le proporciona funciones de Edge Computing para ayudarle a gestionar y desplegar cargas de trabajo desde un clúster de centro de gestión a dispositivos de borde e instancias remotas de OpenShift Container Platform u otros clústeres basados en Kubernetes."),Object(s.b)("h2",null,"Arquitectura"),Object(s.b)("p",null,"El objetivo de la computación de borde es aprovechar las disciplinas que se han creado para la computación en nube híbrida para apoyar las operaciones remotas de las instalaciones de computación de borde. IEAM está diseñado para ese fin."),Object(s.b)("p",null,"La implementación de IEAM incluye el hub de gestión que se ejecuta en una instancia de OpenShift Container Platform. El centro de gestión es el lugar donde se realiza la gestión de todos sus nodos de borde remotos (dispositivos de borde y clústeres de borde)."),Object(s.b)("p",null,"Estos nodos de borde pueden instalarse en ubicaciones remotas dentro de las instalaciones para hacer que las cargas de trabajo de sus aplicaciones sean locales en el lugar donde se producen físicamente las operaciones críticas de su negocio, como en sus fábricas, almacenes, puntos de venta, centros de distribución, etc."),Object(s.b)("p",null,"El siguiente diagrama muestra la topología de alto nivel de una configuración típica de edge computing:\n",Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"/think-labs/3c16f49e4c5edb239c135f7c7dfb4836/IEAM_overview.svg",alt:"IEAM Overview"}))),Object(s.b)("p",null,"El hub de gestión IEAM está diseñado específicamente para la gestión de nodos edge con el fin de minimizar los riesgos de despliegue y gestionar el ciclo de vidadel software de servicio en los nodos edge de forma totalmente autónoma. Un instalador de Cloud instala y gestiona los componentes del hub de gestión IEAM. Los desarrolladores de software desarrollan y publican servicios de borde en el hub de gestión. Los administradores definen las políticas de despliegue que controlan dónde se despliegan los servicios de borde. IEAM se encarga de todo lodemás."),Object(s.b)("h2",null,"Video"),Object(s.b)(m,{src:d.a,poster:l.a,mdxType:"Video"}))}x.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-edge-lab-overview-espanol-mdx-0a2635de5baa8f0070b5.js.map