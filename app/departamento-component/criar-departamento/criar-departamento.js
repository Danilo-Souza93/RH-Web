function criarDepartamento() {
  // instanciando as classes
  let departamento = new Departamento();
  let departamentoList = [];
  let isEmpty;

  // populando a classe com o valor do input
  departamento.departamentoNome = document.getElementById("nome").value;

  // Criando uma lsita de funcionarios adicionados
  departamentoList.push(departamento);

  // verificando cada posição da lista
  departamentoList.forEach((obj) => {
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
    if (departamentoList.length > 0) {
      // criando elemento para mostrar os itens da lista
      let div = document.createElement("div");
      let aName = document.createElement("a");

      // adicionando classe ao elemento criado
      div.classList.add("departamento-list-content");
      // colocando o valor dentro da tag criada para exibição
      aName.innerText =
      departamentoList[departamentoList.length - 1].departamentoNome;

      // adicionando a tag dento da div criada
      div.appendChild(aName);

      // pegando o componente onde a lista será adicionada
      let container = document.getElementById("list");
      container.appendChild(div);

      // atribuindo visibilidade a lista criada
      container.removeAttribute("hidden");
    }
  }
}

function inputTextValidation(id) {
  // Pega referemcia do input e botao
  let input = document.getElementById(id);
  let btn = document.getElementById("criar");
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

function showError() {
  alert("O Nome nao pode estar em branco");
}
