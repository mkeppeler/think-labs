(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("NmYn"),b=n.n(r),i=n("Wbzz"),c=n("Xrax"),l=n("k4MR"),s=n("TSYQ"),u=n.n(s),p=n("QH2O"),d=n.n(p),m=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(m.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===a,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},n)))))},h=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,r=o.baseUrl,b=o.subDirectory,c=r+"/edit/"+o.branch+b+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},O=n("FCXl"),x=n("dI71"),f=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=b()(e,{lower:!0,strict:!0}),r=n===o,c=new RegExp(o+"/?(#.*)?$"),l=a.replace(c,n);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(i.Link,{className:f.link,to:""+l},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},r))))))},t}(o.a.Component),T=n("MjG9"),N=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,p=t.titleType,d=s.tabs,h=s.title,x=s.theme,f=s.description,y=s.keywords,k=Object(N.a)().interiorTheme,w=Object(i.useStaticQuery)("2456312558").site.pathPrefix,z=w?a.pathname.replace(w,""):a.pathname,P=d?z.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",I=x||k;return Object(m.b)(l.a,{tabs:d,homepage:!1,theme:I,pageTitle:h,pageDescription:f,pageKeywords:y,titleType:p},Object(m.b)(g,{title:o?Object(m.b)(o,null):h,label:"label",tabs:d,theme:I}),d&&Object(m.b)(v,{title:h,slug:z,tabs:d,currentTab:P}),Object(m.b)(T.a,{padded:!0},n,Object(m.b)(j,{relativePagePath:u})),Object(m.b)(O.a,{pageContext:t,location:a,slug:z,tabs:d,currentTab:P}),Object(m.b)(c.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},eYF8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return j}));var a=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),b=n("013z"),i=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=c("PageDescription"),s=c("InlineNotification"),u=c("Accordion"),p=c("AccordionItem"),d=c("Tabs"),m=c("Tab"),g={_frontmatter:i},h=b.a;function j(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(h,Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"This is an optional section, you will cmpletly remove the agent from the IBM Edge Application Manager Exchange and from your device.")),Object(r.b)("h2",null,"Remove the Agent from the Exchange"),Object(r.b)("p",null,"The following command should give you a list of your devices"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"hzn exchange node list\n")),Object(r.b)("p",null,"To remove your device from the exchange"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Using hzn unregister")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"hzn unregister -rDf\n")),Object(r.b)(s,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," the ",Object(r.b)("inlineCode",{parentName:"p"},"-r")," flag removes this node resource from the Horizon exchange (because you no longer want to use this node with Horizon), the -D flag removes all the previous registration information, the ",Object(r.b)("inlineCode",{parentName:"p"},"-f")," forces to skip the ‘are you sure?’ prompt. ")),Object(r.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning:")," Do not use the -D flag on a registered device.")),Object(r.b)(u,{mdxType:"Accordion"},Object(r.b)(p,{title:"hzn unregister -rDf output",mdxType:"AccordionItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ hzn unregister -rDf\nBacking up eventlogs...\nSaved eventlog into file /tmp/eventlogs_bkp_2021-05-06T09:35:29Z.txt\nThe node is not registered.\nStarting external deep clean ...\nDeleting local horizon DB...\nDeleting service containers...\nStarting horizon...\n")))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Using hzn exchange")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"hzn exchange node remove <your-device>\n")),Object(r.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning:")," Do not use the above command on a registered device.")),Object(r.b)("h2",null,"Uninstalling the horizon agent and cli from your device"),Object(r.b)("p",null,"Stop the horizon agent by issuing"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"systemctl stop horizon\n")),Object(r.b)("p",null,"Uninstall the packages with the following command"),Object(r.b)(d,{mdxType:"Tabs"},Object(r.b)(m,{label:"RHEL",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum remove --purge horizon horizon-cli\n"))),Object(r.b)(m,{label:"Raspian/Ubuntu",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get remove --purge horizon horizon-cli\n"))),Object(r.b)(m,{label:"macOS",mdxType:"Tab"},Object(r.b)("p",null,"With the following command you remove the horizion cli from your Mac "),Object(r.b)("p",null,"Check the installation directory"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo pkgutil --pkg-info com.github.open-horizon.pkg.horizon-cli\n")),Object(r.b)("p",null,"Remove the files the installation directory (/Users/Shared/horizon-cli)"),Object(r.b)("p",null,"Remove the pkg"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo pkgutil --forget com.github.open-horizon.pkg.horizon-cli\n")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-lab-edge-lab-uninstall-espanol-mdx-26654c2aac2fd04262e3.js.map