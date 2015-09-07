$(document).ready(function() {

    $('#send_btn').click(function() {


        var name = $('#name_input').val();
        var email = $('#email_input').val();
        var subject = $('#subject_input').val();
        var message = $('#message_input').val();


        if (name.length<1 || email.length<1 || subject.length<1 || message.length<1) {
            $.growl.error({ message: "Fill out all the fields",size:'large',location:'br' });

        }else{
            sendMail(email, subject, message);
            $('#name_input').val("");
            $('#email_input').val("");
            $('#subject_input').val("");
            $('#message_input').val("");

        }

    });





    function sendMail(reciver, subject, message) {
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'QkXbtQ0I1MhJLvbj2FvZog',
                'message': {
                    'from_email': reciver,
                    'to': [
                        {
                            'email': 'i2s@astaric.com' ,

                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': subject,
                    'html': message
                }
            }
        }).done(function(response) {
            console.log(response); // if you're into that sorta thing
            $.growl.notice({ title: "Message sent", message: " We will get back to you soon",size:'large',location:'br' });
        });
    }

});