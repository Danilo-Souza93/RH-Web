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
    toggleDiv.hasAttribute("hidden")? 
        toggleDiv.removeAttribute("hidden"): 
        toggleDiv.setAttribute("hidden","");
  } else {
    let div = document.getElementById(id);

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("id", "innerDiv_" + id);

    let labelName = document.createElement("label");
    labelName.setAttribute("for", "inpName_"+id);
    
    let inpName = document.createElement("input");
    inpName.setAttribute("type","text");
    inpName.setAttribute("value", funcionarioList[id].nome);
    inpName.setAttribute("id", "inpName_"+id);
    inpName.setAttribute("readonly", "");

    let labelIdade = document.createElement("label");
    labelIdade.setAttribute("for", "inpIdade_"+id);
    
    let inpIdade = document.createElement("input");
    inpIdade.setAttribute("type","text");
    inpIdade.setAttribute("value", funcionarioList[id].idade);
    inpIdade.setAttribute("id", "inpIdade_"+id);
    inpIdade.setAttribute("readonly", "");

    let labelCargo = document.createElement("label");
    labelCargo.setAttribute("for", "inpCargo_"+id);

    let inpCargo = document.createElement("input");
    inpCargo.setAttribute("type","text");
    inpCargo.setAttribute("value", funcionarioList[id].cargo);
    inpCargo.setAttribute("id", "inpCargo_"+id);
    inpCargo.setAttribute("readonly", "");

    let labelRua = document.createElement("label");
    labelRua.setAttribute("for", "inpRua_"+id);

    let inpRua = document.createElement("input");
    inpRua.setAttribute("type","text");
    inpRua.setAttribute("value", funcionarioList[id].endereco.rua);
    inpRua.setAttribute("id", "inpRua_"+id);
    inpRua.setAttribute("readonly", "");

    let labelNumber = document.createElement("label");
    labelNumber.setAttribute("for", "inpNumer_"+id);

    let inpNumero = document.createElement("input");
    inpRua.setAttribute("type","text");
    inpNumero.setAttribute("value", funcionarioList[id].endereco.numero);
    inpNumero.setAttribute("id", "inpNumber_"+id);
    inpNumero.setAttribute("readonly", "");

    let labelEstado = document.createElement("label");
    labelEstado.setAttribute("for", "inpEstado_"+id);

    let inpEstado = document.createElement("input");
    inpEstado.setAttribute("type","text");
    inpEstado.setAttribute("value", funcionarioList[id].endereco.estado);
    inpEstado.setAttribute("id", "inpEstado_"+id);
    inpEstado.setAttribute("readonly", "");

    let labelPais = document.createElement("label");
    labelPais.setAttribute("for", "inpPais_"+id);

    let inpPais = document.createElement("input");
    inpPais.setAttribute("type","text");
    inpPais.setAttribute("value", funcionarioList[id].endereco.pais);
    inpPais.setAttribute("id", "inpPais_"+id);
    inpPais.setAttribute("readonly", "");

    let labelDepartamento = document.createElement("label");
    labelDepartamento.setAttribute("for", "inpDepartamento_"+id);

    let inpDepartamento = document.createElement("input");
    inpDepartamento.setAttribute("type","text");
    inpDepartamento.setAttribute("id", "inpDepartamento_"+id);
    inpDepartamento.setAttribute("readonly", "");

    let editBtn = document.createElement("button");
    editBtn.setAttribute("id", "editBtn_" + id);
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", editFuncionario.bind(null, editBtn.id));

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn_" + id);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteFuncionario.bind(null, deleteBtn.id));

    innerDiv.appendChild(labelName);
    innerDiv.appendChild(inpName);
    innerDiv.appendChild(labelIdade);
    innerDiv.appendChild(inpIdade);
    innerDiv.appendChild(labelCargo);
    innerDiv.appendChild(inpCargo);
    innerDiv.appendChild(labelRua);
    innerDiv.appendChild(inpRua);
    innerDiv.appendChild(labelNumber);
    innerDiv.appendChild(inpNumero);
    innerDiv.appendChild(labelEstado);
    innerDiv.appendChild(inpEstado);
    innerDiv.appendChild(labelPais);
    innerDiv.appendChild(inpPais);
    innerDiv.appendChild(labelDepartamento);
    innerDiv.appendChild(inpDepartamento);

    div.appendChild(innerDiv);
  }
}

function editFuncionario(id) {

}

function deleteFuncionario(id) {

}