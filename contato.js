emailjs.init("MEHLyMN6d-BlRQf4G");

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Coletando os dados do formulário
    const params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    };

    // Substitua abaixo pelos seus IDs reais do EmailJS:
    const SERVICE_ID = "service_dt5l23f";
    const TEMPLATE_ID = "template_54xyegp";

    // Envio via EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            console.error("Erro ao enviar mensagem:", error);
            alert("Ocorreu um erro ao enviar. Veja o console para detalhes.");
        });
});
