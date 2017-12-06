
$(function () {
	$(".add-burger-form").on("submit",function (event) {
	event.preventDefault();

    var newBurger = {
      name: $("#txtArea").val().trim() 
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
	




	});




});