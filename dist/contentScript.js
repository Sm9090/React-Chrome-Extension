(()=>{"use strict";function e(){["_ak8h","_ak8o","_ak8k"].forEach((function(e){var o=document.getElementsByClassName(e);if(o.length>0)for(var t=function(t){var n=o[t];console.log(n,"Element with class ".concat(e," logged")),n.style.filter="blur(8px)",n.addEventListener("mouseover",(function(){n.style.filter="blur(0px)"})),n.addEventListener("mouseout",(function(){n.style.filter="blur(8px)"}))},n=0;n<o.length;n++)t(n);else console.log("No elements found for class ".concat(e))}))}function o(){["_amie","x1i4ejaq","message-in","message-out"].forEach((function(e){var o=document.getElementsByClassName(e);if(console.log(o.length,"Elements found for class ".concat(e)),o)for(var t=function(t){var n=o[t];console.log(n,"Element with class ".concat(e," logged")),n.style.filter="blur(8px)",n.addEventListener("mouseover",(function(){n.style.filter="blur(0px)"})),n.addEventListener("mouseout",(function(){n.style.filter="blur(8px)"})),console.log("Blur and hover effect applied to:",n)},n=0;n<o.length;n++)t(n)}))}window.onload=function(){console.log("Content Script Loaded"),new MutationObserver((function(){e(),o()})).observe(document.body,{childList:!0,subtree:!0}),e(),o()}})();