(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),A=a.n(l),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:A()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,r=n.baseUrl,o=n.subDirectory,b=r+"/edit/"+n.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),x=a("dI71"),O=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===n,b=new RegExp(n+"/?(#.*)?$"),c=i.replace(b,a);return Object(m.b)("li",{key:e,className:A()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(m.b)(s.Link,{className:O.link,to:""+c},e))}));return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:O.list},r))))))},t}(n.a.Component),f=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,r=t.frontmatter,l=void 0===r?{}:r,A=t.relativePagePath,d=t.titleType,p=l.tabs,u=l.title,x=l.theme,O=l.description,y=l.keywords,T=Object(w.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,z=N?i.pathname.replace(N,""):i.pathname,B=p?z.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",P=x||T;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:P,pageTitle:u,pageDescription:O,pageKeywords:y,titleType:d},Object(m.b)(g,{title:n?Object(m.b)(n,null):u,label:"label",tabs:p,theme:P}),p&&Object(m.b)(k,{title:u,slug:z,tabs:p,currentTab:B}),Object(m.b)(f.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:A})),Object(m.b)(j.a,{pageContext:t,location:i,slug:z,tabs:p,currentTab:B}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},lmlK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return x}));var i=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=b("PageDescription"),l=b("AnchorLinks"),A=b("AnchorLink"),d=b("Row"),p=b("Column"),m=b("ArticleCard"),g=b("Aside"),u=b("Video"),h={_frontmatter:s},j=o.a;function x(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(j,Object(i.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"This page is meant to demonstrate some of the components in action. You can\ncheck out the markdown used for this page\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/pages/demo/index.mdx"}),"on github"),".")),Object(r.b)(l,{mdxType:"AnchorLinks"},Object(r.b)(A,{mdxType:"AnchorLink"},"Building bonds"),Object(r.b)(A,{mdxType:"AnchorLink"},"Global accessibility standards"),Object(r.b)(A,{mdxType:"AnchorLink"},"Small anchor links"),Object(r.b)(A,{mdxType:"AnchorLink"},"Videos")),Object(r.b)(d,{mdxType:"Row"},Object(r.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(m,{title:"Getting started",href:"/getting-started",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVQoz12Ta0wNYBjH3+PWchsam5kRGzKXiqY66aRTzWUNy6KGQjPltoZii1SLdHbS3DbDXNIhDkbJZTEbJqebYnQ9RaaQ+211Lj9P8oUPz5f3fZ7/c/s9Kq0S9r2AqDOfULoqNCGVqKAHrNa+xjD7F1lBTnJ0TjJ0XbjrG1HBj+mlu49GrHdoOcqvgtCcdgx1kFruRKVXOv8ILsv7jPItQXleQE0zE+1Zzc7Jtez0tpKm+8kYfa0EF6KmFqCmXBYfMS/xnX79X8G0v4JRpz/KZxH9o2rwyPnEokw76zY5We/bwohZZSjtA5RPMW6bm/E69Z0pBz4zdG09yuMqodmt/1VYKxWavjJgTTMRd2GvFYwJsCkevHK/4bKygcGxTYzO6CDG/IuU7W/Z3wixZTB4QyshBzsw1HcLOlBZz2B3hQOvg2/xN3dxTMSK7rQR72PGdPY7a2vAPbOZUTueE/kI8u92st33ISePP+NcC8y74WBS7juSHnaSWQ1q270f6HdJSx75hF3pxGqD5Lg9jOyjpaUBsiTBoCW30WgLiC918qULAr0jiPROpOMnRN8TEf9CpsbeYo8Up1aZ3jBxeTFqkonpJ75hLIUjUR9InFjK4UPtxFjAZe4N1MzzhJfA0TudpPhZKCz5yPGXEHxJ2vS5xrCgfLqJUXEF7XiskAD3k7jFWok0OElaAhsD6oiIq2dsxgfZplk2m8fwLa9ZWmQjSRKnPEXm7WRIQqt0d5FhwSbSq0Qw9bGd6FPNDA+7SYLfF1IXO1i11Y5n8jsGxjcJd0+kuksobxMqsALXmAbGG94zNrUNl6Uv/rDbT3eTBfuqe1rOlG2lW2zsiHiFUevAGGAj18/OmEBxDihFoxfBGRcFqTyUXqCfLfP2twhGZWjmVAibFvSGN+xv6l6uYJNsbGP9/HISJ9SQPUcQ0tnIDrIzLrgOFVJO3wWNuC5swDW8jr7hVnnruaZu6xVWJcdgIUzAzq7t4fA37CE/C9xcSc4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/think-labs/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/think-labs/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/think-labs/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/think-labs/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/think-labs/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/think-labs/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(m,{title:"Theme configuration",href:"/guides/configuration",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVQoz12Ta0wNYBjH3+PWchsam5kRGzKXiqY66aRTzWUNy6KGQjPltoZii1SLdHbS3DbDXNIhDkbJZTEbJqebYnQ9RaaQ+211Lj9P8oUPz5f3fZ7/c/s9Kq0S9r2AqDOfULoqNCGVqKAHrNa+xjD7F1lBTnJ0TjJ0XbjrG1HBj+mlu49GrHdoOcqvgtCcdgx1kFruRKVXOv8ILsv7jPItQXleQE0zE+1Zzc7Jtez0tpKm+8kYfa0EF6KmFqCmXBYfMS/xnX79X8G0v4JRpz/KZxH9o2rwyPnEokw76zY5We/bwohZZSjtA5RPMW6bm/E69Z0pBz4zdG09yuMqodmt/1VYKxWavjJgTTMRd2GvFYwJsCkevHK/4bKygcGxTYzO6CDG/IuU7W/Z3wixZTB4QyshBzsw1HcLOlBZz2B3hQOvg2/xN3dxTMSK7rQR72PGdPY7a2vAPbOZUTueE/kI8u92st33ISePP+NcC8y74WBS7juSHnaSWQ1q270f6HdJSx75hF3pxGqD5Lg9jOyjpaUBsiTBoCW30WgLiC918qULAr0jiPROpOMnRN8TEf9CpsbeYo8Up1aZ3jBxeTFqkonpJ75hLIUjUR9InFjK4UPtxFjAZe4N1MzzhJfA0TudpPhZKCz5yPGXEHxJ2vS5xrCgfLqJUXEF7XiskAD3k7jFWok0OElaAhsD6oiIq2dsxgfZplk2m8fwLa9ZWmQjSRKnPEXm7WRIQqt0d5FhwSbSq0Qw9bGd6FPNDA+7SYLfF1IXO1i11Y5n8jsGxjcJd0+kuksobxMqsALXmAbGG94zNrUNl6Uv/rDbT3eTBfuqe1rOlG2lW2zsiHiFUevAGGAj18/OmEBxDihFoxfBGRcFqTyUXqCfLfP2twhGZWjmVAibFvSGN+xv6l6uYJNsbGP9/HISJ9SQPUcQ0tnIDrIzLrgOFVJO3wWNuC5swDW8jr7hVnnruaZu6xVWJcdgIUzAzq7t4fA37CE/C9xcSc4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/think-labs/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/think-labs/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/think-labs/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/think-labs/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/think-labs/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/think-labs/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(m,{title:"Contributions",href:"/contributions",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVQoz12Ta0wNYBjH3+PWchsam5kRGzKXiqY66aRTzWUNy6KGQjPltoZii1SLdHbS3DbDXNIhDkbJZTEbJqebYnQ9RaaQ+211Lj9P8oUPz5f3fZ7/c/s9Kq0S9r2AqDOfULoqNCGVqKAHrNa+xjD7F1lBTnJ0TjJ0XbjrG1HBj+mlu49GrHdoOcqvgtCcdgx1kFruRKVXOv8ILsv7jPItQXleQE0zE+1Zzc7Jtez0tpKm+8kYfa0EF6KmFqCmXBYfMS/xnX79X8G0v4JRpz/KZxH9o2rwyPnEokw76zY5We/bwohZZSjtA5RPMW6bm/E69Z0pBz4zdG09yuMqodmt/1VYKxWavjJgTTMRd2GvFYwJsCkevHK/4bKygcGxTYzO6CDG/IuU7W/Z3wixZTB4QyshBzsw1HcLOlBZz2B3hQOvg2/xN3dxTMSK7rQR72PGdPY7a2vAPbOZUTueE/kI8u92st33ISePP+NcC8y74WBS7juSHnaSWQ1q270f6HdJSx75hF3pxGqD5Lg9jOyjpaUBsiTBoCW30WgLiC918qULAr0jiPROpOMnRN8TEf9CpsbeYo8Up1aZ3jBxeTFqkonpJ75hLIUjUR9InFjK4UPtxFjAZe4N1MzzhJfA0TudpPhZKCz5yPGXEHxJ2vS5xrCgfLqJUXEF7XiskAD3k7jFWok0OElaAhsD6oiIq2dsxgfZplk2m8fwLa9ZWmQjSRKnPEXm7WRIQqt0d5FhwSbSq0Qw9bGd6FPNDA+7SYLfF1IXO1i11Y5n8jsGxjcJd0+kuksobxMqsALXmAbGG94zNrUNl6Uv/rDbT3eTBfuqe1rOlG2lW2zsiHiFUevAGGAj18/OmEBxDihFoxfBGRcFqTyUXqCfLfP2twhGZWjmVAibFvSGN+xv6l6uYJNsbGP9/HISJ9SQPUcQ0tnIDrIzLrgOFVJO3wWNuC5swDW8jr7hVnnruaZu6xVWJcdgIUzAzq7t4fA37CE/C9xcSc4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/think-labs/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/think-labs/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/think-labs/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/think-labs/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/think-labs/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/think-labs/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters.")),Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),Object(r.b)(d,{mdxType:"Row"},Object(r.b)(p,{colMd:5,colLg:8,mdxType:"Column"},Object(r.b)("h2",null,"Section heading"),Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Add-on repositories, or repos, are components built for a specific product or\nexperience. The repos are built on top of the core Carbon repo, and enable")),Object(r.b)("p",null,"IBMers believe in progress—that application of intelligence, reason and science\ncan improve business, society and the human condition.")),Object(r.b)(p,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(r.b)(g,{mdxType:"Aside"},Object(r.b)("p",null,Object(r.b)("strong",null,"Good design is always",Object(r.b)("br",null),"good design.")),Object(r.b)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in\nstylistic terms, but the modernist attitudes and approach used at the time.")))),Object(r.b)("h2",null,"Small anchor links"),Object(r.b)("p",null,"Swab barque interloper™ chantey doubloon starboard grog black jack gangway\nrutters π."),Object(r.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(r.b)(A,{mdxType:"AnchorLink"},"Header"),Object(r.b)(A,{mdxType:"AnchorLink"},"Header again")),Object(r.b)("h3",null,"Header"),Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),Object(r.b)("h3",null,"Header again"),Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"This is a demonstration of an ordered list item. This list item is\nparticularly long to demonstrate how the text wraps and aligns with the first\nline.",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"This is a nested list item, it should wrap in the same way. Typically,\nnested list items should be of the same type (ordered, unordered) as their\nparent."))),Object(r.b)("li",{parentName:"ol"},"Ordered list item"),Object(r.b)("li",{parentName:"ol"},"Ordered list item")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This is a demonstration of an unordered list item. This list item is\nparticularly long to demonstrate how the text wraps and aligns with the first\nline.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This is a nested list item, it should wrap in the same way. Typically,\nnested list items should be of the same type (ordered, unordered) as their\nparent."))),Object(r.b)("li",{parentName:"ul"},"Unordered list item"),Object(r.b)("li",{parentName:"ul"},"Unordered list item")),Object(r.b)("h2",null,"Images"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/9oADAMBAAIQAxAAAAHXzbizxBgqP//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMREhQz/9oACAEBAAEFAth5Pggt2Ixty9P/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AY2kM//EABgRAQADAQAAAAAAAAAAAAAAAAEAAxIx/9oACAECAQE/Abc1okOT/8QAHhAAAgEDBQAAAAAAAAAAAAAAABEBAhAhEjFBUXH/2gAIAQEABj8C4Ib1dwZ3s1kq9P/EAB0QAAICAQUAAAAAAAAAAAAAAAABESExQVGBkaH/2gAIAQEAAT8hbFFJ1SJCYFZOSZr7pFkW7R2esf/aAAwDAQACAAMAAAAQHw//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/EGoXewxS/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMYH/2gAIAQIBAT8QARW5yOwz/8QAHRABAQABBAMAAAAAAAAAAAAAAREAIVFhcTFB8P/aAAgBAQABPxBdMkoE5NcDSTahokO2+JPUPJec8HeQwosRRVfefK3z/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Large blocky illustration",title:"Large blocky illustration",src:"/think-labs/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg",srcSet:["/think-labs/static/8006174cef307d9cf1a013bc15b3dd6c/69549/large-image.jpg 288w","/think-labs/static/8006174cef307d9cf1a013bc15b3dd6c/473e3/large-image.jpg 576w","/think-labs/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h2",null,"Videos"),Object(r.b)(u,{title:"Eyes",vimeoId:"310583077",mdxType:"Video"}))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-demo-index-mdx-5f83c5d487266883ad5e.js.map