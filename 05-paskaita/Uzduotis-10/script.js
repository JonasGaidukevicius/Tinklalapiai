let kmi = 0;
let forma = document.querySelector("#kunoMasesIndeksas");
                                    
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.elements.ugis.value);
    let ugis = Number(e.target.elements.ugis.value);
    let svoris = Number(e.target.elements.svoris.value);
//    console.log(ugis);
//    console.log(svoris);
    if (ugis <= 0) {
        let newMessage = document.createElement("p");
        newMessage.textContent = "Ūgis negali būti neigiamas arba lygus 0";
        let parent = document.querySelector("div");
        parent.append(newMessage);
    } else if (svoris <= 5) {
        let newMessage = document.createElement("p");
        newMessage.textContent = "Svoris negali būti mažesnis už 5";
        let parent = document.querySelector("div");
        parent.append(newMessage);
    } else {
        kmi = svoris / Math.pow(ugis, 2);
        newMessage = document.createElement("p");
        newMessage.textContent = "Jūsų kūno masės indeksas yra: " + kmi;
        let parent = document.querySelector("div");
        parent.append(newMessage);
    }


});
