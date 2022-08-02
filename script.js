console.log("JavaScript funguje!");

let vizualniHlavniOdstavec = document.querySelector(".hlavni-odstavec");
vizualniHlavniOdstavec.textContent = "Domovská stránka";

/*ukol č.1*/
let predstaveni = document.querySelector(".predstaveni-se");
predstaveni.style.color = "blue";

/*ukol č.2*/
let visualniMojeFoto = document.querySelector(".moje-foto");
visualniMojeFoto.src="img/druhe-foto.jpeg";

/*ukol č.3*/
let změnaVzdelani = document.querySelector(".vzdelani");
změnaVzdelani.textContent = "Školy";

/*ukol č.4   (?????)*/
/*let tlacitko = document.querySelector(".tlacitko1");
tlacitko.classList.add("zvyrazneny");      */  /*danou třídu vyměním? - přes className, ale já chci přidat - dám classList.add("")*/


/*bonus  - vezmu tlačítko*/

function pridejZvyrazneni() {
    let tlacitko = document.querySelector(".tlacitko1");
    tlacitko.classList.add("zvyrazneny"); 
}
