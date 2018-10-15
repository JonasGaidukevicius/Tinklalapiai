document.getElementById('mygtukas').addEventListener('click', show_selected);


function show_selected() {
    let selector = document.getElementById('id_of_select');
    let value = selector.selectedIndex;
    switch (value){
        case 0:
            document.querySelector("div").style.backgroundImage = "url('vasara.jpg')";
            break;
        case 1:
            document.querySelector("div").style.backgroundImage = "url('ruduo.jpg')";
            break;
        case 2:
            document.querySelector("div").style.backgroundImage = "url('ziema.jpg')";
            break;
        case 3:
            document.querySelector("div").style.backgroundImage = "url('pavasaris.jpg')";
            break;
    }
    
}