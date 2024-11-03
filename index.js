import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l="46813700-d54068e337851aebc3c875554",u=async n=>{const t=`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await fetch(t);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}catch(r){throw console.error("Fetch error:",r),r}},d=n=>{const t=document.querySelector(".gallery");if(t.innerHTML="",n.length===0){y("Sorry, there are no images matching your search query. Please try again!");return}const r=n.map(o=>`
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
    `).join("");t.insertAdjacentHTML("beforeend",r)},y=n=>{a.error({title:"Error",message:n,position:"topRight"})},f=document.querySelector(".js-search"),c=document.querySelector(".loader"),p=document.querySelector(".gallery");f.addEventListener("submit",async n=>{n.preventDefault();const t=n.currentTarget.elements.searchQuery.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search query"});return}c.style.display="block",p.innerHTML="";try{const r=await u(t);c.style.display="none",r.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!"}):d(r.hits)}catch(r){c.style.display="none",a.error({title:"Error",message:r.message})}});
//# sourceMappingURL=index.js.map
