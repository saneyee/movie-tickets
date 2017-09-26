function Ticket(movieCategory, time, age, tickets) {
  this.movieCategory = movieCategory;
  this.time = time;
  this.age = age;
  this.tickets = tickets;
  this.price = 10;
}
Ticket.prototype.fullTicket = function() {
  if (this.movieCategory === 'First Release') {
    this.price += 2;
  }
  if (this.time === 'Matinee') {
    this.price -= 2;
  }
  if (this.age === '1') {
    this.price -= 3;
  }
  return this.tickets*this.price;
}
$(function() {
  $("form.formone").submit(function(event) {
    event.preventDefault();
    var selectedMovie = $("select#cat-name").val();
    var selectedTime = $("#time").val();
    var selectedAge = $("#age").val();
    var inputtedTickets = parseInt($("input#ticket").val());

    var newTicket = new Ticket(selectedMovie, selectedTime, selectedAge, inputtedTickets);
    var cost = newTicket.fullTicket();

  $(".cat-name").text(newTicket.movieCategory);
  $(".time").text(newTicket.time);
  $("#cost").text(cost);
  $("#result").show();

  });

});
