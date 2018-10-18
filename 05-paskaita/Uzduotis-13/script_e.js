let body = document.querySelector("body");

let selector = document.getElementById("id_of_select");
selector.addEventListener('click', changeBackgroundImage);

function changeBackgroundImage() {
    let value = selector.selectedIndex;
    if (value == 0) {
        body.style.backgroundImage = "url('vasara.jpg')";
    } else if (value == 1) {

        body.style.backgroundImage = "url('ruduo.jpg')";
    } else if (value == 2) {

        body.style.backgroundImage = "url('ziema.jpg')";

    } else if (value == 3) {

        body.style.backgroundImage = "url('pavasaris.jpg')";

    }

}
