(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,s,t){},13:function(e,s,t){},15:function(e,s,t){},17:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),i=t(5),n=t.n(i),r=(t(12),t(13),t(7)),j=t(4),d=t.n(j),l=t(6),o=t(2),b=(t(15),t(0));var u=function(e){var s=e.temp,t=e.pressure,a=e.humidity,i=e.weatherType,n=e.name,r=e.speed,j=e.country,d=e.sunset,l=Object(c.useState)(""),u=Object(o.a)(l,2),h=u[0],m=u[1];Object(c.useEffect)((function(){if(i)switch(i){case"Clouds":m("wi-day-cloudy");break;case"Haze":m("wi-fog");break;case"Clear":m("wi-day-sunny");break;case"Mist":m("wi-dust");break;case"Rain":m("wi-day-rain");case"Smoke":m("wi-smoke")}}),[i]);var p=new Date(1e3*d),x="".concat(p.getHours(),":").concat(p.getMinutes());return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("article",{className:"widget",children:[Object(b.jsx)("div",{className:"weatherIcon",children:Object(b.jsx)("i",{className:"wi ".concat(h)})}),Object(b.jsxs)("div",{className:"weatherInfo",children:[Object(b.jsx)("div",{className:"temperature",children:Object(b.jsxs)("span",{children:[s,"\xb0"]})}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("div",{className:"weatherCondition",children:i}),Object(b.jsxs)("div",{className:"place",children:[n,",",j]})]})]}),Object(b.jsx)("div",{className:"date",children:(new Date).toLocaleString()}),Object(b.jsxs)("div",{className:"extra-temp",children:[Object(b.jsxs)("div",{className:"temp-info-minmax",children:[Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"wi wi-sunset"})}),Object(b.jsxs)("p",{className:"extrs-info-leftside",children:[x," ",Object(b.jsx)("br",{}),"Sunset"]})]}),Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"wi wi-humidity"})}),Object(b.jsxs)("p",{className:"extrs-info-leftside",children:[a," ",Object(b.jsx)("br",{}),"Humidity"]})]})]}),Object(b.jsxs)("div",{className:"temp-info-minmax",children:[Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"wi wi-rain"})}),Object(b.jsxs)("p",{className:"extrs-info-leftside",children:[t," ",Object(b.jsx)("br",{}),"Pressure"]})]}),Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"wi wi-strong-wind"})}),Object(b.jsxs)("p",{className:"extrs-info-leftside",children:[r,Object(b.jsx)("br",{}),"Speed"]})]})]})]})]})})};var h=function(){var e=Object(c.useState)("Kolkata"),s=Object(o.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)({}),n=Object(o.a)(i,2),j=n[0],h=n[1],m=function(){var e=Object(l.a)(d.a.mark((function e(){var s,c,a,i,n,r,j,l,o,b,u,m,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=34837131135196e60a46c99f630f0eff"),e.next=4,fetch(s);case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,i=a.main,n=i.temp,r=i.pressure,j=i.humidity,l=a.weather[0].main,o=a.name,b=a.wind.speed,u=a.sys,m=u.country,p=u.sunset,h({temp:n,pressure:r,humidity:j,weatherType:l,name:o,speed:b,country:m,sunset:p}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){m()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"wrap",children:Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("input",{type:"search",placeholder:"search city..",id:"search",value:t,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("button",{className:"searchButton",onClick:m,children:"search"})]})}),Object(b.jsx)(u,Object(r.a)({},j))]})};var m=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(h,{})})};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9d8870dc.chunk.js.map