let forma = document.querySelector("#toDoList");
                                    
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let punktas = e.target.elements.toDoItem.value;
    console.log(punktas);
    
    let newToDoItem = document.createElement("li");
    newToDoItem.textContent = punktas;
    let parent = document.querySelector("ul");
    parent.append(newToDoItem);
   
});
