function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var n=r("8zd4h");const l=document.querySelector(".feedback-form"),i=document.querySelector('input[name="email"]'),u=document.querySelector('textarea[name="message"]'),s={email:"",message:""};try{const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(i.value=t.email,u.value=t.message),l.addEventListener("input",e(n)((function(e){s.email=i.value.trim(),s.message=u.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(s))}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),i.value="",u.value="",console.dir("event.turget = ",e.turget)}))}catch(e){console.log(e.name),console.log(e.message)}
//# sourceMappingURL=03-feedback.bb731a6f.js.map
