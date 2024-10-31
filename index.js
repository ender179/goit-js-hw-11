import{S as l}from"./assets/vendor-qvgbjSeY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=async n=>{const t=`https://pixabay.com/api/?key=${46813700-d54068e337851aebc3c875554}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await fetch(t);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}catch(r){throw console.error("Fetch error:",r),r}},u=n=>{const t=document.querySelector(".gallery");if(t.innerHTML="",n.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}const r=n.map(o=>`  
<a href="${o.largeImageURL}">  
<div class="gallery-item">  
<img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />  
<div class="info">  
<p>Likes: ${o.likes}</p>  
<p>Views: ${o.views}</p>  
<p>Comments: ${o.comments}</p>  
<p>Downloads: ${o.downloads}</p>  
</div>  
</div>  
</a>  
`).join("");t.insertAdjacentHTML("beforeend",r)},c=n=>{iziToast.error({title:"Error",message:n,position:"topRight"})},f=new l(".gallery a"),p=document.querySelector(".js-search"),i=document.querySelector(".loader");p.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.elements.search.value.trim();if(t==="")return c("Please enter a search term!");i.classList.add("show");try{const r=await d(t);u(r),f.refresh()}catch{c("Failed to fetch images.")}finally{i.classList.remove("show")}});
//# sourceMappingURL=index.js.map
