var atsitiktinisSkaicius = Math.floor(Math.random() * 10);

let forma = document.querySelector("#spejikas");
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.elements.spejimas.value);
    console.log(atsitiktinisSkaicius);
    if (atsitiktinisSkaicius == e.target.elements.spejimas.value) {
        let newMessage = document.createElement("p");
        newMessage.textContent = "Jūs atspėjote!";
        let parent = document.querySelector("div");
        parent.append(newMessage);
    } else if (atsitiktinisSkaicius > e.target.elements.spejimas.value) {
        let newMessage = document.createElement("p");
        newMessage.textContent = "Atsitiktinis skaičius yra didesnis.";
        let parent = document.querySelector("div");
        parent.append(newMessage);
    } else {
        let newMessage = document.createElement("p");
        newMessage.textContent = "Atsitiktinis skaičius yra mažesnis.";
        let parent = document.querySelector("div");
        parent.append(newMessage);
    }

})
