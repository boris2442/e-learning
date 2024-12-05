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

