window.addEventListener("scroll", function (e){
	window.scrollTo(0,0);
}, false);

//attend que la page soit charger
window.onload = function () {
    //create stars 
    let numberOfStars = 70;
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    //create cactus
    let numberOfCactus = 5;
    createCactus(numberOfCactus);
}

function createStar(){
    let sky = document.getElementById('stars');
    let star = document.createElement("div");
    star.className = "star";

    //position étoile dans le ciel
    star.style.top = (Math.random() * 100).toFixed(2) + "vh";
    star.style.left = (Math.random() * 100).toFixed(2) + "vw";

    //1 chance sur 10 de créer un big star
    if(Math.random() > 0.9){
        star.style.height = "3px";
        star.style.width = "3px";
    }

    //définition du temps qu'elles doivent vivre
    let timetoLiveStar = Math.ceil((Math.random() * (30000 - 5000) + 5000) / 1000) * 1000 ; //les étoiles vivent entre 5s et 30s
    star.style.animationDuration = timetoLiveStar.toString().slice(0, -3) + "s";
    setTimeout(function(){
        star.remove();
        createStar();
   },timetoLiveStar);
   sky.appendChild(star);
}

function createCactus(numberOfCactus, bigCactus = false){
    let land = document.getElementById('cactus-land');
    let cactus = document.createElement("img");
    let bottomCactus = Math.ceil(Math.random() * (40 - 3) + 3);
    cactus.setAttribute('alt', 'cactus');
    cactus.setAttribute('src', 'img/cactus.png');

    if(bigCactus){
        //creation GIGA cactus
        cactus.style.bottom = (bottomCactus + 20) + 'px';
    }else{
        cactus.style.bottom = bottomCactus + 'px';
    }
    
    // 1 chance sur 2 que l'image flip
    if(Math.round(Math.random())){
        cactus.style.transform = "scaleX(-1)";
    }

    
    //les cactus ont un peu d'espace par création 1s et 7s
    let timeBeforeCreateNewCactus = Math.ceil((Math.random() * (7000 - 1000) + 1000) / 1000) * 1000 ; 
    // création un gros cactus si déjà le cas avant alors non
    //image l'une sur l'autre 
    if(!bigCactus){
        if(Math.random() > 0.60){
            timeBeforeCreateNewCactus = 0;
            bigCactus = true;
        }else{
            bigCactus = false;
        }
    }
    setTimeout(function(){
        if(numberOfCactus > 0){
            numberOfCactus --;
            createCactus(numberOfCactus, bigCactus);
        }
   },timeBeforeCreateNewCactus);
    
    land.appendChild(cactus);
}
