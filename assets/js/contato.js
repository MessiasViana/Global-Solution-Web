// Para atualizar a página e garantir os formulários estejam com display:none e a ação com o valor selecione
const acaoSelecionada = document.getElementById("acao");
const formGrantee = document.getElementById("form-grantee");
const formDonor = document.getElementById("form-donor");

acaoSelecionada.value = "selecione";
formGrantee.classList.add("hidden");
formDonor.classList.add("hidden");


// Para atualizar a página e garantir que todos campos estejam vazios
// Itera sobre os elementos e define o valor como uma string vazia
const inputElements = document.querySelectorAll('input');

inputElements.forEach((input) => {
  input.value = '';
});


// Mudar formulário de acordo com a ação selecionada
acaoSelecionada.addEventListener("change", () => {
  const valorAcaoSelecionada = document.getElementById("acao").value;
  
  if (valorAcaoSelecionada === "doar") {
    formGrantee.classList.add("hidden");
    formDonor.classList.remove("hidden");
  } else if (valorAcaoSelecionada === "receber") {
    formDonor.classList.add("hidden");
    formGrantee.classList.remove("hidden");
  } else {
    formGrantee.classList.add("hidden");
    formDonor.classList.add("hidden");
  }
});


// formatar o celular automaticamene
const formatPhoneNumber = (inputElement) => {
  inputElement.addEventListener("input", function () {
    let phone = this.value;

    // Remove todos os caracteres não numéricos do valor do telefone
    phone = phone.replace(/\D/g, "");

    // Formatação: (XX) XXXX-XXXX
    if (phone.length >= 2) {
      phone = `(${phone.substr(0, 2)}) ${phone.substr(2)}`;
    }
    if (phone.length > 10) {
      phone = `${phone.substr(0, 10)}-${phone.substr(10)}`;
    }

    // Atualiza o valor do campo com a formatação
    this.value = phone;
  });

  inputElement.maxLength = 15;
}

const phoneDonorInput = document.getElementById("phone-donor");
const phoneGranteeInput = document.getElementById("phone-grantee");

formatPhoneNumber(phoneDonorInput);
formatPhoneNumber(phoneGranteeInput)