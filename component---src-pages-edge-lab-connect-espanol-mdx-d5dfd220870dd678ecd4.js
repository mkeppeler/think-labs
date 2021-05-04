(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{Oktr:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n("vxd2"),o=n("+ZQ4"),r=(n("tbR7"),n("8ZXK")),l=n("ZUrL"),i=(n("GP0y"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=s("PageDescription"),p=s("InlineNotification"),b={_frontmatter:i},d=l.a;function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"En esta sección, configurará su entorno de destino en el que implementará la aplicación de muestra y el agente edge. Si desea traer su propio entorno, no dude en hacerlo.")),Object(r.b)("h2",null,"Instalación y registro de agentes"),Object(r.b)("p",null,"En esta práctica de laboratorio utilizaremos el método de registro e instalación de agente automatizado. Otra opcion son"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Instalación y registro manual avanzado del agente"),Object(r.b)("li",{parentName:"ul"},"Instalación y registro de agentes masivos"),Object(r.b)("li",{parentName:"ul"},"Instalación y registro del agente Secure Device Onboarding (SDO)",Object(r.b)(p,{kind:"info",mdxType:"InlineNotification"},"**Nota:** Estos pasos son los mismos para todos los tipos de dispositivos perimetrales (arquitecturas)."))),Object(r.b)("p",null,"Si aún no ha preparado su dispositivo con los pasos de la sección ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/think-labs/edge-lab/requirements/espanol"}),"Requisitos"),", hágalo ahora."),Object(r.b)("p",null,"1) Descargue el paquete del agente"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"curl -sSL http://ieam -o agent-install.tar\n")),Object(r.b)("p",null,"2) Extraiga el archivo de instalación del agente en su dispositivo"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"tar xvf agent-install.tar\n")),Object(r.b)("p",null,"Revise el archivo de configuración que obtuvo con la instalación del agente."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"export HZN_EXCHANGE_USER_AUTH=iamapikey:<api-key>\nexport HZN_ORG_ID=<your-exchange-organization>\nexport HZN_FSS_CSSURL=https://<ieam-management-hub-ingress>/edge-css/\n")),Object(r.b)("p",null,"3) Ejecute agent-install.sh para obtener los archivos necesarios de CSS (Cloud Sync Service), instale y configure el agente de Horizon y registre su dispositivo perimetral para ejecutar el servicio perimetral de muestra helloworld:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo -s ./agent-install.sh -i 'css:' -p IBM/pattern-ibm.helloworld -w '*' -T 120\n")),Object(r.b)("p",null,"Para ver todas las descripciones de los indicadores agent-install.sh disponibles, ejecute: ./agent-install.sh -h"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"./agent-install.sh -h\n")),Object(r.b)("p",null,"Para ver la salida del servicio perimetral de muestra de helloworld que se instala como parte de la ejecución de instalación del agente"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn service log -f ibm.helloworld\n# Press Ctrl-c to stop the output display\n")),Object(r.b)("p",null,"Si el servicio de borde helloworld no se inicia, ejecute este comando para ver los mensajes de error:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn eventlog list -f\n# Press Ctrl-c to stop the output display\n")),Object(r.b)("p",null,"(opcional) Utilice el comando hzn en este nodo de borde para ver los servicios, los patrones y las políticas de implementación en Horizon Exchange. Establezca su información específica como variables de entorno en su shell y ejecute estos comandos:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"eval export $(cat agent-install.cfg)\nhzn exchange service list IBM/\nhzn exchange pattern list IBM/\nhzn exchange deployment listpolicy\n")),Object(r.b)("p",null,"Explore todos los indicadores y subcomandos del comando hzn:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn --help\n")),Object(r.b)("p",null,"Finalmente, ejecute el siguiente comando para anular el registro del dispositivo nuevamente y elimine el servicio de borde de muestra"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"hzn unregister -f\n")),Object(r.b)("p",null,"Ahora está listo para comenzar a desarrollar su primer servicio de borde"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-lab-connect-espanol-mdx-d5dfd220870dd678ecd4.js.map