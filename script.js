
(function(){
const bgMenus = document.getElementsByClassName("hamburger")[0];
bgMenus.addEventListener("click",()=>{
	document.getElementById("hamburger").classList.toggle("is-active");
})
})();