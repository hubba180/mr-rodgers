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
  let resultArray = [];
  for (i = 0; i <= parseInt(userInput); i++) {
    let counterString = i.toString()
    resultArray.push(counterString)
  }
  for (j = 0; j < resultArray.length; j++) {
    let number = resultArray[j];
    let numberArray = number.slice("")

    if (numberArray.includes(3)) {
      result += "Won't you be my neighbor? ";
    } else if (numberArray.includes(2)) {
      result += "Boop! ";
    } else if (numberArray.includes(1)) {
      result += "Beep! ";
    } else {
      result += number + " ";
    }
  }


  
  return result
}
