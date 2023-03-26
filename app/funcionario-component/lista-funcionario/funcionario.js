window.onload = config;

function config() {
  funcionarioList = [
    new Funcionario(
      (nome = "Danilo Jesus Souza"),
      (idade = "04/07/1993"),
      (cargo = "Analista de Sistemas"),
      new Endereco(
        (rua = "Rua Tokio"),
        (numero = "165"),
        (cidade = "Suzano"),
        (estado = "SP"),
        (pais = "Brazil")
      ),
      (departamentoNome = "TI")
    ),
    new Funcionario(
      (nome = "Jenniffer Raissa Rocha"),
      (idade = "31/003/1996"),
      (cargo = "Enfermeira"),
      new Endereco(
        (rua = "St Henrique"),
        (numero = "673"),
        (cidade = "São Paulo"),
        (estado = "SP"),
        (pais = "Brazil")
      ),
      (departamentoNome = "Saúde")
    ),
    new Funcionario(
      (nome = "Bianca"),
      (idade = "04/07/2004"),
      (cargo = "Analista de Sistemas"),
      new Endereco(
        (rua = "Rua Tokio"),
        (numero = "165"),
        (cidade = "Suzano"),
        (estado = "SP"),
        (pais = "Brazil")
      ),
      (departamentoNome = "TI")
    ),
    new Funcionario(
      (nome = "Xablau da Silva"),
      (idade = "04/07/1993"),
      (cargo = "Analista de Sistemas"),
      new Endereco(
        (rua = "Rua Tokio"),
        (numero = "165"),
        (cidade = "Suzano"),
        (estado = "SP"),
        (pais = "Brazil")
      ),
      (departamentoNome = "TI")
    ),
  ];

  let content = document.getElementById("funcionario-list-content");

  funcionarioList.forEach((funcionario, i) => {

    let outDiv = document.createElement("div");
    outDiv.classList.add("funcionario-content");
    outDiv.setAttribute("id", i);

    let div = document.createElement("div");
    div.classList.add("funcionario-content-header");
    
    div.addEventListener("click", showHiddenInfo.bind(null, outDiv.id));

    let a = document.createElement("a");
    a.classList.add("text");
    a.innerText = funcionario.nome;
    
    let arrow = document.createElement("img");
    arrow.classList.add("arrow");
    arrow.setAttribute("src","../../../imgs/arrow-down-svgrepo-com.svg");

    div.appendChild(a);
    div.appendChild(arrow);

    outDiv.appendChild(div);

    content.appendChild(outDiv);
  });
}

