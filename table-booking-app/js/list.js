window.addEventListener("load", function() {
    Getbooking();

});

function Getbooking() {
    let url = 'https://api.sheety.co/7b082e81fa04098c0e0bfe8408decc01/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
     // console.log(json.bookings);
      var bookings = document.getElementById("booking-list");
      //declare button
      var buttonId = "delete" + gId;

      
      for (var i = 0; i < json.bookings.length; i++) {
        var gName = json.bookings[i].name;
        var gEmail = json.bookings[i].email;
        var gPax = json.bookings[i].pax;
        var gId = json.bookings[i].id;
        var buttonId = "delete" + gId;
        
        let row = bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gEmail;
        row.insertCell(3).innerHTML = gPax;
        row.insertCell(4).innerHTML = ""; //Remarks
        row.insertCell(5).innerHTML = "<button id='" + buttonId + "class='btn btn-danger'>Delete</button><br/>";

        bookings.innerHTML += name + "<br/>";
        bookings.innerHTML += gId + "-" + gName + "," + gEmail + "," + gPax  + "," + "<br/>";
        //nak buat button delete
        bookings.innerHTML += "<button id='" + buttonId + "'>Delete</button><br/>";
        
        bookingIds.push(buttonId);
        
        
      }
      
      for (let j= 0; j < bookingIds.length; j++) {
        var el = document.getElementById(bookingIds[j]);
        el.addEventListener("click", function() {
          let theId = bookingIds[j].replace("delete","");
          //DeleteBooking(theId);
          
        })
      }
    });
  }