const lampadaLigada = document.getElementById("turnon");
const lampadaDesligada = document.getElementById("turnoff");
const lamp = document.getElementById("id-lamp");

function isLampBroken() {
    return lamp.src.indexOf ("quebrada") > -1
}

function lampadaOn() {
    if(!isLampBroken () ) {
    lamp.src = "src/imagens/ligada.jpg";
    }
}

function lampadaOff() {
    if(!isLampBroken()){
    lamp.src = "src/imagens/desligada.jpg";
    }
}

function lampBroken (){
    lamp.src = "src/imagens/quebrada.jpg";
}

lampadaLigada.addEventListener("click", lampadaOn);
lampadaDesligada.addEventListener("click", lampadaOff);

lamp.addEventListener("mouseover", lampadaOn);
lamp.addEventListener("mouseleave", lampadaOff);
lamp.addEventListener("dblclick", lampBroken
);


