function salvarResultadoIMC(imc, classificacao) {
    const user = firebase.auth().currentUser;
  
    if (user) {
      db.collection("usuarios")
        .doc(user.uid)
        .collection("imc")
        .add({
          imc: imc.toFixed(2),
          classificacao,
          data: new Date().toISOString()
        })
        .then(() => {
          console.log("IMC salvo com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao salvar IMC:", error);
        });
    } else {
      console.log("Usuário não está logado. Não é possível salvar IMC.");
    }
  }
  