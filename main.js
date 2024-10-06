const nav=document.querySelector("nav")
const mobile_nav=document.querySelector("nav.mobile-nav")
const menu_icon=document.querySelector("div.menu-icon")
const close_icon=document.querySelector("div.close-icon")
const menu_cont=document.querySelector("div.mobile-menu-container")
window.addEventListener("scroll",()=>{
    if(window.scrollY>60){
        nav.classList.add("scrolled");
        mobile_nav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
        mobile_nav.classList.remove("scrolled");
    }
})
menu_icon.addEventListener("click",()=>{
    menu_cont.classList.add("active");

}
)
close_icon.addEventListener("click",()=>{
    menu_cont.classList.remove("active");
})