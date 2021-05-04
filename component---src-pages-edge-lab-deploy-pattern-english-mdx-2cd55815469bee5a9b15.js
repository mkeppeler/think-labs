(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{e0au:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n("vxd2"),r=n("+ZQ4"),o=(n("tbR7"),n("8ZXK")),i=n("ZUrL"),l=(n("GP0y"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=c("PageDescription"),p=c("InlineNotification"),s={_frontmatter:l},d=i.a;function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"In this section you will deploy the edge service that you created in a previous step to your edge environment.")),Object(o.b)("h2",null,"Deploying an edge service using a deployment pattern"),Object(o.b)("h3",null,"Preconditions for deploying your own service"),Object(o.b)("p",null,"  If you have not already done do, complete the section ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../service/english"}),"Create an Edge Service")),Object(o.b)("p",null,"  Also set your USER_ID again if you opened a new shell."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"export USER_ID=$DOCKER_HUB_ID\n")),Object(o.b)("h2",null,"Defining a deployment pattern"),Object(o.b)("p",null,"During the creation of the edge service a pattern template has been created for you in the horizon directory "),Object(o.b)("p",null,"Examine the ",Object(o.b)("strong",{parentName:"p"},"horizon/pattern.json")," file and take notice of the structure/options."),Object(o.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Some variables in the pattern are defined in other files. You can replace them with the real values if you like.")),Object(o.b)("h2",null,"Publishing a pattern for the edge service"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Publish and view your edge node deployment pattern in the Horizon Exchange:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn exchange pattern publish -f horizon/pattern.json\nhzn exchange pattern list\n")),Object(o.b)("p",null,"The pattern is now also visible on the ",Object(o.b)("strong",{parentName:"p"},"Patterns")," tab in IBM Edge Application Manager UI\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../images/IEAM-pattern.png",alt:"IEAM-pattern"}))),Object(o.b)("p",null,"Click on your pattern to see the details\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../images/IEAM-pattern-details.png",alt:"IEAM-pattern-details"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Register your edge node with Horizon to use your deployment pattern:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn register -p pattern-hello-$USER_ID-$(hzn architecture)\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"The edge device will make an agreement with one of the Horizon agreement bots (this typically takes about 15 seconds). Repeatedly query the agreements of this device until the agreement_finalized_time and agreement_execution_start_time fields are filled in:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"watch hzn agreement list\n# Press Ctrl-c to stop the output display\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"After the agreement is made, list the docker container edge service that has been started as a result:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo docker ps\n")),Object(o.b)("p",null,"You will also see the pattern deployment in the IBM Edge Application Manager UI\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../images/IEAM-mypattern.png",alt:"IEAM-mypattern"}))),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"See the helloworld service output:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo hzn service log -f hello-$USER_ID\n")),Object(o.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Press Ctrl C to stop the command output.")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Unregister your edge node (which will also stop the ",Object(o.b)("em",{parentName:"li"},"hello-","<","your-name",">")," service):")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn unregister -f\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-lab-deploy-pattern-english-mdx-2cd55815469bee5a9b15.js.map