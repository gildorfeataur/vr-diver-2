document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("body"),t=document.querySelector("header"),n=document.querySelector(".js-mob-menu"),s=document.querySelector(".js-menu-btn"),o=document.querySelectorAll(".js-nav-btn");for(let t of(s.addEventListener("click",()=>{e.classList.contains("isMobMenuOpen")?c():i()}),o))t.addEventListener("click",e=>{e.preventDefault(),function(e){let t=document.getElementById(e),n=t.getBoundingClientRect().top+window.scrollY-55;t&&window.scrollTo({top:n,behavior:"smooth"})}(t.getAttribute("href").substr(1)),c()});let i=()=>{n.classList.add("isMobMenuOpen"),e.classList.add("isMobMenuOpen"),t.classList.add("isMobMenuOpen"),s.classList.add("isMobMenuOpen")},c=()=>{n.classList.remove("isMobMenuOpen"),e.classList.remove("isMobMenuOpen"),t.classList.remove("isMobMenuOpen"),s.classList.remove("isMobMenuOpen")}});
//# sourceMappingURL=index.d2580245.js.map