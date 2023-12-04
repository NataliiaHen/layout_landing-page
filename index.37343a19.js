document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".page__section"),t=document.querySelector(".header__title"),n=!0;function o(){n?(t.style.transform="translateX(0)",n=!1):e.forEach(function(e){e.getBoundingClientRect().top<window.innerHeight-100&&(e.style.opacity="1",e.style.transform="translateY(0)")})}// Initial check in case some blocks are already in the viewport
o(),// Listen for scroll events
window.addEventListener("scroll",o)});//# sourceMappingURL=index.37343a19.js.map

//# sourceMappingURL=index.37343a19.js.map
