import emailjs from 'emailjs-com';

emailjs.init('service_8ldgg2j'); // Reemplaza con tu clave de usuario de EmailJS

window.onload = function() {
  document.getElementById('tu-formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('Gmail', 'template_vmj1lh9', this)
      .then(function() {
        console.log('¡Correo enviado con éxito!');
      }, function(error) {
        console.log('Error al enviar el correo:', error);
      });
  });
}