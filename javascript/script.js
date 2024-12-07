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
const link = document.querySelector("nav ul li a");
window.addEventListener("scroll", ()=>{
    if(window.scrollY>300){
        header.classList.add("scroll");
        link.classList.add("link");
    }else{
        header.classList.remove("scroll");
        link.classList.remove("link");
    }
});