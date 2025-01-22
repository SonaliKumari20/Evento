$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // TO DO: implement sign up logic here
        // For example, you can use AJAX to send the sign up data to the server
        $.ajax({
            type: 'POST',
            url: 'signup.php',
            data: {
                username: username,
                email: email,
                password: password
            },
            success: function(data) {
                alert('Sign up successful!');
                window.location.href = 'login.html';
            },
            error: function(xhr, status, error) {
                alert('Sign up failed: ' + error);
            }
        });
    });
});