window.onload = config;

const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

let selectEstado;

function config() {
  this.loadEstados();
}

function loadEstados() {
  this.selectEstado = document.getElementById("estado");

  estados.forEach((estado) => {
    this.selectEstado.add(new Option(estado, estado));
  });
}

function inputTextValidation(id) {
  // Pega referemcia do input e botao
  let input = document.getElementById(id);
  let btn = document.getElementById("criar");
  //

  let rx = /^[a-zA-Z\s]+$/;

  // valida com a expressão aceitando somente letras
  if (rx.test(input.value)) {
    if (input.classList.contains("input-invalid")) {
      input.classList.remove("input-invalid");
      btn.removeAttribute("disabled");
    }
  } else {
    // adiciona classe invalid no input e desabilita o botao
    input.classList.add("input-invalid");
    btn.setAttribute("disabled", "");
  }
}

function inputNumberValidation(id) {
  let input = document.getElementById(id);
  let btn = document.getElementById("criar");
  let rx = /^[0-9]+$/;

  if (rx.test(input.value)) {
    console.log("valid");
    if (input.classList.contains("input-invalid")) {
      console.log("entrou no if");
      input.classList.remove("input-invalid");
      btn.removeAttribute("disabled");
    }
  } else {
    input.classList.add("input-invalid");
    btn.setAttribute("disabled", "");
  }
}

function criarFuncionario() {
  // instanciando as classes
  let endereco = new Endereco();
  let funcionario = new Funcionario();
  let funcionarioList = [];
  let isEmpty;

  // populando a classe com o valor do input
  endereco.numero = document.getElementById("numero").value;
  endereco.rua = document.getElementById("rua").value;
  endereco.cidade = document.getElementById("cidade").value;
  endereco.estado = document.getElementById("estado").value;
  endereco.pais = document.getElementById("pais").value;

  funcionario.nome = document.getElementById("nome").value;
  funcionario.idade = document.getElementById("idade").value;
  funcionario.cargo = document.getElementById("cargo").value;
  funcionario.departamentoNome = document.getElementById("departamento").value;

  funcionario.endereco = endereco;

  // Criando uma lsita de funcionarios adicionados
  funcionarioList.push(funcionario);

  // verificando cada posição da lista
  funcionarioList.forEach((obj) => {
    // referenciando cada atributo de cada objeto da lista
    Object.keys(obj).forEach((attrib) => {
      // validando se existe algum vazio
      if (obj[attrib] == null || obj[attrib] == "") {
        isEmpty = true;
      }
    });
  });

  if (isEmpty) {
    this.showError();
  } else {
    if (funcionarioList.length > 0) {
      // criando elemento para mostrar os itens da lista
      let div = document.createElement("div");
      let aName = document.createElement("a");
      let aCargo = document.createElement("a");
      let aSetor = document.createElement("a");
      // adicionando classe ao elemento criado
      div.classList.add("funcionario-list-content");
      // colocando o valor dentro da tag criada para exibição
      aName.innerText = funcionarioList[funcionarioList.length - 1].nome;
      aCargo.innerText = funcionarioList[funcionarioList.length - 1].cargo;
      aSetor.innerText =
        funcionarioList[funcionarioList.length - 1].departamentoNome;
      // adicionando a tag dento da div criada
      div.appendChild(aName);
      div.appendChild(aCargo);
      div.appendChild(aSetor);
      // pegando o componente onde a lista será adicionada
      let container = document.getElementById("list");
      container.appendChild(div);

      // atribuindo visibilidade a lista criada
      container.removeAttribute("hidden");
    }
  }
}

function showError() {
  alert("Existe campos vazios!\nTodos os campos devem ser preenchidos");
}
