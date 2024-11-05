import{i,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="46813700-d54068e337851aebc3c875554",c=async s=>{const r=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const n=await fetch(r);if(!n.ok)throw new Error("Network response was not ok");return await n.json()}catch(n){throw n}},d=async s=>{try{const n=(await c(s)).hits}catch(r){console.error("Error fetching images:",r)}};d("nature");const m=s=>{const r=document.querySelector(".gallery");if(r.innerHTML="",s.length===0){y("Sorry, there are no images matching your search query. Please try again!");return}const n=s.map(o=>`
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
    `).join("");r.insertAdjacentHTML("beforeend",n)},y=s=>{i.error({title:"Error",message:s,position:"topRight"})};document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".js-search"),r=document.querySelector(".loader"),n=document.querySelector(".gallery");if(!s){console.error("Форма з класом .js-search не знайдена");return}let o=new l(".gallery a");s.addEventListener("submit",async e=>{e.preventDefault();const t=e.currentTarget.elements.searchQuery.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query"});return}r.style.display="block",n.innerHTML="";try{const a=await c(t);if(!a||!Array.isArray(a.hits)){i.error({title:"Error",message:"Unexpected response format"});return}a.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(m(a.hits),o.refresh())}catch(a){i.error({title:"Error",message:a.message})}finally{r.style.display="none"}})});
//# sourceMappingURL=index.js.map
