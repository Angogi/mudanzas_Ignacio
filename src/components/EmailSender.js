
import emailjs from 'emailjs-com';

const EmailSender = (templateParams) => (
  
    emailjs.send('service_1vssv0q', 'template_ak90u6o', templateParams, "user_X6zkDFXjy8GyBZJb92VXO")
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    })
  
  );

export  {EmailSender}