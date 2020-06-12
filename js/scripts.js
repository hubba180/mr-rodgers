// UI Logic
$(document).ready(function() {
  $("#input").submit(function() {
    event.preventDefault();
    const userInput = $("#count-to").val();
    $("#output").append('<br><span>' + userInput + '</span>');
  });
});

// Business Logic