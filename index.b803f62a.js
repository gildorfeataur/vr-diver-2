const e=document.querySelector("body"),s=document.querySelector("header"),n=document.querySelector(".js-mob-menu"),o=document.querySelector(".js-menu-btn"),t=document.querySelectorAll(".js-nav-btn");for(let s of(o.addEventListener("click",()=>{e.classList.contains("isMobMenuOpen")?i():c()}),t))s.addEventListener("click",()=>{i()});const c=()=>{n.classList.add("isMobMenuOpen"),e.classList.add("isMobMenuOpen"),s.classList.add("isMobMenuOpen"),o.classList.add("isMobMenuOpen")},i=()=>{n.classList.remove("isMobMenuOpen"),e.classList.remove("isMobMenuOpen"),s.classList.remove("isMobMenuOpen"),o.classList.remove("isMobMenuOpen")};
//# sourceMappingURL=index.b803f62a.js.map