const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");function r(){t.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}d.setAttribute("disabled",!0);let a=null;e.addEventListener("click",(()=>{e.setAttribute("disabled",!0),d.removeAttribute("disabled"),a=setInterval((()=>{r(),e.setAttribute("disabled",!0),d.removeAttribute("disabled")}),1e3)})),d.addEventListener("click",(()=>{clearInterval(a),e.removeAttribute("disabled"),d.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.8b56710a.js.map
