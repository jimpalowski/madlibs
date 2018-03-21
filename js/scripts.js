$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);


    $("#letter").show();

    event.preventDefault();
  });
});
