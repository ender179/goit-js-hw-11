import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l="46813700-d54068e337851aebc3c875554",c=async s=>{const t=`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const n=await fetch(t);if(!n.ok)throw new Error("Network response was not ok");return await n.json()}catch(n){throw console.error("Fetch error:",n),n}},u=async s=>{try{const n=(await c(s)).hits}catch(t){console.error("Error fetching images:",t)}};u("nature");const d=s=>{const t=document.querySelector(".gallery");if(t.innerHTML="",s.length===0){m("Sorry, there are no images matching your search query. Please try again!");return}const n=s.map(o=>`
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
    `).join("");t.insertAdjacentHTML("beforeend",n)},m=s=>{a.error({title:"Error",message:s,position:"topRight"})};document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".js-search"),t=document.querySelector(".loader"),n=document.querySelector(".gallery");if(!s){console.error("Форма з класом .js-search не знайдена");return}s.addEventListener("submit",async o=>{o.preventDefault();const e=o.currentTarget.elements.searchQuery.value.trim();if(!e){a.error({title:"Error",message:"Please enter a search query"});return}t.style.display="block",n.innerHTML="";try{const r=await c(e);if(!r||!Array.isArray(r.hits)){a.error({title:"Error",message:"Unexpected response format"});return}r.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!"}):d(r.hits)}catch(r){a.error({title:"Error",message:r.message})}finally{t.style.display="none"}})});
//# sourceMappingURL=index.js.map
