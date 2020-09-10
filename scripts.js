function alertaInicial() {
	var razao = prompt("Explique seus motivos para visitar este site:");
    alert("Muito bem, suas razões \""+razao+"\" não importam. Bem vindo.");
}

function criaTabela() {
	var valor = document.createElement("li");
	var nodo = document.createTextNode(document.getElementById("perg").value);
	document.getElementById("tabela").appendChild(valor).appendChild(nodo);
}