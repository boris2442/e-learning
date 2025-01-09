const titre=document.getElementById("title");
new Typewriter(titre,
    {
        loop:true,
        delay:150
        // deleteSpeed:1000
    })
    // typewriter
    .typeString("Bienvenue chez Boris Fashion")
    .pauseFor(2000)
    .deleteAll(100)
    .pauseFor(2000)
    .typeString(" <span style='fontFamily:'parisienne'' >Votre fournisseur par excellence   en matiere du shopping </span>")
    .pauseFor(1000)
    .start();

// programme concernant uniquement le header

const header =document.querySelector("header");
const link = document.querySelectorAll("nav>ul>li>a");
window.addEventListener("scroll", ()=>{
    if(window.scrollY>300){
        header.classList.add("scroll");
        link.forEach(link => {
            link.classList.add("link"); // Ajouter la classe "link" à tous les <a>
          });

    }else{
        header.classList.remove("scroll");
        link.forEach(link => {
            link.classList.remove("link"); // Supprimer la classe "link" de tous les <a>
          });
        // link.classList.remove("link");
    }
});


// partie destinee a la librairie scrollreveal

const sr=ScrollReveal({
    duration:1500,
    origin:"top",
    distance:"30px",
    reset:true
})

sr.reveal(".fotter-text, .contact, .album, .services, .reseaux, .hero", {interval:200})



// partie du code reservee au burger

const burger=document.querySelector(".bars");
const navigation=document.querySelector("header ul");
const rem=document.querySelector(".remov")
burger.addEventListener("click", ()=>{
    navigation.classList.toggle("active")
     navigation.style.transition='1s ease-in-out'
 

})



window.addEventListener("scroll", ()=>{
    navigation.classList.remove("active")
    navigation.style.transition='1s ease-in-out'
})


const sections=document.querySelectorAll("section");

const scrollActive=()=>{
    sections.forEach(section=>{
   let top=section.offsetTop;
   
   let height=section.offsetHeight;
   
   let id=section.getAttribute("id");
   
   let scrolls=window.scrollY;
   if(scrolls>=top-250 && scrolls<top + height){
    link.forEach(links=>{
        links.classList.remove("active-scroll")
    })
    let recuperationId=document.querySelector(`header ul li a[href*=${id}]`)
    recuperationId.classList.add("active-scroll")
   }
    })
}

window.addEventListener("scroll", scrollActive);

const dark=document.querySelector(".dark");
