function pateiktiKomentara() {
   
//    let newLine = document.createElement("hr");
//    console.log(newLine);
//    newLine.setAttribute("class", "nauja")
//    let parent = document.querySelector("main");
//    let lastElement = parent.lastElementChild;
//    parent.insertBefore(newLine, lastElement);
    
    let newForm = document.createElement("form");
    //  console.log(newForm);
    newForm.setAttribute("class", "nauja");
    let parent = document.querySelector("main");
    parent.append(newForm);
    
    parent = document.querySelector("form");
    
    let newFieldVardasLabel = document.createElement("p");
    newFieldVardasLabel.textContent = "Vardas:";
    parent.append(newFieldVardasLabel);
    
    let newFieldVardas = document.createElement("input");
    newFieldVardas.setAttribute("name", "Vardas")
    parent.append(newFieldVardas);
    
    let newFieldTextAreaLabel = document.createElement("p");
    newFieldTextAreaLabel.textContent = "Komentaras:";
    parent.append(newFieldTextAreaLabel);
    
    let newFieldTextArea = document.createElement("textarea");
    newFieldTextArea.setAttribute("name", "Komentaras");
    parent.append(newFieldTextArea);
    
    newFieldTextAreaLabel = document.createElement("p");
    //newFieldTextAreaLabel.textContent = "Komentaras:";
    parent.append(newFieldTextAreaLabel);
    
    
    
    let newButton = document.createElement("button");
    newButton.setAttribute("type", "submit");
    newButton.setAttribute("class", "btn btn-primary")
    newButton.textContent = "Pateikti";
    newButton.setAttribute("onclick", "issokaLangas()"); 
    parent.append(newButton);
        
    
}

function issokaLangas(){
    alert("This page says:\n\nAciu uz Jūsų nuomonę.");
}
