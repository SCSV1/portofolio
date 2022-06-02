const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header"); 
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity")
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;


window.addEventListener('scroll', () => {
 let scroll = window.pageYOffset
 let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height)
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = 'translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)';
    image_container.style.transform = 'translateY(${scroll / (section_height + sectionY.top) * -50  50}px)';

    border.style.width = '${scroll / (sectionY.top + section_height) * 30}%';
})



function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links");
    
    burger.addEventListener("click", () => {
        
        nav.classList.toggle("nav-active");
        
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        
        burger.classList.toggle("toggle");
    });
    
}