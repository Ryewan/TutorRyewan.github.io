function BookNow(guestName,guestEmail,guestPax,guestRemarks) {
    let url = 'https://api.sheety.co/7b082e81fa04098c0e0bfe8408decc01/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax,
            remarks: guestRemarks
        }
    } 
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type":"application/json"
    }
  })
    .then((response) => response.json())
    .then(json => {
    // Do something with object
        console.log(json.bookings);
        alert(json.bookings.name + " sucessfully added!");
        
  });
}

window.addEventListener("load", function() {

    document.getElementById("bookNow").addEventListener("click", function(){
        let name = document.getElementById("guestName");
        let email = document.getElementById("guestEmail");
        let pax = document.getElementById("guestPax");
        let remarks = document.getElementById("guestRemarks");

        BookNow(name, email, pax, remarks);

    });

});