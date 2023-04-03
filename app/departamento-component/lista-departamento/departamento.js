window.onload = config;

let rotation = 0;

let departamentoList = [
  new Departamento((departamentoNome = "RH")),
  new Departamento((departamentoNome = "Financeiro")),
  new Departamento((departamentoNome = "Enfermaria")),
];

function config() {
  let content = document.getElementById("departamento-list-content");

  departamentoList.forEach((departamento, i) => {
    let outDiv = document.createElement("div");
    outDiv.classList.add("departamento-content");
    outDiv.setAttribute("id", i);

    let div = document.createElement("div");
    div.classList.add("departamento-content-header");

    div.addEventListener("click", showHiddenInfo.bind(null, outDiv.id));

    let a = document.createElement("a");
    a.setAttribute("id", "a_" + i);
    a.classList.add("text");
    a.innerText = departamento.departamentoNome;

    let arrow = document.createElement("img");
    arrow.classList.add("arrow");
    arrow.setAttribute("id", "img_" + i);
    arrow.setAttribute("src", "../../../imgs/arrow-down-svgrepo-com.svg");

    div.appendChild(a);
    div.appendChild(arrow);

    outDiv.appendChild(div);

    content.appendChild(outDiv);
  });
}

function showHiddenInfo(id) {

  this.rotateArrow(id);

  if (document.getElementById("innerDiv_" + id)) {
    let toggleDiv = document.getElementById("innerDiv_" + id);

    if (toggleDiv.hasAttribute("hidden")) {
      toggleDiv.removeAttribute("hidden");
      toggleDiv.classList.add("innerDiv-content");
    } else {
      toggleDiv.setAttribute("hidden", "");
      toggleDiv.classList.remove("innerDiv-content");
    }
  } else {
    let div = document.getElementById(id);

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("id", "innerDiv_" + id);
    innerDiv.classList.add("innerDiv-content");

    let labelName = document.createElement("label");
    labelName.setAttribute("for", "inpName_" + id);
    labelName.innerText = "Departamento nome:";

    let inpName = document.createElement("input");
    inpName.setAttribute("type", "text");
    inpName.setAttribute("value", departamentoList[id].departamentoNome);
    inpName.setAttribute("id", "inpName_" + id);
    inpName.setAttribute("readonly", "");
    inpName.classList.add("readonly");

    //CRIAÇÃO DE BOTÕES
    let editBtn = document.createElement("button");
    editBtn.setAttribute("id", "editBtn_" + id);
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", editDepartamento.bind(null, id));
    editBtn.innerText = "Editar";

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn_" + id);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteDepartamento.bind(null, id));
    deleteBtn.innerText = "Deletar";

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("input-content");
    nameDiv.appendChild(labelName);
    nameDiv.appendChild(inpName);
    innerDiv.appendChild(nameDiv);

    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("id", "btnDiv_" + id);
    btnDiv.classList.add("btn-content");
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);
    innerDiv.appendChild(btnDiv);

    div.appendChild(innerDiv);
  }
}

function editDepartamento(id) {
  let inpName = document.getElementById("inpName_" + id);
  inpName.removeAttribute("readonly");
  inpName.classList.remove("readonly");

  let btnDiv = document.getElementById("btnDiv_" + id);

  let saveEdit = document.createElement("button");
  saveEdit.setAttribute("id", "saveEditBtn_" + id);
  saveEdit.innerText = "Salvar";
  saveEdit.addEventListener("click", saveEdition.bind(null, id));

  btnDiv.appendChild(saveEdit);
}

function deleteDepartamento(id) {
  departamentoList.pop(departamentoList[id]);
  let div = document.getElementById("departamento-list-content");
  let child = document.getElementById(id);
  div.removeChild(child);
}

function saveEdition(id) {
  let inpName = document.getElementById("inpName_" + id);
  inpName.setAttribute("value", inpName.value);
  inpName.setAttribute("readonly", "");
  departamentoList[id].departamentoNome = inpName.value;

  let btnDiv = document.getElementById("btnDiv_" + id);
  let saveBtn = document.getElementById("saveEditBtn_" + id);

  let a = document.getElementById("a_" + id);
  a.innerText = departamentoList[id].departamentoNome;

  btnDiv.removeChild(saveBtn);
  this.showHiddenInfo(id);
}

function rotateArrow(id) {

  let arrow = document.getElementById("img_" + id);

  rotation += 180;
  arrow.style.transform = `rotate(${rotation}deg)`;

}