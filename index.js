import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c="46813700-d54068e337851aebc3c875554",l=async n=>{const o=`https://pixabay.com/api/?key=${c}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const s=await fetch(o);if(!s.ok)throw new Error("Network response was not ok");return(await s.json()).hits}catch(s){throw console.error("Fetch error:",s),s}},d=n=>{const o=document.querySelector(".gallery");if(o.innerHTML="",n.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}const s=n.map(t=>`
        <a href="${t.largeImageURL}">
            <div class="gallery-item">
                <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                <div class="info">
                    <p>Likes: ${t.likes}</p>
                    <p>Views: ${t.views}</p>
                    <p>Comments: ${t.comments}</p>
                    <p>Downloads: ${t.downloads}</p>
                </div>
            </div>
        </a>
    `).join("");o.insertAdjacentHTML("beforeend",s)},u=n=>{a.error({title:"Error",message:n,position:"topRight"})};document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".js-search"),o=document.querySelector(".loader"),s=document.querySelector(".gallery");if(!n){console.error("Форма з класом .js-search не знайдена");return}n.addEventListener("submit",async t=>{t.preventDefault();const e=t.currentTarget.elements.searchQuery.value.trim();if(!e){a.error({title:"Error",message:"Please enter a search query"});return}o.style.display="block",s.innerHTML="";try{const r=await l(e);o.style.display="none",r.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!"}):d(r.hits)}catch(r){o.style.display="none",a.error({title:"Error",message:r.message})}})});
//# sourceMappingURL=index.js.map
