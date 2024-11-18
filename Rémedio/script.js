document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio automático do formulário

        // Valida se todos os campos estão preenchidos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Se todos os campos estiverem preenchidos, envia o e-mail usando EmailJS
            emailjs.send("service_9rkptms", "template_e0cc5e4", {
                from_name: name,  // Nome de quem preencheu o formulário
                email: email,     // E-mail de quem preencheu o formulário
                message: message  // Mensagem preenchida no formulário
            }).then(function(response) {
                console.log('E-mail enviado com sucesso!', response.status, response.text);

                // Exibe a mensagem de sucesso
                successMessage.style.display = 'block';

                // Limpa o formulário
                form.reset();

                // Oculta a mensagem de sucesso após 3 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);

            }, function(error) {
                console.log('Erro ao enviar e-mail:', error);
                alert('Erro ao enviar o e-mail. Tente novamente.');
            });

        } else {
            alert('Por favor, preencha todos os campos antes de enviar.');
        }
    });
});