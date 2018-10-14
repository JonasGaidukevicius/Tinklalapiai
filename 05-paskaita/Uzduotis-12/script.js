/*let forma = document.querySelector("#sampleForm");
                                    
forma.addEventListener("focus", function (e) {
//    e.preventDefault();
    document.getElementById("item1").style.backgroundColor = "yellow"; 
    document.getElementById("item2").style.backgroundColor = "yellow"; 
    
   
});

forma.addEventListener("blur", function (e) {
//    e.preventDefault();
    document.getElementById("item1").style.backgroundColor = "white"; 
    document.getElementById("item2").style.backgroundColor = "white"; 
    
   
});*/

//let punktas1 = document.getElementById("item1");
//punktas1.addEventListener("focus", function(){
//    punktas1.backgroundColor = "yellow";
//})





//p.addEventListener("click", function(){
//p.style.color = "red";



var forma = document.getElementById("sampleForm");
forma.addEventListener("focus", myFocusFunction, true);
forma.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
    document.getElementById("item1").style.backgroundColor = "yellow";
    document.getElementById("item2").style.backgroundColor = "yellow";
}
}

function myBlurFunction() {
    document.getElementById("item1").style.backgroundColor = "";
    document.getElementById("item2").style.backgroundColor = "";
}