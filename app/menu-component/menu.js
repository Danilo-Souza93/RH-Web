function redirect(id) {
    switch(id) {
        case ("funcionarios"):
            window.location.href ="../funcionario-component/lista-funcionario/funcionario.html"; 
        break;
        case "departamentos": 
            window.location.href ="../departamento-component/lista-departamento/departamento.html";  
        break;
        case "criar-funcionario": 
            window.location.href = "../funcionario-component/criar-funcionario/criar-funcionario.html"; 
        break;
        case "criar-departamento": 
            window.location.href ="../departamento-component/criar-departamento/criar-departamento.html";  
        break;
    }
}