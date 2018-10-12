function perkelkPaveikslaKairen() {
    let pav = document.querySelector("img");
    pav.setAttribute("class", "pavkaireje");
    pasleptiApatiniPaveiksla();
}

function perkelkPaveikslaDesinen() {
    let pav = document.querySelector("img");
    pav.setAttribute("class", "pavdesineje");
    pasleptiApatiniPaveiksla();
}

function paslepkPaveiksla() {
// 1 variantas
    //    let pav = document.querySelector("img");
//    pav.setAttribute("class", "paslepti");
    
    // 2 variantas
    let pav = document.getElementsByTagName("img");
    for(i = 0; i < pav.length; i++){
        pav[i].setAttribute("class", "paslepti");
    }
}

function nukelkPaveikslaPoPastraipomis() {
    paslepkPaveiksla();
    let img = document.getElementsByClassName("apatinis");
    
    console.log(img[0]);
    console.log(img.length)
    
    
    
    
    
    if(img.length == 0){
        let newPav = document.createElement("img");
        newPav.setAttribute("src", "HTML5_logo_color.png");
        newPav.setAttribute("alt", "Paveiksliukas");
        newPav.setAttribute("class", "apatinis")
        let parent = document.querySelector("div");
        let lastParagraph = parent.lastElementChild;
        parent.insertBefore(newPav, lastParagraph);
    }
    
}

function atstatykPaveiksla() {

    let pav1 = document.querySelector("img");
    pav1.setAttribute("class", "namo");
    pasleptiApatiniPaveiksla();
}


function pasleptiApatiniPaveiksla() {
    let apatinis = document.getElementsByClassName("apatinis");
    apatinis[0].setAttribute("class", "paslepti");
}
