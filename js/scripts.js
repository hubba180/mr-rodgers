// UI Logic
$(document).ready(function() {
  $("#input").submit(function() {
    event.preventDefault();
    const userInput = $("#count-to").val();
    const result = countLikeRodgers(userInput);
    $("#output").append('<br><span>' + result + '</span>');
  });
});

// Business Logic

function countLikeRodgers(userInput) {
  let result = "";
  for (i = 0; i <= parseInt(userInput); i++) {
    result += i.toString();
  }
  return result
}