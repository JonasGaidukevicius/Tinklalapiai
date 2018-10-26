//konstruktorius
function Reservation(email, reservation, from, to) {
    this.email = email;
    this.reservation = reservation;
    this.from = from;
    this.to = to;
}

var allReservations = [];

allReservations.push(new Reservation("jonas@pastas.lt", 123456, "Vilnius", "Venecija"));
allReservations.push(new Reservation("petras@pastas.lt", 654321, "Vilnius", "Palanga"));
allReservations.push(new Reservation("kazys@pastas.lt", 111111, "Vilnius", "Londonas"));

let formaPaieska = document.getElementById("rezervacija");
formaPaieska.addEventListener("submit", function (e) {
    e.preventDefault();
    let uzklausaEmail = e.target.elements.inputEmail3.value;

    console.log(uzklausaEmail);

    let uzklausaRezervacija = Number(e.target.elements.inputReservation.value);
    console.log(uzklausaRezervacija);

    filteredAllReservations = allReservations.filter(function (allReservations) {
        return allReservations.email === uzklausaEmail && allReservations.reservation === uzklausaRezervacija;
    })

    if (filteredAllReservations.length > 0) {
        alert(filteredAllReservations[0].from + " - " + filteredAllReservations[0].to);
    } else {
        alert("Patikrinkite savo el. paštą arba registracijos numerį");
    }

});
