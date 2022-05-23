(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),c=a("NmYn"),r=a.n(c),i=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,c=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},A=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,c=o.baseUrl,r=o.subDirectory,s=c+"/edit/"+o.branch+r+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+A.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:A.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),I=a("dI71"),E=a("I8xM"),_=function(e){function t(){return e.apply(this,arguments)||this}return Object(I.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),c=a===o,s=new RegExp(o+"/?(#.*)?$"),l=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[E.selectedItem]=c,t),E.listItem)},Object(p.b)(i.Link,{className:E.link,to:""+l},e))}));return Object(p.b)("div",{className:E.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:E.list},c))))))},t}(o.a.Component),h=a("MjG9"),j=a("CzIb"),T=a("Asxa"),f=a("OIbQ"),N=a.n(f),M=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:N.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,c=t.frontmatter,b=void 0===c?{}:c,d=t.relativePagePath,u=t.titleType,m=b.tabs,A=b.title,I=b.theme,E=b.description,T=b.keywords,f=b.date,N=Object(j.a)().interiorTheme,k=Object(i.useStaticQuery)("2456312558").site.pathPrefix,C=k?n.pathname.replace(k,""):n.pathname,R=m?C.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",y=I||N;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:y,pageTitle:A,pageDescription:E,pageKeywords:T,titleType:u},Object(p.b)(g,{title:o?Object(p.b)(o,null):A,label:"label",tabs:m,theme:y}),m&&Object(p.b)(_,{title:A,slug:C,tabs:m,currentTab:R}),Object(p.b)(h.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(M,{date:f})),Object(p.b)(O.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:R}),Object(p.b)(s.a,null))}},"3qDg":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return A}));var n=a("wx14"),o=a("zLVn"),c=(a("q1tI"),a("7ljp")),r=a("013z"),i=(a("qKvR"),["components"]),s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},b=l("PageDescription"),d=l("InlineNotification"),u=l("Accordion"),m=l("AccordionItem"),p={_frontmatter:s},g=r.a;function A(e){var t=e.components,a=Object(o.a)(e,i);return Object(c.b)(g,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(b,{mdxType:"PageDescription"},Object(c.b)("p",null,"In this section you find instruction for setting up the lab.")),Object(c.b)("h2",null,"Agent Installation and Registration"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"export CLUSTER_URL=https://$(oc get cm management-ingress-ibmcloud-cluster-info -o jsonpath='{.data.cluster_ca_domain}')\nexport ADMIN_USER=$(oc -n ibm-common-services get secret platform-auth-idp-credentials -o jsonpath='{.data.admin_username}' | base64 --decode)\nexport ADMIN_PWD=$(oc -n ibm-common-services get secret platform-auth-idp-credentials -o jsonpath='{.data.admin_password}' | base64 --decode)\ncloudctl login -a $CLUSTER_URL -u $ADMIN_USER -p ADMIN_PWD --skip-ssl-validation -n ibm-edge\n\nexport ROOT_PASS=$(oc get secret $CUSTOM_RESOURCE-auth -o jsonpath='{.data.exchange-root-pass}' | base64 --decode | grep '.*')\nexport CUSTOM_RESOURCE=$(oc get eamhub | grep -c -v NAME)\nexport EDGE_AGBOT_ID=$(oc get cm $CUSTOM_RESOURCE-config -o jsonpath=\"{.data.agbot_id}\" | grep '.*')\nexport CA_DOMAIN=$(oc get cm management-ingress-ibmcloud-cluster-info -o jsonpath='{.data.cluster_ca_domain}'\nexport HZN_EXCHANGE_URL=https://$CA_DOMAIN/edge-exchange/v1\nexport HZN_EXCHANGE_USER_AUTH=\"root/root:$ROOT_PASS\"\nexport CLUSTER_CA_CERT=$(oc get secret management-ingress-ibmcloud-cluster-ca-cert -o jsonpath=\"{.data['ca\\.crt']}\" | base64 --decode | grep '.*')\necho \"$CLUSTER_CA_CERT\" > /tmp/ieam_cluster_ca.crt\nexport HZN_MGMT_HUB_CERT_PATH=/tmp/ieam_cluster_ca.crt\nexport NEW_ORG_ID=thinkedge\ncloudctl iam roles\ncloudctl iam groups\ncloudctl iam teams\ncloudctl iam accounts\nexport IAM_ACCOUNT_NAME='mycluster Account'\nIAM_ACCOUNT_ID=$(cloudctl iam account \"$IAM_ACCOUNT_NAME\" | grep -E '^ID' | awk '{print $2}')\n# export IAM_TEAM_ID=$(cloudctl iam teams -s | grep -m 1 \"$IAM_ACCOUNT_NAME\" | awk '{print $1}')\nexport IAM_TEAM_ID=edgeadmins\nexport IAM_RESOURCE_ID=$(cloudctl iam resources | grep ':n/ibm-edge:')\ncloudctl iam resource-add $IAM_TEAM_ID -r $IAM_RESOURCE_ID\nhzn exchange user create -o $NEW_ORG_ID -A markus \"\" \"markus@does.not.exist\"\nhzn exchange user setadmin 'markus' 'true' -o $NEW_ORG_ID\n")),Object(c.b)(d,{kind:"info",mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," These steps above are not all required.")),Object(c.b)("h2",null,"Create an API-key for each user"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'IAM_USER=<iam-user>\ncloudctl login -a <cluster-url> -u $IAM_USER -p <iam-user-password> -c $IAM_ACCOUNT_ID --skip-ssl-validation\ncloudctl iam api-key-create "${IAM_USER}-api-key" -d "API key for $IAM_USER"\n# IAM_USER_API_KEY=$(cloudctl iam api-key-create "${IAM_USER}-api-key" -d "API key for $IAM_USER" | grep -E \'^API Key\' | awk \'{print $3}\')\n')),Object(c.b)("h2",null,"Verify API-key"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"IAM_USER_API_KEY=<IAM API key you just created>\n\nexport HZN_ORG_ID=<organization-id>\nexport HZN_EXCHANGE_USER_AUTH=iamapikey:$IAM_USER_API_KEY\nhzn exchange user list\n")),Object(c.b)("p",null,"To check ",Object(c.b)("a",{parentName:"p",href:"/think-labs/edge-lab/requirements"},"Requirements")),Object(c.b)("p",null,"The IBM Edge Application Manager should not list any or your device as shown below\n",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB9klEQVQ4y61Ty47UMBDMB/IdO2iGXYmd3+ACFyQkLvATCCHEBQQCIQ5ICCRuO8u8nMRvx0lcdHuT3VmYYS5YqXTZKVd3O0lxbzbF+fl9zOfzjNlshslkcgQnmJzc4C6tnZ2eYjqdoljWCQsR8EtoXG41lqXFqnYobYvStKhslyF0hDAxR7rgekJ3FcsAbBxgab1YbytsRI1KamzKGqKSBJV5Wes83xKYX4O0lTQZtTLwziB4A2c1CkEbN0JCagcpJYzRsNZAEXfWQmsFrVTmu7AE7ywUGX75afHhu8WPC4PCOgdHCCGgbVvEyIgDj8N85Ddomoi+i1jXDc6eRdx5EPHoRSBDzuiuqhvRNM1fBpyg67qdRDHr+r6HUQJPHj+EqgUKY0w2ZOEh8GZOrKh17/218ZjEU3eLxSX5eBRKazonDaSEjrI52pCI9wTmXAFDkllVVXT4Puv8cEQtGQaqlAfPCz0IEouoEgabB4qOhcS5QsPmxHnOmjDoHLfexpyUj6CIdMsVDZWkIf7JjyENiQu+/a+RWx4NOcM+8OBPil/cMd2tCsfFXZ5Sn+PHT5/x9t37W2v79HsNd2PfJ7QxIKglolmjbUJ+Mfu0Rw357+B/dLGSeP5G4ukriYuVRuMtDu/5R8vj1NKX8/ob8PIroMP4/HDLvwF5NL1IskB8yAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IEAM-nonode",title:"IEAM-nonode",src:"/think-labs/static/413181e39116caf3ec4348d8ba222709/3cbba/IEAM-nonode.png",srcSet:["/think-labs/static/413181e39116caf3ec4348d8ba222709/7fc1e/IEAM-nonode.png 288w","/think-labs/static/413181e39116caf3ec4348d8ba222709/a5df1/IEAM-nonode.png 576w","/think-labs/static/413181e39116caf3ec4348d8ba222709/3cbba/IEAM-nonode.png 1152w","/think-labs/static/413181e39116caf3ec4348d8ba222709/0b124/IEAM-nonode.png 1728w","/think-labs/static/413181e39116caf3ec4348d8ba222709/f5b13/IEAM-nonode.png 2228w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(c.b)(u,{mdxType:"Accordion"},Object(c.b)(m,{title:"output",mdxType:"AccordionItem"},Object(c.b)("p",null,"Some text"))))}A.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-edge-lab-config-mdx-6a3b1392ddd32d41b4fa.js.map