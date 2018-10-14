function iterptiPavadinima(){
    let newHeader = document.createElement("h2");
    newHeader.textContent = "Pavadinimas";
    let parent = document.querySelector("main");
    let pirmas = document.querySelector("p");
    parent.insertBefore(newHeader, pirmas);
}