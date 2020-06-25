$(document).ready(function(){

  $(".square").on("click", function() {

    var selected = $(this);

    $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data) {

        var number = data.response

        if (number <= 5) {
          $(selected).addClass("yellow");
        } else {
          $(selected).addClass("green");
        }

        $(selected).html(number);
      },

      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    });

  });
})
