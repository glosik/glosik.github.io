$(document).ready(function () {
    var form = $("#main-contact-form"),
        confirm = $("#status");

    function submitMSG(valid, msg) {
        confirm.show().text(msg);
    }

    function formSuccess() {
        form[0].reset();
        submitMSG(true, "Message Submitted!");
    }

    function submitForm() {
        // Initiate Variables With Form Content
        var name = $("#name").val(),
            email = $("#email").val(),
            message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "mailer.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success: function (text) {
                if (text === "success") {
                    formSuccess();
                } else {
                    submitMSG(false, text);
                }
            }
        });
    }



    form.on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });
});