/* initialisation du projet */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
/* declaration des variables */
html{
    --var-bg-color:#7743e9;
    --var-secondary-color:#6e51cf;
    --var-text-color:#fff;
    --var-text-color-dark:#333;
    --var-bg-light:#f0f4ff;
    --var-bg-dark:#d3c9f3;
}
body{
    font-family: cursive;
    background-color: var(--var-bg-light);
    color:var( --var-text-color-dark);
}
header{
    height:4rem;
    background-color: #fff;
    padding: 0 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    box-shadow: 0 o 10 rgba(0, 0, 0, 0.1 );
    justify-content: space-between;
    position:sticky;
    width: 100%;
    z-index: 1000;
    top:0;
}
header ul li{
    list-style-type: none;
}
header nav ul{
    display: flex;
    gap:1rem;
    align-items: center;
}
nav ul li a{
    text-decoration: none;
    color:var(--var-text-color-dark);
    font-weight: 500;
    transition: 0.3s ease-in-out;

}
nav ul li a:hover{
    color:var(--var-secondary-color);
}
header button{
    background-color: var(--var-secondary-color);
    color:#fff;
    border:none;
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    cursor:pointer ;
    font-weight: 500;
    transition: 0.3s ease-in-out;
}
header button:hover{
    background-color:var(--var-text-color) ;
    color:var(--var-text-color-dark);
    border:1px solid var(--var-secondary-color);
}
/* mise en forme de main */
main{
    padding: 2rem;
}
#hero{
    width: 100%;
    height: 70%;
    border-radius: 5px;
    background-color: var(--var-secondary-color);
    /* linear-gradient(
        90deg,
        var(--var-bg-color) 15%,
        var(--var-secondary-color) 100%

    ) ; */
    /* border:2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center; 
}
#hero .gauche h1{
    font-size: 3rem;
    font-weight: 900;
    color:#fff;
}
#hero .gauche p{
    font-size: clamp(1rem,2vw,1rem);
    color:#fff;
}
#hero button{
    background-color: #fff;
    color:var(--var-text-color-dark);
    border:none;
    margin-top: 1.4rem;
    padding: 0.9rem;
    border-radius: 0.23rem;
    cursor:pointer ;
}
.droite{
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
}
.droite img{
    width: 100%;
    z-index: 100;
    height: 100%;
    object-fit: cover;
}
.effets{
    /* background:red; */
    position: absolute;
    height: 100%;
    width: 100%;
}
.effets .circle{
    width: 100px;
    height: 50%;
   animation:animation 1s ease-in-out infinite ;
    border-radius: 50%;
    z-index: 10000;
    /* background-color: #d3c9f3; */
    /* position: absolute; */
}
.circle:nth-child(1){
    background-color:var(--var-bg-color) ;
    opacity: 0.5;
    border-radius: 50%;
    right:20px;
    height:100px ;
    animation-delay: 1s;
    position: absolute;
}
.circle:nth-child(2){
    background-color:var(--var-bg-color) ;
    /* opacity: 0.25; */
    opacity: 0.5;
    border-radius: 50%;
    left: 10px;
    animation-delay: 2s;
    height:100px ;
    position: absolute;
}
.circle:nth-child(3){
    background-color:var(--var-bg-color) ;
    opacity: 0.5;
    border-radius: 50%;
    bottom: 10px;
    left: 10px;
    animation-delay: 0.2s;
    height:100px ;
    position: absolute;
}
.circle:nth-child(4){
    background-color:var(--var-bg-color) ;
    opacity: 0.5;
    border-radius: 50%;
    bottom: 10px;
    right: 20px;
    height:100px ;
    animation-delay: 0.4s;
    position: absolute;
}
@keyframes animation{
    0% {transform:translateY(0);
    }
    100%{
        transform:translateY(100px) ;
    }
    50%{
        transform:translateX(100px) ;
    }
}
/* mise en forme de la section service */
#services {
    margin-top: 2rem;

}
#services h2{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    color:var(--var-text-color-dark)
}
.services_list{
    height:250px;
    overflow: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:30px;
    margin-top:3rem ;
    flex-wrap: wrap;
}
.card_service{
    flex:1;
    background-color: #fff;
padding: 1rem;
border-radius: 10px;
position: relative;

}
.card_service .icon{
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 15px;
    position: absolute;
    top:25px;

    background-color: #ccb6fa;
}
.card_service.icon i{
    font-size: rem;
    color:#fff;

}
card_service h3{
    margin-top: 1rem;
}
/* mise en forme de album */
#album{
    margin-top: 2rem;
}
#album h2{
    font-size: 2rem;
    font-weight: 900;
    color:var(--var-text-color-dark);
    text-align: center;
    margin-bottom: 1rem;
}
.photo{
display: grid;
grid-template-columns: repeat(4, 4fr);
flex-wrap: wrap;
gap:1rem;
}
.photo img{
   width: 100%; 
   height: 350px;
   border-radius: 10px;
}
#contact{
    margin-top: 3rem;
    display: flex;
    height: calc(100vw - 800px);
    background-color: #fff;
}
#contact .partie1, .partie2{
    flex: 1;
    padding: 1rem;
    border-radius: 8px;
    position: relative;
    margin-bottom: 1rem;

}
#contact .partie1{
    background-color:#ccb6fa ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 315px;
    overflow: auto;
    align-items: center;
    /* height: 100%; */

}
#contact h2{
    font-size: 2rem;
    font-weight: 900;
    color:var(--var-text-color-dark);
    margin-bottom: 1rem;
    align-items: center;
}
.partie2 form{
width: 90%;
margin: auto;
display: flex;flex-direction: column;
}
.partie2 form input, textarea{
    width: 100%;
    padding: 0.8em 1rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    outline:none;
    transition:0.3s;
    border-radius: 5px;
    font-size: 1.3rem;
}
.partie2 form textarea{
    height: 120px;
    /* animation: */
}
.partie2 form input:focus,textarea:focus{
   border:1px solid var(--var-bg-color); 
}
.partie2 form button{
    background-color:var(--var-text-color) ;
    border:1px solid #ccb6fa;
    border-radius: 0.3rem;
    transition: 0.35s;
    font-weight: 500;
    padding: 0.9rem 1rem;
    cursor:pointer ;
}
.partie2 form button:hover{
    background-color: #6e51cf;

}
footer{
    width: 100%;
    height: 100px;
    margin-top: 2rem;
    background-color: var(--var-text-color);
    align-items: center;
    justify-content: center;
    display: flex;
}
.reseaux{
    position: fixed;
    top:300px;
    padding: 0 10px;
    display: flex;
    gap:5px;
    flex-direction: column;
}
.reseaux img{
    border-radius: 50%;
    /* width: 50px; */
    height: 40px;
    z-index: 55100000;
    /* transition: 0.3s ease-in-out; */
    cursor: pointer;
}
.reseaux img:nth-child(1){
width: 50px;
height: 40px;
}
a{
    text-decoration: none;
}
.reseaux img:hover{
    background-color: #7743e9;
    border-radius: 50%;
    border: none;
    border:2px solid none;
}
/* nous sommes au mode responsive */
@media screen and (max-width:768px){
    /* body{
        background-color: red;
    } */
header nav{
    display:none;
}
#hero{
    flex-direction: column;
    min-height: 100vh;
    gap:10px;
}
#hero .gauche h1{
    font-size: 40px;
}
.gauche{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#contact{
    flex-direction: column;
    min-height: 100vh;
}
}
@media screen and (max-width:775px) {
    .photo{
        display: block;
        /* gap:30px; */
        /* flex-direction: column; */
    }
    .photo img{
        /* width: 90%; */
        object-fit: cover;
        margin: 20px;
    }
    
}