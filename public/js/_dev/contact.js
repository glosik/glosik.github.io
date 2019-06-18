function contact() {
    var form = $('#main-contact-form');
    //Ajax contact
    form.submit(function () {
        $.post($(this).attr('action'), function (data) {
            $(this).prev().text(data.message).fadeIn().delay(3000);
            //.fadeOut();
            //hide form once sent
            //form.hide();
        }, 'json');
        return false;
    });
}