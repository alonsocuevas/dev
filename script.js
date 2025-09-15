$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Ingeniero en Informática"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Alonso Cuevas Pizarro"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["Experiencia Laboral"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-4", {
        strings: ["Tecnologias"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-5", {
        strings: ["Proyectos"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-6", {
        strings: ["Escribeme"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },
            1600:{
                items: 4,
                nav: false
            }
        }
    });
});




// Inicializar EmailJS
    (function() {
      emailjs.init("0rIaZMnZh69BFi4g6"); // Reemplaza con tu Public Key de EmailJS
    })();

    // Manejar el clic del botón
    document.getElementById('submit-btn').addEventListener('click', function(event) {
      event.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      const messageDiv = document.getElementById('message');
      
      // Validar campos
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const asunto = document.getElementById('asunto').value;
      const mensaje = document.getElementById('mensaje').value;
      
      if (!nombre || !email || !asunto || !mensaje) {
        messageDiv.innerHTML = '<div class="error">❌ Por favor, completa todos los campos.</div>';
        return;
      }
      
      // Cambiar texto del botón
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      // Obtener datos del formulario
      const formData = {
        from_name: nombre,
        from_email: email,
        subject: asunto,
        message: mensaje,
        to_email: 'shemagh.dev@gmail.com'
      };
      
      // Enviar email
      emailjs.send('service_j1kx5x9', 'template_2z54hdq', formData)
        .then(function(response) {
          messageDiv.innerHTML = '<div class="success">✅ ¡Mensaje enviado correctamente! Te responderé pronto.</div>';
          document.getElementById('contact-form').reset();
        }, function(error) {
          console.log('Error:', error);
          messageDiv.innerHTML = '<div class="error">❌ Error al enviar el mensaje. Inténtalo de nuevo o usa los enlaces de contacto.</div>';
        })
        .finally(function() {
          submitBtn.textContent = 'Enviar correo';
          submitBtn.disabled = false;
        });
    });