function showHiddenInfo(id) {
  if (document.getElementById("innerDiv_" + id)) {

    let toggleDiv = document.getElementById("innerDiv_" + id);

    if (toggleDiv.hasAttribute("hidden")) { 
        toggleDiv.removeAttribute("hidden");
        toggleDiv.classList.add("innerDiv-content");
    } else {
        toggleDiv.setAttribute("hidden","");
        toggleDiv.classList.remove("innerDiv-content");
    }

  } else {
    let div = document.getElementById(id);

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("id", "innerDiv_" + id);
    innerDiv.classList.add("innerDiv-content");

    let labelName = document.createElement("label");
    labelName.setAttribute("for", "inpName_"+id);
    labelName.innerText = "Nome:";
    
    let inpName = document.createElement("input");
    inpName.setAttribute("type","text");
    inpName.setAttribute("value", funcionarioList[id].nome);
    inpName.setAttribute("id", "inpName_"+id);
    inpName.setAttribute("readonly", "");

    let labelIdade = document.createElement("label");
    labelIdade.setAttribute("for", "inpIdade_"+id);
    labelIdade.innerText = "Idade:"
    
    let inpIdade = document.createElement("input");
    inpIdade.setAttribute("type","text");
    inpIdade.setAttribute("value", funcionarioList[id].idade);
    inpIdade.setAttribute("id", "inpIdade_"+id);
    inpIdade.setAttribute("readonly", "");

    let labelCargo = document.createElement("label");
    labelCargo.setAttribute("for", "inpCargo_"+id);
    labelCargo.innerText = "Cargo";

    let inpCargo = document.createElement("input");
    inpCargo.setAttribute("type","text");
    inpCargo.setAttribute("value", funcionarioList[id].cargo);
    inpCargo.setAttribute("id", "inpCargo_"+id);
    inpCargo.setAttribute("readonly", "");

    let labelRua = document.createElement("label");
    labelRua.setAttribute("for", "inpRua_"+id);
    labelRua.innerText = "Rua:";

    let inpRua = document.createElement("input");
    inpRua.setAttribute("type","text");
    inpRua.setAttribute("value", funcionarioList[id].endereco.rua);
    inpRua.setAttribute("id", "inpRua_"+id);
    inpRua.setAttribute("readonly", "");

    let labelNumber = document.createElement("label");
    labelNumber.setAttribute("for", "inpNumer_"+id);
    labelNumber.innerText = "Numero:"

    let inpNumero = document.createElement("input");
    inpRua.setAttribute("type","text");
    inpNumero.setAttribute("value", funcionarioList[id].endereco.numero);
    inpNumero.setAttribute("id", "inpNumber_"+id);
    inpNumero.setAttribute("readonly", "");

    let labelEstado = document.createElement("label");
    labelEstado.setAttribute("for", "inpEstado_"+id);
    labelEstado.innerText = "Estado";

    let inpEstado = document.createElement("input");
    inpEstado.setAttribute("type","text");
    inpEstado.setAttribute("value", funcionarioList[id].endereco.estado);
    inpEstado.setAttribute("id", "inpEstado_"+id);
    inpEstado.setAttribute("readonly", "");

    let labelPais = document.createElement("label");
    labelPais.setAttribute("for", "inpPais_"+id);
    labelPais.innerText = "Pais:";

    let inpPais = document.createElement("input");
    inpPais.setAttribute("type","text");
    inpPais.setAttribute("value", funcionarioList[id].endereco.pais);
    inpPais.setAttribute("id", "inpPais_"+id);
    inpPais.setAttribute("readonly", "");

    let labelDepartamento = document.createElement("label");
    labelDepartamento.setAttribute("for", "inpDepartamento_"+id);
    labelDepartamento.innerText = "Departamento";

    let inpDepartamento = document.createElement("input");
    inpDepartamento.setAttribute("type","text");
    inpDepartamento.setAttribute("id", "inpDepartamento_"+id);
    inpDepartamento.setAttribute("readonly", "");

    let editBtn = document.createElement("button");
    editBtn.setAttribute("id", "editBtn_" + id);
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", editFuncionario.bind(null, editBtn.id));
    editBtn.innerText = "Editar"

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn_" + id);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteFuncionario.bind(null, deleteBtn.id));
    deleteBtn.innerText = "Deletar"

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("input-content");
    nameDiv.appendChild(labelName);
    nameDiv.appendChild(inpName);
    innerDiv.appendChild(nameDiv);

    let idadeDiv = document.createElement("div");
    idadeDiv.classList.add("input-content");
    idadeDiv.appendChild(labelIdade);
    idadeDiv.appendChild(inpIdade);
    innerDiv.appendChild(idadeDiv);

    let cargoDiv = document.createElement("div");
    cargoDiv.classList.add("input-content");
    cargoDiv.appendChild(labelCargo);
    cargoDiv.appendChild(inpCargo);
    innerDiv.appendChild(cargoDiv);

    let ruaDiv = document.createElement("div");
    ruaDiv.classList.add("input-content");
    ruaDiv.appendChild(labelRua);
    ruaDiv.appendChild(inpRua);
    innerDiv.appendChild(ruaDiv);

    let numberDiv = document.createElement("div");
    numberDiv.classList.add("input-content");
    numberDiv.appendChild(labelNumber);
    numberDiv.appendChild(inpNumero);
    innerDiv.appendChild(numberDiv);

    let estadoDiv = document.createElement("div");
    estadoDiv.classList.add("input-content");
    estadoDiv.appendChild(labelEstado);
    estadoDiv.appendChild(inpEstado);
    innerDiv.appendChild(estadoDiv);

    let paisDiv = document.createElement("div");
    paisDiv.classList.add("input-content");
    paisDiv.appendChild(labelPais);
    paisDiv.appendChild(inpPais);
    innerDiv.appendChild(paisDiv);

    let departamentoDiv = document.createElement("div");
    departamentoDiv.classList.add("input-content");
    departamentoDiv.appendChild(labelDepartamento);
    departamentoDiv.appendChild(inpDepartamento);
    innerDiv.appendChild(departamentoDiv);

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-content");
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);
    innerDiv.appendChild(btnDiv);

    div.appendChild(innerDiv);
  }
}

function editFuncionario(id) {

}

function deleteFuncionario(id) {

}