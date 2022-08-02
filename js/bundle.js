(()=>{"use strict";function e(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}window.addEventListener("DOMContentLoaded",(function(){const t=setTimeout((()=>e(".modal",t)),3e5);(function(e,t,n,o){let s=document.querySelectorAll(e),a=document.querySelectorAll(t),r=document.querySelector(n);function c(){a.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(o)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a[e].classList.add("show","fade"),a[e].classList.remove("hide"),s[e].classList.add(o)}c(),i(),r.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n==e&&(c(),i(t))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(e,t,n){const o=document.querySelectorAll(e),s=document.querySelector(t);function a(){s.classList.add("hide"),s.classList.remove("show"),document.body.style.overflow=""}function r(){s.classList.add("show"),s.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(n)}o.forEach((e=>{e.addEventListener("click",(()=>r()))})),s.addEventListener("click",(e=>{e.target!==s&&""!=e.target.getAttribute("data-close")||a()})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&s.classList.contains("show")&&a()})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(r(),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",t),function(e,t){function n(e){return e>=0&&e<10?"0"+e:e}!function(e,t){const o=document.querySelector(e),s=o.querySelector("#days"),a=o.querySelector("#hours"),r=o.querySelector("#minutes"),c=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/864e5),o=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60);return{total:t,days:n,hours:Math.floor(t/36e5%24),minutes:s,seconds:o}}(t);s.innerHTML=n(e.days),a.innerHTML=n(e.hours),r.innerHTML=n(e.minutes),c.innerHTML=n(e.seconds),e.total<=0&&clearInterval(i)}l()}(e,t)}(".timer","2022-10-11"),function(){class e{constructor(e,t,n,o,s,a){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s;for(var r=arguments.length,c=new Array(r>6?r-6:0),i=6;i<r;i++)c[i-6]=arguments[i];this.classes=c,this.parent=document.querySelector(a),this.transfer=60,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n                </div>\n            `,this.parent.append(e)}}(async function(e){let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:n,altimg:o,title:s,descr:a,price:r}=t;new e(n,o,s,a,r,".menu .container").render()}))})),new e("img/tabs/vegy.jpg","vegy",'Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',9,".menu .container").render(),new e("img/tabs/post.jpg","post",'Меню "Постное"',"Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",14,".menu .container").render(),new e("img/tabs/elite.jpg","elite","Меню “Премиум”","В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан! С возможностью выбора кухни!",21,".menu .container").render()}(),function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,a;function r(){e.textContent=t&&n&&o&&s&&a?"female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*s)*a):Math.round((88.36+13.4*o+4.8*n-5.7*s)*a):"____"}function c(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function i(e,n){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(a=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),r()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":s=+t.value}r()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),r(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(t,n){function o(t){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),e(".modal",n);const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${t}</div>\n            </div>\n        `,document.querySelector(".modal").append(s),setTimeout((()=>{s.remove(),o.classList.add("show"),o.classList.remove("hide"),function(e){const t=document.querySelector(".modal");t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}()}),4e3)}document.querySelectorAll(t).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();let n=document.createElement("img");n.src="icons/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const s=new FormData(t);(async(e,t)=>{let n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((e=>{console.log(e),o("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{o("Что-то пошло не так...")})).finally((()=>{t.reset()}))}))}))}("form",t),function(e){let{contailner:t,slide:n,nextArrow:o,prevArrow:s,totalCounter:a,currentCounter:r,wrapper:c,field:i}=e,l=0,d=1;const u=document.querySelectorAll(n),m=document.querySelector(t),h=document.querySelector(s),g=document.querySelector(o),f=document.querySelector(a),v=document.querySelector(r),y=document.querySelector(c),_=window.getComputedStyle(y).width,p=document.querySelector(i);u.length<10?(f.textContent=`0${u.length}`,v.textContent=`0${d}`):(f.textContent=u.length,v.textContent=d),p.style.width=100*u.length+"%",p.style.display="flex",p.style.transition="0.5s all",y.style.overflow="hidden",u.forEach((e=>{e.style.width=_})),m.style.position="relative";const w=document.createElement("ol"),L=[];w.classList.add("carousel-indicators"),m.append(w);for(let e=0;e<u.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.classList.add("dot"),0==e&&(t.style.opacity=1),w.append(t),L.push(t)}function S(e){return+e.replace(/\D/g,"")}g.addEventListener("click",(()=>{l==S(_)*(u.length-1)?l=0:l+=S(_),p.style.transform=`translateX(-${l}px)`,d==u.length?d=1:d++,u.length<10?v.textContent=`0${d}`:v.textContent=d,L.forEach((e=>e.style.opacity=".5")),L[d-1].style.opacity=1})),h.addEventListener("click",(()=>{0==l?l=S(_)*(u.length-1):l-=S(_),p.style.transform=`translateX(-${l}px)`,1==d?d=u.length:d--,u.length<10?v.textContent=`0${d}`:v.textContent=d,L.forEach((e=>e.style.opacity=".5")),L[d-1].style.opacity=1})),L.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");d=t,l=S(_)*(t-1),p.style.transform=`translateX(-${l}px)`,u.length<10?v.textContent=`0${d}`:v.textContent=d,L.forEach((e=>e.style.opacity=".5")),L[d-1].style.opacity=1}))}))}({contailner:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})();
//# sourceMappingURL=bundle.js.map