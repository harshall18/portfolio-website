AOS.init({
    duration:1000,
    once:true,
    offset:120
});

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click",()=>{

    mobileMenu.classList.toggle("show");

});

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("show");

    });

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});