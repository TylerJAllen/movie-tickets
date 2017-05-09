//back end
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = [];
}

Ticket.prototype.fullTicket = function () {
  return this.movie + " plays at " + this.time + " for " + this.age +". Total price: $" + this.price;
}


Ticket.prototype.moviePrice = function() {
  if (this.movie === "Cantina Royale") {
    return 5;
  }
  else {
    return 0;
  }
};

Ticket.prototype.timePrice = function () {
  if (this.time === "12pm") {
    return 0;
  }
  else {
    return 5;
  }
};

Ticket.prototype.agePrice = function() {
  if (this.age === "Adult") {
    return 5;
  }
  else {
    return 0;
  }
};

Ticket.prototype.totalPrice = function() {
  // moviePrice = moviePrice(input);
  // timePrice = timePrice(input);
  // agePrice = agePrice(input);
  var totalPrice = 15 + this.moviePrice() + this.timePrice() + this.agePrice();
  return totalPrice;
}


//front end

$(document).ready(function() {
  $("#movieSelect").submit(function(event) {
    event.preventDefault();
    $(".results").empty();
    var inputtedMovie = $("input:radio[name=movies]:checked").val();
    var inputtedTime = $("input:radio[name=times]:checked").val();
    var inputtedAge = $("input:radio[name=age]:checked").val();
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    var price = newTicket.totalPrice();
    newTicket.price.push(price);
    $(".results").text(newTicket.fullTicket());
    ;
    document.forms["movieSelect"].reset();
  });
});
