(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),s=a.n(i),o=a("NmYn"),n=a.n(o),r=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),p=a.n(l),d=a("QH2O"),m=a.n(d),g=a("qKvR"),A=function(e){var t,a=e.title,i=e.theme,s=e.tabs,o=void 0===s?[]:s;return Object(g.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===i,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||i,o=s.baseUrl,n=s.subDirectory,b=o+"/edit/"+s.branch+n+"/src/pages"+t;return o?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:b},"Edit this page on GitHub"))):null},y=a("FCXl"),w=a("dI71"),f=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),o=a===s,b=new RegExp(s+"/?(#.*)?$"),c=i.replace(b,a);return Object(g.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(g.b)(r.Link,{className:f.link,to:""+c},e))}));return Object(g.b)("div",{className:f.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:f.list},o))))))},t}(s.a.Component),k=a("MjG9"),O=a("CzIb"),j=a("Asxa"),v=a("OIbQ"),I=a.n(v),N=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(j.c,{className:I.a.row},Object(g.b)(j.a,null,Object(g.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,s=e.Title,o=t.frontmatter,l=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=l.tabs,u=l.title,w=l.theme,f=l.description,j=l.keywords,v=l.date,I=Object(O.a)().interiorTheme,B=Object(r.useStaticQuery)("2456312558").site.pathPrefix,R=B?i.pathname.replace(B,""):i.pathname,T=m?R.split("/").filter(Boolean).slice(-1)[0]||n()(m[0],{lower:!0}):"",S=w||I;return Object(g.b)(c.a,{tabs:m,homepage:!1,theme:S,pageTitle:u,pageDescription:f,pageKeywords:j,titleType:d},Object(g.b)(A,{title:s?Object(g.b)(s,null):u,label:"label",tabs:m,theme:S}),m&&Object(g.b)(x,{title:u,slug:R,tabs:m,currentTab:T}),Object(g.b)(k.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:p}),Object(g.b)(N,{date:v})),Object(g.b)(y.a,{pageContext:t,location:i,slug:R,tabs:m,currentTab:T}),Object(g.b)(b.a,null))}},"73OT":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return f}));var i=a("wx14"),s=a("zLVn"),o=(a("q1tI"),a("7ljp")),n=a("013z"),r=(a("qKvR"),["components"]),b={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=c("PageDescription"),p=c("AnchorLinks"),d=c("AnchorLink"),m=c("DoDontRow"),g=c("DoDont"),A=c("InlineNotification"),u=c("Accordion"),h=c("AccordionItem"),y={_frontmatter:b},w=n.a;function f(e){var t=e.components,a=Object(s.a)(e,r);return Object(o.b)(w,Object(i.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"PageDescription"},Object(o.b)("p",null,"This section covers the pre-requisties for the lab.")),Object(o.b)(p,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(d,{mdxType:"AnchorLink"},"Devices"),Object(o.b)(d,{mdxType:"AnchorLink"},"Supported architectures and operating systems"),Object(o.b)(d,{mdxType:"AnchorLink"},"Install Operating System"),Object(o.b)(d,{mdxType:"AnchorLink"},"Docker")),Object(o.b)("h2",null,"Devices"),Object(o.b)(m,{mdxType:"DoDontRow"},Object(o.b)(g,{aspectRatio:"1:1",captionTitle:"Raspberry PI 4",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABQBACdASoUAA4APtFUo0uoJKMhsAgBABoJZQAD4wGVeX23xBkjf/txDzuAAP71HjOKm2VcdZ4yCf6yt+2STdgzqUSbKa6ZugBFRWEewaBGCzOLBsIIf6TgruyBQHDUKZyRr2k6tU2vHPl9JkSHuvfHruAAU/f7sTmZvcjwyj5tqBHI5OVMCWr8bisgAA==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/f5ee72f2bd608b4015991d21f2e8dd0b/f74a1/raspberry-pi4.webp",srcSet:["/think-labs/static/f5ee72f2bd608b4015991d21f2e8dd0b/0eda2/raspberry-pi4.webp 288w","/think-labs/static/f5ee72f2bd608b4015991d21f2e8dd0b/460e2/raspberry-pi4.webp 576w","/think-labs/static/f5ee72f2bd608b4015991d21f2e8dd0b/f74a1/raspberry-pi4.webp 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)(g,{aspectRatio:"1:1",captionTitle:"Raspberry PI 3A+",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.97222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAAAwBACdASoUAA0APtFWo0uoJKMhsAgBABoJYwAD4zISOTTCa+3Qo6C6yAAA/vYRF6ZVlZhubw/ZO1BwipsqStexjgX5Miv0ktm+XIEbwaveWNczdbUWpPi8iI4sbiom50Zp6Su7h8UfuuiskEvavH1x2DbSrPtnCj67AIwZRF3E8Si5AAA=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/591a5a3fe47af3ab97bf09c89e72a8ce/f74a1/raspberry-pi3.webp",srcSet:["/think-labs/static/591a5a3fe47af3ab97bf09c89e72a8ce/0eda2/raspberry-pi3.webp 288w","/think-labs/static/591a5a3fe47af3ab97bf09c89e72a8ce/460e2/raspberry-pi3.webp 576w","/think-labs/static/591a5a3fe47af3ab97bf09c89e72a8ce/f74a1/raspberry-pi3.webp 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)(g,{aspectRatio:"1:1",captionTitle:"Raspberry PI 3B/3B+",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAADwAwCdASoUAAkAPtFUo0uoJKMhsAgBABoJZwAD4rnF1g/qYowSKoAAAP7rsRKnVfb5NehqGdCdtEUs0vv/KMu75hibiSWvzUsDx1tmdlu7xixuuxLQMST690GYNdalnhtZ/Tea870xZnJcBDnLSNxxPFrGEM8w6AAAAA==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/cbe63f0ca7cc32923e3a628b330c7f1c/f74a1/raspberry-pi3B.webp",srcSet:["/think-labs/static/cbe63f0ca7cc32923e3a628b330c7f1c/0eda2/raspberry-pi3B.webp 288w","/think-labs/static/cbe63f0ca7cc32923e3a628b330c7f1c/460e2/raspberry-pi3B.webp 576w","/think-labs/static/cbe63f0ca7cc32923e3a628b330c7f1c/f74a1/raspberry-pi3B.webp 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)(g,{aspectRatio:"1:1",captionTitle:"NVIDIA PI 2B",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"444px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAAAwBACdASoUAA4APtFUo0uoJKMhsAgBABoJZwAD4uouuRVF712hXi5zOsAA/vUeQGurwmgoG0Qz7Xo+SapJ925w1p3LI/E5IaMDXesJd/JuC0HjWh4pdEoANKRZAXZ1TCBmr16yRPoyo0fDw8qkjY1BF87yipHXWgzZZf1V2qKW23a9xBi8fJ0DdAim/MA/wAAAAA==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/1a41c6c1e40ae929824cb86f9a9ea680/921bf/raspberry-pi2B.webp",srcSet:["/think-labs/static/1a41c6c1e40ae929824cb86f9a9ea680/0eda2/raspberry-pi2B.webp 288w","/think-labs/static/1a41c6c1e40ae929824cb86f9a9ea680/921bf/raspberry-pi2B.webp 444w"],sizes:"(max-width: 444px) 100vw, 444px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(m,{mdxType:"DoDontRow"},Object(o.b)(g,{aspectRatio:"1:1",captionTitle:"Raspberry PI A+",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.4861111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAADQAwCdASoUAA4APtFUo0uoJKMhsAgBABoJQAB8gUG4NSE46ck/uYgA/vYQ2IVA8bkfF5E323brg8cfqBbQz4TgQ+yIw4dMfK7lnoAi62pFwx3CBUbQpRkKfnx/vwAi19cCm+niNhLj99+UO6d9sSceWH+e0T8d3bHcL9pOJ/TiAAAA')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/86182068078435582c80a6a89a51587b/f74a1/raspberry-pi1A.webp",srcSet:["/think-labs/static/86182068078435582c80a6a89a51587b/0eda2/raspberry-pi1A.webp 288w","/think-labs/static/86182068078435582c80a6a89a51587b/460e2/raspberry-pi1A.webp 576w","/think-labs/static/86182068078435582c80a6a89a51587b/f74a1/raspberry-pi1A.webp 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)(g,{aspectRatio:"1:1",captionTitle:"Raspberry PI B+",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.05555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAACQBACdASoUAA4APtFUo0uoJKMhsAgBABoJZQDE2YrI7ccbbQybPsLP/nGlDiAA/vUeQFxemThQkOzIy9NF4+8Hf3hHOIS0sAfYw19Y7t4kyuGhw9Om9QxIBj9A4jHIQm4Ze6zpePZOhlZ/d5tnogp/ZPhSVt4yVENGyI23pePQOkhGO8bou7fALyQAAA==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/cadc03191a928e75c923eae64117cdbd/f74a1/raspberry-pi1B.webp",srcSet:["/think-labs/static/cadc03191a928e75c923eae64117cdbd/0eda2/raspberry-pi1B.webp 288w","/think-labs/static/cadc03191a928e75c923eae64117cdbd/460e2/raspberry-pi1B.webp 576w","/think-labs/static/cadc03191a928e75c923eae64117cdbd/f74a1/raspberry-pi1B.webp 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)(g,{aspectRatio:"1:1",captionTitle:"Raspberry PI Zero-W/WH",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAwBACdASoUABQAPtFcpUyoJSOiMBgIAQAaCWUAAC5pq2kefXmRbxUCrgAA/vYFjKg264IzK+QPq7pDUIxD0ALRsJR5g2+CiRQioZPR14EE+WYRZY1hhvArKNHLPsbMnMmUe/uX4HNCtkjmLoptSoiPgAA=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/742fae899543756fc7976eee4af478ca/f74a1/raspberry-pi-zero.webp",srcSet:["/think-labs/static/742fae899543756fc7976eee4af478ca/0eda2/raspberry-pi-zero.webp 288w","/think-labs/static/742fae899543756fc7976eee4af478ca/460e2/raspberry-pi-zero.webp 576w","/think-labs/static/742fae899543756fc7976eee4af478ca/f74a1/raspberry-pi-zero.webp 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)(g,{aspectRatio:"1:1",captionTitle:"NVIDIA Jetson",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.29166666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAAAwBACdASoUABAAPtFUo0uoJKMhsAgBABoJaQAD4eHdFmxPkvularGnrAAA/vUeOVK5d/Z1MaEhN/Hw00mtmwUNuibTlre46Zq3+X/wFCDtzAGSn+A80q3AHokh2INWZ9Qudswo3/g5xm/0ozyuAMLNy7Cbn7EtMpjA5k+TPruATj3kGekKmKh8pfaGEVfUoGXF4udnYwAAAA==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/4978a55ab605a33a2e85cb03d5359ee3/f74a1/nvidia-jetson.webp",srcSet:["/think-labs/static/4978a55ab605a33a2e85cb03d5359ee3/0eda2/nvidia-jetson.webp 288w","/think-labs/static/4978a55ab605a33a2e85cb03d5359ee3/460e2/nvidia-jetson.webp 576w","/think-labs/static/4978a55ab605a33a2e85cb03d5359ee3/f74a1/nvidia-jetson.webp 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(m,{mdxType:"DoDontRow"},Object(o.b)(g,{aspectRatio:"1:1",type:"dont",captionTitle:"Raspberry PI Pico",colMd:2,colLg:2,mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"640px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwBACdASoUABAAPtFUo0uoJKMhsAgBABoJaACsABt0vQjJB8iVoTVm/gAA/vJyHtfp4zuatFchadpwWfZjO2YldeOT5T7tlH7gXDTPzvb7S48r5VvoromdAVH4T6qRVVchd/wCBk9NJGZYRhJDPygtuBqgxfcgAAA=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/think-labs/static/5043544e3ded70b67f62b3d17c390324/f74a1/raspberry-pi-pico.webp",srcSet:["/think-labs/static/5043544e3ded70b67f62b3d17c390324/0eda2/raspberry-pi-pico.webp 288w","/think-labs/static/5043544e3ded70b67f62b3d17c390324/460e2/raspberry-pi-pico.webp 576w","/think-labs/static/5043544e3ded70b67f62b3d17c390324/f74a1/raspberry-pi-pico.webp 640w"],sizes:"(max-width: 640px) 100vw, 640px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(A,{kind:"info",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Info:")," If you do not hat a supported device at hand, please contact one of the instructors who will provide you with a virtual device for the lab.")),Object(o.b)("h2",null,"Supported architectures and operating systems"),Object(o.b)("p",null,"IBM Edge Application Manager supports the following operating systems running on your raspberry"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Linux on ARM (32-bit), for example Raspberry Pi, running Raspbian buster or stretch"),Object(o.b)("li",{parentName:"ul"},"Linux on ARM (64-bit), for example NVIDIA Jetson Nano, TX1, or TX2, running Ubuntu 18.x (bionic)")),Object(o.b)("p",null,"MicroSD flash card (32 GB preferred)"),Object(o.b)("h2",null,"Install Operating System"),Object(o.b)("p",null,"If you do not have a supported OS on your device, the easiest way to install and configure the OS for the raspberry is to use ",Object(o.b)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"Raspberry Pi Imager")),Object(o.b)("p",null,"1) Start the Raspberry PI Imager\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"680px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.97222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACdElEQVQ4y3WR30sUURTH70NGL1lQmLCaPZVC70pEalaam0FlPUYPUQSB9A/UQ0WQRa9lILnlQ4U/shTcdlnZ2V2VoAfRUGhrVXR1WXV3Ztz13nHn27nXXdvUBj5zv3PO95w5c4bxyBRPx+fBk7otkklIOGEZBhILUUSmppCYW8TyTBRz4V/QYzFYuq484i8btbrOGRcWuBA25xxbsSwLwhII/tQUUlvSv4OXUD2YICEEh6CmBHKsra2pYmPVxN2mWrRcrIOZWt3M5Xvzam2W/xbBVWOl7UwG8jINE63l9XhR0UDaULEM5XjWK7ZMyraNLiejT52ORBCjfRmmie9aEBOj35CmXOR3BLMzs1gnj/RurWcis45N7Iw6bZrCO+SDq/MdXra9QvtbFz70dKPnUy/cXg9CoyPKI9bzarOw1FIC6ZUk0gkdUueeuW7CXFpBMhaHsRhXcSO+TH/XUKQol1pO/EOaYKGKq9AOO+EvbUTo+DWCnssuwF/SiMCRJviL6xE6dhnBo5eUlt5QRTOGy5sxkkXqEBEsvwLm23sKE7ceIe4ZRfT9IKIf3Yi7hzF57zl+3HmChS4v5jsHMNfZT7mvmGxpRX/hSXwuPo2eohr0En1FtXAfOgONXsiGDtRh7Pp9zL7pQ/hpB8KtHZhp78X47ccYu/EA06+7EX7morgL021dGL/5EIMHazFQcg5fHGfRn8XjaECgxAmmlTpt3/4aeHZV2t49JyDxFFTCV1gNFS+owmZ8dxV8+6oRKHUiSCvJww7Q6Xectxnd5F5sua9AWRbScleSneKyZgdsjZoyutm5wH+M29A2poHmaFQ610OefwChciUrWzLUpwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Raspberry PI Imager",title:"Raspberry PI Imager",src:"/think-labs/static/82e922d180736055661b2b9df176700c/a5a26/raspberry-pi-imager.png",srcSet:["/think-labs/static/82e922d180736055661b2b9df176700c/7fc1e/raspberry-pi-imager.png 288w","/think-labs/static/82e922d180736055661b2b9df176700c/a5df1/raspberry-pi-imager.png 576w","/think-labs/static/82e922d180736055661b2b9df176700c/a5a26/raspberry-pi-imager.png 680w"],sizes:"(max-width: 680px) 100vw, 680px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"2) Choose the OS of your choice (Raspberry PI OS Lite 32-Bit recommented)"),Object(o.b)("p",null,"3) Choose the MicroSD"),Object(o.b)("p",null,"4) Press CTRL-Shift-X to enter advanced settings"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Set your hostname"),Object(o.b)("li",{parentName:"ul"},"Enable SSH"),Object(o.b)("li",{parentName:"ul"},"Configure WiFi"),Object(o.b)("li",{parentName:"ul"},"Set locale settings\n",Object(o.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"504px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"197.22222222222223%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAnCAIAAACABf9ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAACzUlEQVRIx5VVW5KbMBD0CVM5Q3KE5AR7n73C1v6nKqlsPpLd/XElC0aAjHgJgQCnR2N7MQ8/prAkg1oz6mmNVl3XhaGQcYwnjqIodl0sy6IInYnNJgyjIAjSNNvtdphvjEGL8arv+yRJUnzJstR1aaoSpYqi2CZbGC0oaWV8BExrjZlN0wC4wgIYVWS6Nqaua/zFS3xDszu13hn7t9YSuChLeNhsAjgRQiBIjmoEG/3dgxGJSpLYGZBwnue5UgrhYZW2bbGF6Vrv4FSprTOVppjdHAwzGL8IxsJSSoQbRhFTetH2YHS8QzBmTFXXpixLXVUlcuUMu7gMPsRJDXXUWAQ8JW8G7PA10gyeKq2RAvbZzdkYzBm2zjV1tsUb4wwDDmERTFvVGtumvaMjMdEbko+pRoTPhN1ai9mgqiS6Siwx0tbQ9qkyzh1g0AY2jL8cvOOrtc7aU3uXJzwlCeTpe56HVLO2b8gzfnA+jXBI0jyYDXqo6KD27ZxdADuCaxwe9nMtmD/4vg+2kFLtDN9u0DaQwIAtKIMLxVXgQ9iGHYK5nhjsWFjnwHyelEIxkFyxAiEIz1lY8H8CPlQ/OhWoIcdUD9N2bs/GHYPhJM4f1oRa0fKKTP70PNeNO1jHrGCAw8IKHaVtIpI8d5WjbAdgUDirmbFnzCOR6b1hvET1yZ55EheD4zHicbdgPI3YllH0d72Gwt7ePDwMu2h03ZA8mgY3DdiC7yHhZ5BMIXm2z1757U+c44JLJJQiEQqujnC2bo5FYl99/f1VZqm7aAkNqeFmvEwYgZ/W2ePPOEvpfo7oehYi8Hx/WMMW2Ab4BWE/+4hUCNAGv+eP1ClYJPW/sDAaxQzpRf2kJOGKq5uusaynke0LIOXZMXM8Rpx5pAIv8bSTqnIU6WompJZIFvcPTx++/v50Z/yIA53OXAQH9w8/Pn759fmu2twCvt7+A8WC6e4eyBMuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Advanced Settings",title:"Advanced Settings",src:"/think-labs/static/47438af2132565eb88bdf718c854a5cf/27db6/imager-advanced.png",srcSet:["/think-labs/static/47438af2132565eb88bdf718c854a5cf/7fc1e/imager-advanced.png 288w","/think-labs/static/47438af2132565eb88bdf718c854a5cf/27db6/imager-advanced.png 504w"],sizes:"(max-width: 504px) 100vw, 504px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("p",null,"5) Write the OS to the MicroSD card"),Object(o.b)("p",null,"6) Eject the MicroSD card and put it into your device"),Object(o.b)("p",null,"7) Boot your device"),Object(o.b)("p",null,"For the jetson device follow  the ",Object(o.b)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#intro"},"Getting Started with Jetson Nano Developer Kit")),Object(o.b)("h2",null,"Docker"),Object(o.b)("p",null,"IBM Edge Application Manager requires a recent version of Docker on your device.\nIf not already done, follow the instructions to ",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/debian/"},"Install Docker")),Object(o.b)("p",null,"A more easy way to install docker, run the following script"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"curl -sSL https://get.docker.com | sh\n")),Object(o.b)("p",null,"To run docker commands as non-root execute"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sudo usermod -aG docker pi\n")),Object(o.b)("p",null,"don’t forget to logoff/login to make the changes effective."),Object(o.b)("h3",null,"If you are using the provided RHEL 7 VM please install docker through the following commands as root"),Object(o.b)("p",null,"We have docker preinstalled for you"),Object(o.b)(u,{mdxType:"Accordion"},Object(o.b)(h,{title:"docker install done for you",mdxType:"AccordionItem"},Object(o.b)("p",null,"Switch to root"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"su root\nusermod -aG wheel ibmuser\n")),Object(o.b)("p",null,"Install docker"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sudo yum install -y yum-utils\nsudo yum-config-manager \\\n     --add-repo \\\n     https://download.docker.com/linux/centos/docker-ce.repo\nsudo yum install docker-ce docker-ce-cli containerd.io\nsudo usermod -aG docker ibmuser\nsudo systemctl start docker\nsudo chkconfig docker on\nexit\n")))))}f.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-edge-lab-requirements-english-mdx-9a370f6394bc1b2527dd.js.map