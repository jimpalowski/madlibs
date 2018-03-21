$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1 = $("input#texthere").val().toUpperCase();


    $(".texthere").text(person1);
      $(".texthere").append(" !!!!!!");
    $("#shouting").show();

    event.preventDefault();
  });
});
