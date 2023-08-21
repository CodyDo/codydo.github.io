(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{13:function(e,s,c){},26:function(e,s,c){},33:function(e,s,c){},34:function(e,s,c){},37:function(e,s,c){},38:function(e,s,c){},39:function(e,s,c){},40:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(20),i=c.n(a),n=(c(13),c(8)),l=c(11),r=c(12),o=(c(26),c(0));var j=function(){var e=Object(t.useState)(!1),s=Object(l.a)(e,2),c=s[0],a=s[1],i=Object(t.useState)(!0),n=Object(l.a)(i,2),j=n[0],d=n[1];function m(){a(!1)}function h(){window.innerWidth<=960?d(!1):d(!0)}return Object(t.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsx)(r.a,{smooth:!0,to:"#home",className:"navbar-logo",onClick:m,children:Object(o.jsx)("i",{className:"fas fa-compact-disc"})}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(){a(!c)},children:Object(o.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(o.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.a,{smooth:!0,to:"#home",className:"nav-links",onClick:m,children:"home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.a,{smooth:!0,to:"#aboutMe",className:"nav-links",onClick:m,children:"about"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.a,{smooth:!0,to:"#skills",className:"nav-links",onClick:m,children:"skills"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.a,{smooth:!0,to:"#projects",className:"nav-links",onClick:m,children:"projects"})}),!j&&Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-links",href:"mailto:d.codyx@gmail.com",target:"_blank",style:{textDecoration:"none"},rel:"noreferrer",children:"contact me"})})]}),j&&Object(o.jsx)("a",{className:"btn--outline",href:"mailto:d.codyx@gmail.com",target:"_blank",style:{textDecoration:"none"},rel:"noreferrer",children:"contact me"})]})})})},d=c(14),m=(c(33),"forward"),h="backward",b=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=Object(t.useState)(0),i=Object(l.a)(a,2),n=i[0],r=i[1],j=Object(t.useState)(e[n].split("")),d=Object(l.a)(j,2),b=d[0],x=d[1],O=Object(t.useState)(!1),u=Object(l.a)(O,2),v=u[0],p=u[1],g=Object(t.useRef)(h),f=Object(t.useRef)(),N=Object(t.useRef)();return Object(t.useEffect)((function(){var t=0;if(!v){return f.current=setInterval((function(){t>0?t-=1:g.current===m?function(){if(N.current>=e[n].length)return g.current=h,void(t=c);var s=e[n].split("");x(b.concat(s[N.current])),N.current=N.current+1}():function(){if(0===N.current){var s=n===e.length-1;return r(s?0:n+1),void(g.current=m)}var c=b.slice(0,b.length-1);x(c),N.current=b.length-1}()}),s),function(){clearInterval(f.current)}}}),[b,n,s,e,c,v]),{word:Object(o.jsx)("span",{className:"word ".concat(b.length?"full":"empty"),children:Object(o.jsx)("span",{children:b.length?b.join(""):"0"})}),start:function(){return p(!1)},stop:function(){clearInterval(f.current),p(!0)}}};var x=function(){var e=b(["a web developer","a ucla alumni","a software engineer","your next hire :)"],100,10).word;return Object(o.jsxs)("div",{className:"hero-container",children:[Object(o.jsx)("h1",{children:"Hey, I'm Cody!"}),Object(o.jsxs)("p",{children:["I'm ",e]}),Object(o.jsx)(d.a,{fill:"#f5f5f5",paused:!1,className:"hero-wave-back",options:{height:25,amplitude:45,speed:.25,points:4}}),Object(o.jsx)(d.a,{fill:"#f5f5f5",paused:!1,className:"hero-wave-mid",options:{height:15,amplitude:40,speed:.2,points:3}}),Object(o.jsx)(d.a,{fill:"#f5f5f5",paused:!1,className:"hero-wave-front",options:{height:15,amplitude:35,speed:.4,points:2}})]})};var O=function(){return Object(o.jsx)("div",{id:"home",children:Object(o.jsx)(x,{})})},u=(c(34),c(7)),v=c.n(u);c(37);var p=function(e){return Object(o.jsx)(v.a,{fraction:.5,children:Object(o.jsx)("div",{className:"titleContainer",children:e.text})})};var g=function(){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)(p,{text:"about"}),Object(o.jsx)("div",{className:"primary_container",children:Object(o.jsxs)(v.a,{children:[Object(o.jsx)("img",{src:"images/about.jpeg",alt:"portrait",title:"Cody Do",className:"img_container"}),Object(o.jsxs)("div",{className:"text_wrapper",children:[Object(o.jsx)("h1",{className:"title_container",children:"Hey there! \ud83d\udc4b"}),Object(o.jsxs)("h3",{className:"description_container",children:["I'm Cody Do, a graduate from UCLA with a degree in Computer Science! My past roles in campus and professional organizations have fostered my skills as a full-stack developer, though I have a strong preference for front-end development. I'm enthusiastic about my work, eager to tackle issues, and determined to create an impact. With my aid, projects have been efficiently completed on schedule and within budget.",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),"In my free time, I enjoy hiking, reading, and music. I'm always down to try something new! Wanna chat? Shoot me a message!"]}),Object(o.jsxs)("div",{className:"contact-container",children:[Object(o.jsx)("a",{className:"res-btn res-btn--outline res-btn--large",href:"files/CodyDo_Resume.pdf",target:"_blank",style:{textDecoration:"none"},children:"Resume"}),Object(o.jsxs)("div",{className:"icon-row",children:[Object(o.jsx)("a",{className:"icon-link-wrapper",href:"https://github.com/CodyDo",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("svg",{className:"icon-wrapper",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})}),Object(o.jsx)("a",{className:"icon-link-wrapper",href:"https://www.linkedin.com/in/cody-do/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("svg",{className:"icon-wrapper",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 192",children:Object(o.jsx)("path",{d:"M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"})})}),Object(o.jsx)("a",{className:"icon-link-wrapper",href:"https://www.instagram.com/codehduh/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("svg",{className:"icon-wrapper",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(o.jsx)("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})})]})]})]})]})})]})};var f=function(){return Object(o.jsx)("div",{id:"aboutMe",children:Object(o.jsx)(g,{})})};c(38);var N=function(){return Object(o.jsxs)("div",{class:"skills-container",children:[Object(o.jsx)(p,{text:"skills"}),Object(o.jsx)("div",{className:"skills-section",children:Object(o.jsx)(v.a,{right:!0,cascade:!0,duration:1300,fraction:.4,children:Object(o.jsxs)("div",{className:"skills-list",children:[Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-javascript-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"JavaScript"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-react-original"})}),Object(o.jsx)("div",{className:"skill-name",children:"ReactJS"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-python-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"Python"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-cplusplus-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"C++"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-docker-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"Docker"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-java-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"Java"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-nodejs-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"Node"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-firebase-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"Firebase"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-mongodb-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"MongoDB"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-git-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"Git"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-html5-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"HTML5"})]}),Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:Object(o.jsx)("i",{class:"devicon-css3-plain"})}),Object(o.jsx)("div",{className:"skill-name",children:"CSS"})]})]})})})]})};var k=function(){return Object(o.jsx)("div",{id:"skills",children:Object(o.jsx)(N,{})})};var w=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("li",{className:"cards__item",children:Object(o.jsxs)(n.b,{className:"cards__item__link",to:{pathname:e.path},target:"_blank",children:[Object(o.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(o.jsx)("img",{src:e.src,alt:"Project",title:e.title,className:"cards__item__img"})}),Object(o.jsxs)("div",{className:"cards__item__info",children:[Object(o.jsx)("h3",{className:"cards__item__title",children:e.title}),Object(o.jsx)("h5",{className:"cards__item__text",children:e.text}),e.gameLink?Object(o.jsx)("a",{className:"icon-link-wrapper",href:"https://codydo.github.io/doodle-jump",target:"_blank",rel:"noreferrer",style:{display:"flex",marginTop:"2%"},children:Object(o.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M16 12L10 16.3301V7.66987L16 12Z",fill:"currentColor"})]})}):null]})]})})})};c(39);var y=function(){return Object(o.jsx)("div",{className:"cards",children:Object(o.jsx)("div",{className:"cards__container",children:Object(o.jsxs)("div",{className:"cards__wrapper",children:[Object(o.jsx)(p,{text:"projects"}),Object(o.jsx)(v.a,{bottom:!0,duration:1300,fraction:.2,children:Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(w,{src:"images/harmony-project.png",text:"Partnered with Harmony Project to produce a cross-platform application using React Native, connecting children in underserved communities with music.",label:"JavaScript",path:"https://github.com/lablueprint/harmony-project",title:"Harmony Project"}),Object(o.jsx)(w,{src:"images/doodle-jump.png",text:"A basic recreation of the classic Doodle Jump game. Built in JavaScript using the p5.js library.",label:"JavaScript",path:"https://github.com/CodyDo/doodle-jump",title:"Doodle Jump",gameLink:"https://codydo.github.io/doodle-jump"}),Object(o.jsx)(w,{src:"images/genome.png",text:"Python algorithm written in Colab that takes in known and unknown chromosomal FASTA data, producing statistical information based on matches.",label:"Python",path:"https://drive.google.com/drive/folders/1yLDm1E8DlCrb1FDm5xAg1ivjiZlUdvuc?usp=sharing",title:"Genomic Comparator"})]})}),Object(o.jsx)(v.a,{bottom:!0,fraction:.5,children:Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(w,{src:"images/kontagion.png",text:"A program where the player moves around a circular dish, gaining points by attacking and avoiding various creatures.",label:"C++",path:"https://github.com/CodyDo/CS-32/tree/master/Project%203",title:"Kontagion"}),Object(o.jsx)(w,{src:"images/goober-eats.png",text:"A program using real-world map data that simulates the successful creation and delivery of an online order using A* traversal and a hashmap data structure.",label:"C++",path:"https://github.com/CodyDo/CS-32/tree/master/Project%204",title:"Goober Eats"}),Object(o.jsx)(w,{src:"images/simple-shell.png",text:"A lightweight shell that is capable of I/O indirection, bash command execution, and spawning child processes.",label:"C",path:"https://github.com/CodyDo/CS-111/tree/master/lab1b",title:"Simple Shell"})]})})]})})})};var _=function(){return Object(o.jsx)("div",{id:"projects",children:Object(o.jsx)(y,{})})};var C=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(n.a,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(O,{}),Object(o.jsx)(f,{}),Object(o.jsx)(k,{}),Object(o.jsx)(_,{})]})})};i.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e858e6db.chunk.js.map