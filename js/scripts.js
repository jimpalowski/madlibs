$(document).ready(function() {
  $("#formOne").submit(function(event) {
    //var nameInput = $("input#name").val();
    var list = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    list.forEach(function(lists) {
      var userInput = $("input#" + lists).val();
      $("." + lists).text(userInput);
    });
    $("#letter").show();
    event.preventDefault();
  });
});
