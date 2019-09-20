$(document).ready(function() {

    $(document).on("keypress", function(e) {
      if (e.which == 13) {
        var username = $("#username").val();
        var password = $("#password").val();
  
        if (username !== "" && password !== "") {
          console.log(username, password);
  
          $.ajax({
            url: "/user/signup",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username: username, password: password }),
            success: function(response) {
              console.log(response);
            }
          });
        }
      }
    });
  });
  