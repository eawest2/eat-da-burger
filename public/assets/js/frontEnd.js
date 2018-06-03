//Page function
$(function() {
    //Listener
    $(".changeDevoured").on("click", function(event) {
        var id = $(this).data("id");
        var changeDevoured = $(this).data("changeDevoured");
    
        var devouredState = {
            devoured: changeDevoured
        };

        //req
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }). then(
            function() {
            console.log("Devoured set: ", changeDevoured);
            //Update Dom
            location.reload();
            }
        );
    });

    //Listener
    $(".createBurger").on("submit", function(event) {
        event.preventDefault();

        var addBurger = {
        burger_name: $("#burgerName").val().trim(),
        devoured: 0
        };

        //req
        $.ajax("/api/burgers", {
        type: "POST",
        data: addBurger,
        }).then( function() {
            console.log("added burger");
            location.reload();
        });
    });
});