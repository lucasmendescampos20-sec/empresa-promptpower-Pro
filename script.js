let vip = false;

function liberarVIP() {
    alert("Simulação: acesso VIP liberado!");
    vip = true;
}

function verificarVIP(tipo) {
    if (!vip) {
        alert("Você precisa desbloquear o VIP!");
        return;
    }
    mostrarPrompt(tipo);
}

function mostrarPrompt(tipo) {
    let texto = "";

    if (tipo === "marketing") {
        texto = "Crie uma estratégia de vendas para Instagram com funil completo.";
    }

    if (tipo === "tiktok") {
        texto = "Crie 5 ideias de vídeos virais com alto potencial de engajamento.";
    }

    if (tipo === "dinheiro") {
        texto = "Liste 10 formas de ganhar dinheiro com IA começando do zero.";
    }

    if (tipo === "copy") {
        texto = "Crie uma copy usando AIDA para vender um produto digital.";
    }

    document.getElementById("textoPrompt").innerText = texto;
    document.getElementById("popup").style.display = "block";
}

function fechar() {
    document.getElementById("popup").style.display = "none";
}

function copiar() {
    let texto = document.getElementById("textoPrompt").innerText;
    navigator.clipboard.writeText(texto);
    alert("Copiado!");
}
window.location.href = "SEU LINK AQUI";
auth.onAuthStateChanged(user => {
  if(user){
    db.collection("users").doc(user.uid).get()
    .then(doc=>{
      if(doc.exists){
        usuarioVIP = doc.data().vip;
      }
    });
  }
});