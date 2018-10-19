var balance = 300;

var opSumos = [];
var opTipai = [];

let forma = document.getElementById("el_bankas");
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let operacijosTipas = document.getElementById("id_of_select").selectedIndex;
    let opSuma = Number(e.target.elements.ivedimas.value);
    opSumos.push(opSuma);
    opTipai.push(operacijosTipas);
    switch (operacijosTipas) {
        case 0:
            balance = balance + opSuma;
            break;
        case 1:
            balance = balance - opSuma;
            break;
    }
    let pranesimas = document.getElementById("pranesimas");
    pranesimas.textContent = "Sąskaitoje yra: " + balance + " Eur.";
});



let mygtukas = document.getElementById("istorija");
mygtukas.addEventListener("click", function (e) {

    document.getElementById("ataskaita").style.visibility = "visible";

})

let filtroForma = document.getElementById("filtruoti");
filtroForma.addEventListener("click", function (e) {

    document.getElementById("ataskaita").style.visibility = "visible";



})