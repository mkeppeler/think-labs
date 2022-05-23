(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("NmYn"),i=n.n(r),l=n("Wbzz"),b=n("Xrax"),c=n("k4MR"),s=n("TSYQ"),d=n.n(s),u=n("QH2O"),m=n.n(u),p=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},n)))))},h=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,r=o.baseUrl,i=o.subDirectory,b=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},j=n("FCXl"),x=n("dI71"),f=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),r=n===o,b=new RegExp(o+"/?(#.*)?$"),c=a.replace(b,n);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(o.a.Component),T=n("MjG9"),N=n("CzIb"),y=n("Asxa"),w=n("OIbQ"),k=n.n(w),z=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(y.c,{className:k.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,h=s.title,x=s.theme,f=s.description,y=s.keywords,w=s.date,k=Object(N.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=P?a.pathname.replace(P,""):a.pathname,D=m?I.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",E=x||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:E,pageTitle:h,pageDescription:f,pageKeywords:y,titleType:u},Object(p.b)(g,{title:o?Object(p.b)(o,null):h,label:"label",tabs:m,theme:E}),m&&Object(p.b)(v,{title:h,slug:I,tabs:m,currentTab:D}),Object(p.b)(T.a,{padded:!0},n,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(z,{date:w})),Object(p.b)(j.a,{pageContext:t,location:a,slug:I,tabs:m,currentTab:D}),Object(p.b)(b.a,null))}},"5gJe":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return j}));var a=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("013z"),l=(n("qKvR"),["components"]),b={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("PageDescription"),d=c("InlineNotification"),u=c("Accordion"),m=c("AccordionItem"),p=c("Tabs"),g=c("Tab"),h={_frontmatter:b},O=i.a;function j(e){var t=e.components,n=Object(o.a)(e,l);return Object(r.b)(O,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"This is an optional section, you will completly remove the agent from the IBM Edge Application Manager Exchange and from your device.")),Object(r.b)("h2",null,"Remove the Agent from the Exchange"),Object(r.b)("p",null,"The following command should give you a list of your devices"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"hzn exchange node list\n")),Object(r.b)("p",null,"To remove your device from the exchange"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Using hzn unregister")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"hzn unregister -rDf\n")),Object(r.b)(d,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," the ",Object(r.b)("inlineCode",{parentName:"p"},"-r")," flag removes this node resource from the Horizon exchange (because you no longer want to use this node with Horizon), the -D flag removes all the previous registration information, the ",Object(r.b)("inlineCode",{parentName:"p"},"-f")," forces to skip the ‘are you sure?’ prompt. ")),Object(r.b)(d,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning:")," Do not use the -D flag on a registered device.")),Object(r.b)(u,{mdxType:"Accordion"},Object(r.b)(m,{title:"hzn unregister -rDf output",mdxType:"AccordionItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ hzn unregister -rDf\nBacking up eventlogs...\nSaved eventlog into file /tmp/eventlogs_bkp_2021-05-06T09:35:29Z.txt\nThe node is not registered.\nStarting external deep clean ...\nDeleting local horizon DB...\nDeleting service containers...\nStarting horizon...\n")))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Using hzn exchange")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"hzn exchange node remove <your-device>\n")),Object(r.b)(d,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning:")," Do not use the above command on a registered device.")),Object(r.b)("h2",null,"Uninstalling the horizon agent and cli from your device"),Object(r.b)("p",null,"Stop the horizon agent by issuing"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"systemctl stop horizon\n")),Object(r.b)("p",null,"Uninstall the packages with the following command"),Object(r.b)(p,{mdxType:"Tabs"},Object(r.b)(g,{label:"RHEL",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo yum remove --purge horizon horizon-cli\n"))),Object(r.b)(g,{label:"Raspian/Ubuntu",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get remove --purge horizon horizon-cli\n"))),Object(r.b)(g,{label:"macOS",mdxType:"Tab"},Object(r.b)("p",null,"With the following command you remove the horizion cli from your Mac "),Object(r.b)("p",null,"Check the installation directory"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo pkgutil --pkg-info com.github.open-horizon.pkg.horizon-cli\n")),Object(r.b)("p",null,"Remove the files the installation directory (/Users/Shared/horizon-cli)"),Object(r.b)("p",null,"Remove the pkg"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo pkgutil --forget com.github.open-horizon.pkg.horizon-cli\n")))))}j.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-edge-lab-uninstall-english-mdx-725388efd2e090090506.js.map