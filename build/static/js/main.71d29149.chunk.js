(this["webpackJsonpboiler-plate-01"]=this["webpackJsonpboiler-plate-01"]||[]).push([[0],{168:function(e,a,t){},315:function(e,a,t){e.exports=t(541)},320:function(e,a,t){},325:function(e,a,t){},327:function(e,a,t){},328:function(e,a,t){},332:function(e,a,t){},333:function(e,a,t){},334:function(e,a,t){},426:function(e,a,t){},428:function(e,a,t){},536:function(e,a,t){},537:function(e,a,t){},539:function(e,a,t){},540:function(e,a,t){},541:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(15),o=t.n(r),c=t(269),i=t(9),s=(t(320),t(274)),m=t(194),u=t(275),d=t.n(u),E=t(46),p=t(270),v=t.n(p),h=t(271),g=t.n(h),b=t(272),f=t.n(b),N=t(273),C=t.n(N),B=[{title:"Inicio",path:"/",icon:l.a.createElement(v.a,null),cName:"nav-text"},{title:"Presupuesto",path:"/presupuesto",icon:l.a.createElement(g.a,null),cName:"nav-text"},{title:"Otros Servicios",path:"/otros-servicios",icon:l.a.createElement(f.a,null),cName:"nav-text"},{title:"Contacto",path:"/contacto",icon:l.a.createElement(C.a,null),cName:"nav-text"}],D=(t(325),t(0));var j=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],o=function(){return r(!t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.b.Provider,{value:{color:"#ffff"}},l.a.createElement("div",{className:"navBar"},l.a.createElement(E.b,{to:"/",className:"logo"},l.a.createElement("img",{src:"/images/logo.png"}),"G\xe9nesis ong"),l.a.createElement(E.b,{to:"#",className:"menu-bars"},l.a.createElement(s.a,{onClick:o}))),l.a.createElement("nav",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("ul",{className:"nav-menu-items",onClick:o},l.a.createElement("li",{className:"navbar-toggle"},l.a.createElement(E.b,{to:"#"},l.a.createElement(m.a,null))),B.map((function(e,a){return l.a.createElement("li",{key:a,className:e.cName},l.a.createElement(E.b,{to:e.path},e.icon,l.a.createElement("span",null,e.title)))})),l.a.createElement("li",{className:"navbar-toggle"},l.a.createElement(E.b,{to:"#",className:"close-menu"},l.a.createElement(d.a,null)))))))},O=t(28);t(327),t(168);var _=function(){return l.a.createElement("div",{className:"service__card"},l.a.createElement("div",{className:"service__cardImage cardImage__one"}),l.a.createElement("h2",null,"Mudanzas"),l.a.createElement("p",null,"Profesionalidad, radidez y eficacia."),l.a.createElement(E.b,{to:"/presupuesto"},l.a.createElement("button",{className:"service__cardButton"},"Solicitar presupuesto")))},y=t(596),x=t(59),S=t(592),P=t(545),M=t(155),I=t.n(M),w=Object(x.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{display:"flex",flexDirection:"column",backgroundColor:"#00ff09",border:"2px solid #000",borderRadius:"50px",textAling:"center",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var z=function(){var e=w(),a=l.a.useState(!1),t=Object(i.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",{className:"service__card"},l.a.createElement("div",{className:"service__cardImage cardImage__two"}),l.a.createElement("h2",null,"Desalojo de pisos"),l.a.createElement("p",null,"Retirada de muebles, limpieza de piso. "),l.a.createElement("button",{className:"service__cardButton",type:"button",onClick:function(){r(!0)}},"M\xe1s informaci\xf3n"),l.a.createElement(y.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:n,onClose:function(){r(!1)},closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500}},l.a.createElement(P.a,{in:n},l.a.createElement("div",{className:e.paper},l.a.createElement("h2",{id:"transition-modal-title"},"No deseches nada"),l.a.createElement("p",{id:"transition-modal-description"},"Muebles de salon, armarios, camas, electrodomesticos. Les daremos una segunda oportunidad."),"Puedes enviarnos algunas imagenes v\xeda WhatsApp \ud83d\udcf2\ud83d\uddbc",l.a.createElement("a",{href:"https://wa.me/34698632639"},l.a.createElement(I.a,null))))))},T=(t(328),t(201)),k=T.a.initializeApp({apiKey:"AIzaSyCFc8f58FF3tSVYb2MPt-S95BjWxd3YCUw",authDomain:"genesis-ong-133b6.firebaseapp.com",projectId:"genesis-ong-133b6",storageBucket:"genesis-ong-133b6.appspot.com",messagingSenderId:"596827840768",appId:"1:596827840768:web:f306ba87d82f913cdfd3e5",measurementId:"G-ESVQHQD58G"}).firestore(),F=T.a.auth(),q=function(){Object(O.f)();var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],m=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),E=d[0],p=d[1],v=Object(n.useState)(""),h=Object(i.a)(v,2),g=h[0],b=h[1],f=Object(n.useState)(""),N=Object(i.a)(f,2),C=N[0],B=N[1],D=Object(n.useState)(!1),j=Object(i.a)(D,2),_=j[0],y=j[1];return l.a.createElement("form",{className:"solicitudExpress",onSubmit:function(e){e.preventDefault(),y(!0),k.collection("solicitudesExpress").add({nombre:t,numero:s,origen:E,destino:g,mercancia:C}).then((function(){y(!1),alert("Muchas gracias. La solicitud ha sido envada con \xe9xito, nos pondremos en contacto en la mayor brevedad posible. Tambi\xe9n puede enviarnos algunas imagenes por whatsapp o correo electr\xf3nico, si as\xed lo desea, saludos.  \ud83e\udd17")})).catch((function(e){alert(e.message),y(!1)})),r(""),m(""),p(""),b(""),B("")}},l.a.createElement("label",null,"Nombre"),l.a.createElement("input",{value:t,onChange:function(e){return r(e.target.value)}}),l.a.createElement("label",null,"N\xfamero de contacto"),l.a.createElement("input",{placeholder:"+34 ... \ud83d\udcf2",value:s,onChange:function(e){return m(e.target.value)},required:!0}),l.a.createElement("label",null,"Ciudad Origen"),l.a.createElement("input",{placeholder:"\ud83d\ude03\ud83d\udeeb",value:E,onChange:function(e){return p(e.target.value)}}),l.a.createElement("label",null,"Ciudad Destino"),l.a.createElement("input",{placeholder:"\ud83d\ude0e\ud83d\udeec",value:g,onChange:function(e){return b(e.target.value)}}),l.a.createElement("label",null,"Mercanc\xeda"),l.a.createElement("input",{placeholder:"\ud83e\udd14\ud83d\udce6",value:C,onChange:function(e){return B(e.target.value)}}),l.a.createElement("button",{type:"submit",style:{background:_?"#ccc":" rgb(2, 2, 110)"}},"Enviar solicitud"))},A=t(115),R=t(288);var L=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],o=function(){return r(!1)};return l.a.createElement("div",{className:"service__card"},l.a.createElement("div",{className:"service__cardImage cardImage__three"}),l.a.createElement("h2",null,"Servicios Express"),l.a.createElement("p",null,"Transportes rapidos y todo tipo de portes."),l.a.createElement("button",{className:"service__cardButton",onClick:function(){return r(!0)}},"Solicitud r\xe1pida"),l.a.createElement(A.a,{show:t,onHide:o,backdrop:"static",keyboard:!1},l.a.createElement(A.a.Header,null,l.a.createElement(A.a.Title,null,"Solicitud Express")),l.a.createElement(A.a.Body,null,l.a.createElement(q,null)),l.a.createElement(A.a.Footer,null,l.a.createElement(R.a,{onClick:o},"Cerrar"))))};t(332);var G=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__container"},l.a.createElement("div",{className:"sec abouts"},l.a.createElement("h2",null,"Acerca de nosotros"),l.a.createElement("p",null,"G\xe9nesis ong es una asociaci\xf3n sin \xe1nimo de lucro, con un foco de ayuda principalmente hac\xeda personas con adicciones y que est\xe1n en situaci\xf3n de desamparo. Los recursos obtenidos por las diferentes actividades realizadas son destinados 100% a la obra social, birndando alojamiento y cubriendo las necesidades b\xe1sicas de nuestros residentes. Creemos que a trav\xe9s de la f\xe9 en Jesucristo siempre hay una nueva esperanza de vida. Agradecemos vuestra ayuda, sin la cual no ser\xeda posible llevar a cabo esta noble causa."),l.a.createElement("ul",{className:"sci"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-instagram"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-envelope-open-text"}))))),l.a.createElement("div",{className:"sec quickLinks"},l.a.createElement("h2",null,"Enlaces de interes"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"FAQ")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Privacidad")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Ayuda")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Terminos y condiciones")))),l.a.createElement("div",{className:"sec contact"},l.a.createElement("h2",null,"Contacto"),l.a.createElement("ul",{className:"info"},l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-map-marker-alt"})),l.a.createElement("p",null,"Barcelona, Espa\xf1a")),l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-phone-alt"})),l.a.createElement("p",null,l.a.createElement("a",{href:"tel:722845044"},"(+34)722845044"))),l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-envelope"})),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:genesismudanzasg@gmail.com"},"genesismudanzas@gmail.com")))))),l.a.createElement("div",{className:"copyRightText"},l.a.createElement("p",null,"Todos los derechos reservados \xa9 ",l.a.createElement("br",null),"G\xc9NESIS ONG 2020")))};var U=function(){return Object(n.useEffect)((function(){window.scrollY>0&&window.scrollTo(0,0)}),[]),l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"home__sectionImage__one"},l.a.createElement("div",{className:"sectionOne__text"},l.a.createElement("h1",null,"Mudanzas G\xe9nesis",l.a.createElement("span",null)),l.a.createElement("h2",null,"El servicio de mudanzas y transporte a nivel nacional desde Barcelona de ",l.a.createElement("b",{className:"logo-name"},"G\xe9nesis ong."),l.a.createElement("br",null),"Encuentra las ciudades desde donde ofrecemos nuestro servicio:",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"listadoCiudades"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas Barcelona ")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas Badalona")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas Santa Coloma de Gramanet")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas Hospitalet de Llobregat"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas econ\xf3micas Barcelona ")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas econ\xf3micas Badalona")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas econ\xf3micas Santa Coloma")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas econ\xf3micas Hospitalet de Llobregat"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas Barcelona Madrid ")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas Barcelona Valencia")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas Barcelona Sur de Espa\xf1a")),l.a.createElement("li",null,l.a.createElement("h2",null,"Mudanzas Barcelona Bilbao")))))),l.a.createElement("div",{className:"section services__container"},l.a.createElement(_,null),l.a.createElement(z,null),l.a.createElement(L,null)),l.a.createElement("div",{className:"sectionTwo__text"},l.a.createElement("br",null),l.a.createElement("h2",null,"\xbfTe mudas?"),l.a.createElement("h3",null,"Cuenta con nosotros para tu servicio de ",l.a.createElement("strong",null,"mudanzas en Barcelona."),"\xa0 Contamos con lo que necesitas para tu ",l.a.createElement("strong",null,"mudanza desde Barcelona a nivel nacional."),"\xa0 Y por supuesto, si lo que buscas es un equilibrio entre profesionalidad y una ",l.a.createElement("strong",null,"mudanza econ\xf3mica desde Barcelona"),"\xa0 est\xe1s en el lugar indicado, puedes consultarnos al siguiente n\xfamero: ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"tel:722845044"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-phone-alt"})),"722845044"))),l.a.createElement("div",{className:"section home__sectionImage__three"},l.a.createElement("div",{className:"sectionThree__text"},l.a.createElement("h2",null,"Cuidamos de los tuyos"))),l.a.createElement(G,null))},H=(t(333),t(334),t(287)),W=t(200),Y=function(){var e=Object(H.a)({initialValues:{ciudadOrigen:"",provinciaOrigen:"",codigoPostalOrigen:"",plantaDePisoOrigen:"",interiorExteriorOrigen:"Interior",ascensorOrigen:"S\xed",desmontaje:"S\xed",numeroDeMuebles:"",materialEmbalaje:"No",numeroDeCajas:"",ayudaEmbalaje:"No",descripcionMuebles:"",ciudadDestino:"",provinciaDestino:"",codigoPostalDestino:"",plantaDePisoDestino:"",interiorExteriorDestino:"Interior",ascensorDestino:"S\xed",montaje:"S\xed",nombre:"",medioDeContacto:"",email:"",numeroDeContacto:""},validationSchema:W.a({email:W.b().email("Direcci\xf3n de email invalida.")}),onSubmit:function(a){k.collection("solicitudesPresupuesto").add({ciudadOrigen:a.ciudadOrigen,provinciaOrigen:a.provinciaOrigen,codigoPostalOrigen:a.codigoPostalOrigen,plantaDePisoOrigen:a.plantaDePisoOrigen,interiorExteriorOrigen:a.interiorExteriorOrigen,ascensorOrigen:a.ascensorOrigen,desmontaje:a.desmontaje,numeroDeMuebles:a.numeroDeMuebles,materialEmbalaje:a.materialEmbalaje,numeroDeCajas:a.numeroDeCajas,ayudaEmbalaje:a.ayudaEmbalaje,descripcionMuebles:a.descripcionMuebles,ciudadDestino:a.ciudadDestino,provinciaDestino:a.provinciaDestino,codigoPostalDestino:a.codigoPostalDestino,plantaDePisoDestino:a.plantaDePisoDestino,interiorExteriorDestino:a.interiorExteriorDestino,ascensorDestino:a.ascensorDestino,montaje:a.montaje,nombre:a.nombre,email:a.email,numeroDeContacto:a.numeroDeContacto}).then((function(){alert("Muchas gracias. La solicitud ha sido envada con \xe9xito, nos pondremos en contacto en la mayor brevedad posible. Tambi\xe9n puede enviarnos algunas imagenes por whatsapp o correo electr\xf3nico, si as\xed lo desea, saludos.  \ud83e\udd17")})).catch((function(e){alert(e.message)})).then((function(){e.handleReset()}))}});return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("h1",null,"Solicitud de presupuesto"),l.a.createElement("div",{className:"inputs__containerType2 divImagen1 "}),l.a.createElement("div",{className:"inputs__boxContainer"},l.a.createElement("div",{className:"inputs__container"},l.a.createElement("h3",null,"Por favor, ingrese los datos de origen \ud83d\ude03\ud83d\udeeb"),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"ciudadOrigen"},"Ciudad Origen"),l.a.createElement("input",{id:"ciudadOrigen",name:"ciudadOrigen",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.ciudadOrigen})),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"provinciaOrigen"},"Provincia"),l.a.createElement("input",{id:"provinciaOrigen",name:"provinciaOrigen",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.provinciaOrigen})),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"codigoPostalOrigen"},"C\xf3digo postal"),l.a.createElement("input",{id:"codigoPostalOrigen",name:"codigoPostalOrigen",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.codigoPostalOrigen}))),l.a.createElement("div",{className:"inputs__container"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"plantaDePisoOrigen"},"Planta del Piso"),l.a.createElement("input",{id:"plantaDePisoOrigen",name:"plantaDePisoOrigen",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.plantaDePisoOrigen})),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"interiorExteriorOrigen"},"Piso:"),l.a.createElement("select",{id:"interiorExteriorOrigen",name:"interiorExteriorOrigen",type:"select",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.interiorExteriorOrigen},l.a.createElement("option",{value:"Interior"},"Interior"),l.a.createElement("option",{value:"Exterior"},"Extererior"))),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"ascensorOrigen"},"Ascensor"),l.a.createElement("select",{id:"ascensorOrigen",name:"ascensorOrigen",value:e.values.ascensorOrigen,onChange:e.handleChange,onBlur:e.handleBlur},l.a.createElement("option",{value:"S\xed"},"S\xed"),l.a.createElement("option",{value:"No"},"No")))),l.a.createElement("div",{className:"inputs__containerType2"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"desmontaje"}," \xbfRequiere servicio de desmontaje de muebles? \ud83d\udee0\ufe0f\ud83e\uddf0\ud83d\udd28\ud83d\udd27"),l.a.createElement("select",{id:"desmontaje",name:"desmontaje",value:e.values.desmontaje,onChange:e.handleChange,onBlur:e.handleBlur},l.a.createElement("option",{value:"S\xed"},"S\xed"),l.a.createElement("option",{value:"No"},"No")))),l.a.createElement("div",{className:"inputs__containerType2 order2"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"materialDeEmbalaje"}," \xbfRequiere material de embalaje? Cajas, plastico de burbujas, etc.\ud83d\udce6\ud83d\udce6\ud83d\udce6"),l.a.createElement("select",{id:"materialDeEmbalaje",name:"materialDeEmbalaje",value:e.values.materialDeEmbalaje,onChange:e.handleChange,onBlur:e.handleBlur},l.a.createElement("option",{value:"No"},"No"),l.a.createElement("option",{value:"S\xed"},"S\xed")))),"S\xed"==e.values.materialDeEmbalaje?l.a.createElement("div",{className:"inputs__containerType2 order3"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"numeroDeCajas"},"N\xfamero de cajas aproximadas \ud83e\udd14\ud83d\udce6"),l.a.createElement("input",{id:"numeroDeCajas",name:"numeroDeCajas",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.numeroDeCajas}))):null,l.a.createElement("div",{className:"inputs__containerType2"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"numeroDeMuebles"},"\xbfCuantos muebles son en total? \ud83e\ude91\ud83c\udfb8\ud83d\udcfa\ud83d\udecb\ufe0f"),l.a.createElement("input",{id:"numeroDeMuebles",name:"numeroDeMuebles",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.numeroDeMuebles}))),l.a.createElement("div",{className:"inputs__containerType2 order4"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"ayudaEmbaje"},"\xbfRequiere ayuda con el embalaje de la mudanza? \ud83d\udce6\ud83d\ude4b\u200d\u2642\ufe0f\ud83d\udc81\ud83c\udffd\u200d\u2640\ufe0f"),l.a.createElement("select",{id:"ayudaEmbalaje",name:"ayudaEmbalaje",value:e.values.ayudaEmbalaje,onChange:e.handleChange,onBlur:e.handleBlur},l.a.createElement("option",{value:"S\xed"},"S\xed"),l.a.createElement("option",{value:"No"},"No")))),l.a.createElement("div",{className:"inputs__containerType2 order6"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"descripcionMuebles"},"Por favor, agrega alguna descripci\xf3n de tus muebles u observaci\xf3n \ud83e\ude91\ud83d\udecb\ufe0f\ud83d\udeaa\ud83d\udc40"),l.a.createElement("textarea",{id:"descripcionMuebles",name:"descripcionMuebles",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.descripcionMuebles})))),l.a.createElement("div",{className:"inputs__boxContainer"},l.a.createElement("div",{className:"inputs__container"},l.a.createElement("h3",null," Ahora vamos con los datos de destino \ud83d\ude0e\ud83d\udeec"),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"ciudadDestino"},"Ciudad"),l.a.createElement("input",{id:"ciudadDestino",name:"ciudadDestino",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.ciudadDestino})),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"provinciaDestino"},"Provincia"),l.a.createElement("input",{id:"provinciaDestino",name:"provinciaDestino",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.provinciaDestino})),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"codigoPostalDestino"},"C\xf3digo postal"),l.a.createElement("input",{id:"codigoPostalDestino",name:"codigoPostalDestino",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.codigoPostalDestino}))),l.a.createElement("div",{className:"inputs__container"},l.a.createElement("h3",null,"Infomaci\xf3n valiosa \ud83c\udfd9\ufe0f\ud83d\udce6\ud83e\uddf3\ud83c\udfec"),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"plantaDePisoDestino"},"Planta del Piso"),l.a.createElement("input",{id:"plantaDePisoDestino",name:"plantaDePisoDestino",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.plantaDePisoDestino})),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"interiorExteriorDestino"},"Piso:"),l.a.createElement("select",{id:"interiorExteriorDestino",name:"interiorExteriorDestino",type:"select",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.interiorExteriorDestino},l.a.createElement("option",{value:"Interior"},"Interior"),l.a.createElement("option",{value:"Exterior"},"Extererior"))),l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"ascensorDestino"},"Ascensor"),l.a.createElement("select",{id:"ascensorDestino",name:"ascensorDestino",value:e.values.ascensorDestino,onChange:e.handleChange,onBlur:e.handleBlur},l.a.createElement("option",{value:"S\xed"},"S\xed"),l.a.createElement("option",{value:"No"},"No")))),l.a.createElement("div",{className:"inputs__containerType2"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"montaje"},"\xbfRequiere servicio de montaje de muebles? \ud83d\udee0\ufe0f\ud83e\uddf0\ud83d\udd28\ud83d\udd27"),l.a.createElement("select",{id:"montaje",name:"montaje",value:e.values.montaje,onChange:e.handleChange,onBlur:e.handleBlur},l.a.createElement("option",{value:"S\xed"},"S\xed"),l.a.createElement("option",{value:"No"},"No")))),l.a.createElement("div",{className:"inputs__containerType2"}),l.a.createElement("div",{className:"inputs__containerType2"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"nombre"},"Por favor, escribe tu nombre \ud83d\udcc3\u270d\ufe0f"),l.a.createElement("input",{id:"nombre",name:"nombre",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.nombre}))),l.a.createElement("div",{className:"inputs__containerType2"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",null," \xbfPor que medio prefiere ser contactado? \ud83d\udcf2\u260e\ud83d\udced"),l.a.createElement("select",{id:"medioDeContacto",name:"medioDeContacto",value:e.values.medioDeContacto,onChange:e.handleChange,onBlur:e.handleBlur},l.a.createElement("option",{value:"0"},"Elegir..."),l.a.createElement("option",{value:"Whatsapp"},"Whatsapp"),l.a.createElement("option",{value:"Llamada telef\xf3nica"},"Llamada telef\xf3nica"),l.a.createElement("option",{value:"Email"},"Email")))),"Email"==e.values.medioDeContacto?l.a.createElement("div",{className:"inputs__containerType2"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"email"},"Por favor, escribe tu email \ud83e\udd17\ud83d\udced"),l.a.createElement("input",{id:"email",name:"email",type:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.touched.email&&e.errors.email?l.a.createElement("div",null,e.errors.email):null)):l.a.createElement("div",{className:"inputs__containerType2"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("label",{htmlFor:"numeroDeContacto"},"Por favor, escribe tu n\xfamero:\ud83d\udcf1\ud83d\udcde"),l.a.createElement("input",{id:"numeroDeContacto",name:"numeroDeContacto",type:"number",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.numeroDeContacto})))),l.a.createElement("button",{type:"submit"},"Enviar solicitud"),l.a.createElement("div",{className:"inputs__containerType2 footImage"}))};var J=function(){return Object(n.useEffect)((function(){window.scrollY>0&&window.scrollTo(0,0)}),[]),l.a.createElement("div",{className:"presupuesto"},l.a.createElement(Y,null))};t(426),t(427);var V=function(){return l.a.createElement("div",{className:"otrosServivios"})},Q=(t(428),t(114)),K=Object(Q.withScriptjs)(Object(Q.withGoogleMap)((function(e){return l.a.createElement(Q.GoogleMap,{defaultZoom:15,defaultCenter:{lat:41.431563081928026,lng:2.177535197561341}},l.a.createElement(Q.Marker,{name:"Mudanzas G\xe9nesis",title:"Mudanzas desde Barcelona",position:{lat:41.379228,lng:2.152531}}),l.a.createElement(Q.Marker,null))}))),Z="https://maps.googleapis.com/maps/api/js?v=3.exp&key=".concat("AIzaSyB3zULN57njk5j0niq0JzN1UEwGbbl3a2g");var X=function(){return l.a.createElement("div",{className:"contacto"},l.a.createElement("div",{className:"imageContacto"}),l.a.createElement("div",{className:"contact__map"},l.a.createElement(K,{googleMapURL:Z,containerElement:l.a.createElement("div",{style:{height:"400px",flex:"1",marginBottom:"20px",width:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}}),loadingElement:l.a.createElement("p",null,"Cargando")})),l.a.createElement(G,null))},$=(t(536),Object(n.createContext)()),ee=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement($.Provider,{value:Object(n.useReducer)(a,t)},r)},ae=function(){return Object(n.useContext)($)};var te=function(){var e=ae(),a=Object(i.a)(e,2),t=(a[0].user,a[1],Object(O.f)()),r=Object(n.useState)(""),o=Object(i.a)(r,2),c=o[0],s=o[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],E=u[1];return l.a.createElement("div",{className:"loginOffice"},l.a.createElement("h1",null,"Iniciar sesi\xf3n"),l.a.createElement("form",null,l.a.createElement("label",null,"Email:"),l.a.createElement("input",{id:"email",name:"email",type:"email",value:c,onChange:function(e){return s(e.target.value)},required:!0}),l.a.createElement("label",null,"Contrase\xf1a:"),l.a.createElement("input",{id:"password",name:"password",type:"password",value:d,onChange:function(e){return E(e.target.value)},required:!0}),l.a.createElement("button",{className:"loginButton",type:"submit",onClick:function(e){e.preventDefault(),F.signInWithEmailAndPassword(c,d).then((function(e){console.log(e),e&&t.push("/office")})).catch((function(e){return alert(e.message)}))}},"Iniciar sesi\xf3n")))};t(537),t(538);var ne=function(){var e=ae(),a=Object(i.a)(e,2),t=a[0].user,n=(a[1],Object(O.f)());return l.a.createElement("div",{className:"office"},t?l.a.createElement("div",null,l.a.createElement("h1",null,"Hola I\xf1aki, bienvenido. Aqu\xed se listaran las solicitudes de presupuesto"),l.a.createElement("button",{className:"loginButton",type:"submit",onClick:function(){F.signOut().then((function(e){console.log(e),e&&n.push("/")}))}}," Cerrar sesi\xf3n"),l.a.createElement("div",{style:{height:400,width:"100%"}})):l.a.createElement("div",null,"Estas en el lugar equivocado \ud83d\ude12\ud83d\udc40\ud83d\udc40\ud83d\udc40"))};t(539);var le=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:t?"popup":"popup closePopup"},l.a.createElement("div",{className:"popupDiv"}),l.a.createElement("div",{className:"popupText"},l.a.createElement("p",null,"Utilizamos cookies propias y de terceros para obtener datos estad\xedsticos de la navegaci\xf3n de nuestros usuarios y mejorar nuestros servicios. Si acepta o contin\xfaa navegando, consideramos que acepta su uso.",l.a.createElement("br",null),l.a.createElement("button",{className:"aceptarCookies",onClick:function(){return r(!t)}},"Continuar navegando"))))},re=(t(540),t(597)),oe=t(598),ce=t(595),ie=t(284),se=t.n(ie),me=t(285),ue=t.n(me),de=t(286),Ee=t.n(de),pe=Object(x.a)((function(e){return{speedDial:{position:"fixed","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:e.spacing(2),right:e.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:e.spacing(2),left:e.spacing(2)}}}})),ve=[{icon:l.a.createElement(I.a,null),name:"WhatsApp",path:"https://wa.me/34698632639"},{icon:l.a.createElement(se.a,null),name:"Llamar",path:"tel:+34678567876"},{icon:l.a.createElement(ue.a,null),name:"Email",path:"mailto:iallendeapodaca@gmail.com"}];function he(){var e=pe(),a=l.a.useState(!1),t=Object(i.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)(0),s=Object(i.a)(c,2),m=s[0],u=s[1],d=Object(n.useState)(!1),E=Object(i.a)(d,2),p=E[0],v=E[1],h=document.getElementById("message"),g="contactButtons__message contactButtons__messageActive";Object(n.useEffect)((function(){var e=setInterval((function(){u((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[]),5===m&&(h.className=g),p||25!==m||(h.className=g),p||55!==m||(h.className=g);var b=function(){o(!1)};return l.a.createElement("div",{className:"contactButtons"},l.a.createElement(re.a,{ariaLabel:"SpeedDial example",className:e.speedDial,icon:l.a.createElement(oe.a,null),onClose:b,onOpen:function(){o(!0)},open:r,direction:"left"},ve.map((function(e){return l.a.createElement(ce.a,{key:e.name,icon:e.icon,href:e.path,tooltipTitle:e.name,onClick:b})}))),l.a.createElement("div",{id:"message",className:p?"contactButtons__message contactButtons__messageActive":"contactButtons__message"},l.a.createElement(Ee.a,{className:"closeIcon",onClick:function(){return v(!p)}}),l.a.createElement("p",null,"\ud83d\ude0aHola, bienvenidos y bienvenidas a nuestro portal web, es un gusto para nosotros poder servirte. Puedes dejarnos tus comentarios y/o contactarnos por el medio que m\xe1s gustes. Un saludo. ",l.a.createElement("br",null)," \ud83d\udcf2\u260e\ud83d\udced\ud83d\udc47")))}var ge=function(){var e=ae(),a=Object(i.a)(e,2);Object(c.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){F.onAuthStateChanged((function(e){console.log("THE USER IS  >>>>",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(j,null),l.a.createElement(he,null),l.a.createElement(le,null),l.a.createElement(O.c,null,l.a.createElement(O.a,{path:"/",exact:!0,component:U}),l.a.createElement(O.a,{path:"/presupuesto",component:J}),l.a.createElement(O.a,{path:"/otros-servicios",component:V}),l.a.createElement(O.a,{path:"/contacto",component:X}),l.a.createElement(O.a,{path:"/login-office",component:te}),l.a.createElement(O.a,{path:"/office",component:ne}))))},be=t(199),fe=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(be.a)(Object(be.a)({},e),{},{user:a.user});default:return e}};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ee,{initialState:{user:null},reducer:fe},l.a.createElement(ge,null))),document.getElementById("root"))}},[[315,1,2]]]);
//# sourceMappingURL=main.71d29149.chunk.js.map