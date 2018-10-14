let suma = 0;
let forma = document.querySelector("#sudetis");
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.elements.numberOne.value);
    suma =  Number(e.target.elements.numberOne.value) + Number(e.target.elements.numberTwo.value); 

    let newMessage = document.createElement("p");
    newMessage.textContent = "Result: " + suma;
    let parent = document.querySelector("div");
    parent.append(newMessage);
    
});
