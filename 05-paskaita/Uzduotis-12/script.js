var laukas1 = document.getElementById("item1");
laukas1.addEventListener("focus", function (e){
    laukas1.style.backgroundColor = "yellow";
})
laukas1.addEventListener("blur", function (e){
    laukas1.style.backgroundColor = "";
})

var laukas2 = document.getElementById("item2");
laukas2.addEventListener("focus", function (e){
    laukas2.style.backgroundColor = "yellow";
})
laukas2.addEventListener("blur", function (e){
    laukas2.style.backgroundColor = "";
})