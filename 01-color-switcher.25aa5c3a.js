!function(){var t=document.body,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");n.disabled=!0;var a=null;e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,a=setInterval((function(){return t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){n.disabled=!0,e.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.25aa5c3a.js.map