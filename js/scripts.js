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
    let counter = i;
    let counterString = counter.toString()
    for (j=0; j < counterString.length; j++) {
      if (counterString.charAt((counterString.length - 1) - j) === "1") {
        result += "Beep!"
        break;
      } else if (counterString.charAt((counterString.length - 1) - j) === "2") {
        result += "Boop!"
        break;
      } else if (counterString.charAt((counterString.length - 1) - j) === "3") {
        result += "Won't you be my neighbor?"
        break;
      } else {
        result += counter.toString();
        break;
      }
    }
  }
  return result
}
