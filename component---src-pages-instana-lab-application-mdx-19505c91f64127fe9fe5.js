(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{L7DW:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return b})),o.d(t,"default",(function(){return u}));var n=o("vxd2"),a=o("+ZQ4"),r=(o("tbR7"),o("8ZXK")),c=o("ZUrL"),b=(o("GP0y"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=s("PageDescription"),i=s("InlineNotification"),p={_frontmatter:b},h=c.a;function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)(h,Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"In this part of the lab you will install a sample application into your environment and see how Instana does an automatic discovery to achieve full observability of your enterprise.")),Object(r.b)("h2",null,"Installing the Robot-Shop Application"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Stan’s Robot Shop")," is a sample microservices application which built with different technologies like NodeJS, Java, MongoDB, RabbitMQ, etc. to demonstrate the monitoring capabilities.\nYou can look to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/instana/robot-shop"}),"robot-shop")," git repository for more details."),Object(r.b)("p",null,"We will use a helm-chart with helm v3.x to install the appliction."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a namespace in which we will run robot-shop by executing")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns robot-shop\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"To change the context in kubectl to use the robot-shop namespace execute")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl config set-context --current --namespace=robot-shop\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Get the helm chart from ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"./robot-shop-1.1.0.tgz"}),"here")," with curl")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -fsSL -o robot-shop.tar.gz https://github.com/mkeppeler/instana/raw/main/robot-shop-1.1.0.tgz\n")),Object(r.b)("p",null,"The execution of the helm chart requires helm version 3. When you completed the Setup Environment section of this lab, you should have configured helm 3.\nIf you are unsure, check with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm3 version\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Execute the helm installation by issuing the following command in the root of the helm chart directory")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm3 install robot-shop \\\n  --set psp.enabled=true \\\n  --set eum.key=<your EUM access key> \\\n  --set eum.url=<your EUM endpoint> \\\n  --namespace robot-shop \\\n  ./robot-shop.tar.gz\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Check that the apllication get deployed correctly and is up and running")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods\n")),Object(r.b)(i,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," This can take some time depending on the environment, because the container images need to be downloaded.")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"After the pods are all pods are ready and show the status running, lookup the endpoint of your application access it")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'export CLUSTER_ID=c1s4a37d059rk1ghgth0\nNODEPORT=$(kubectl get -o jsonpath="{.spec.ports[0].nodePort}" service web)\nURL=$(ibmcloud ks cluster get --cluster $CLUSTER_ID --show-resources | grep "Ingress Subdomain" | awk \'{print $NF}\')\necho "http://$URL:$NODEPORT"\n')),Object(r.b)("p",null,"Copy the URL output to a browser and hit enter. You should be presented with ",Object(r.b)("strong",{parentName:"p"},"Stan’s Robot Shop")),Object(r.b)("img",{src:"./images/stans-robot-shop.png",alt:"stans-robot-shop"}),Object(r.b)("p",null,"Congratulations you can now proceed to the next step."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-instana-lab-application-mdx-19505c91f64127fe9fe5.js.map