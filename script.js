document.addEventListener("DOMContentLoaded", function () {
    const botaoContato = document.getElementById("bttn-contato");
    const overlay = document.getElementById("overlay");
    const email = "contatohenriquelamas@gmail.com";

    botaoContato.addEventListener("click", function () {
      navigator.clipboard.writeText(email).then(() => {
        overlay.classList.remove("d-none");
        setTimeout(() => overlay.classList.add("active"), 10);

        setTimeout(() => {
          overlay.classList.remove("active");
          setTimeout(() => overlay.classList.add("d-none"), 300);
        }, 1500)
      }).catch(err => {
        console.error("Erro ao copiar e-mail:", err);
      });
    });
  });