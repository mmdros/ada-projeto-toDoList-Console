const listaDeTarefas = [];
console.log("Lista anterior: ", listaDeTarefas);
//Adicionar uma tarefa
function adicionarTarefa() {
    let novaTarefa = prompt("Digite uma nova tarefa: ");
    listaDeTarefas.push(novaTarefa.toLowerCase());
    console.log("Nova tarefa adicionada: ", novaTarefa);
    console.log("Lista após adição: ", listaDeTarefas);
}
// Editar uma tarefa salva
function editarTarefa() {
    let tarefaParaEditar = prompt("Qual tarefa gostaria de editar?");
    let indiceTarefa = listaDeTarefas.indexOf(tarefaParaEditar.toLowerCase());

    if (indiceTarefa !== -1) {
        // Se a tarefa existe, solicite a nova descrição
        let novaDescricao = prompt("Digite a nova descrição da tarefa:");
        listaDeTarefas[indiceTarefa] = novaDescricao.toLowerCase();
        console.log("Lista após edição: ", listaDeTarefas);
    } else {
        console.log("Tarefa não encontrada para edição.");
    }
}

// Remover uma tarefa salva
function removerTarefa() {
    let tarefaParaRemover = prompt("Digite uma tarefa para remover:");
    let indiceTarefa = listaDeTarefas.indexOf(tarefaParaRemover.toLowerCase());

    if (indiceTarefa !== -1) {
        listaDeTarefas.splice(indiceTarefa, 1);
        console.log("Lista após remoção: ", listaDeTarefas);
    } else {
        console.log("Tarefa não encontrada para remoção.");
    }
}
//Listar todas as tarefas salvas
function listarTarefas() {
    listaDeTarefas.forEach(function (tarefa) {
        console.log(tarefa);
    });
}
//Obter uma tarefa, através de um parâmetro (id)
function buscarTarefa() {
    let buscaTarefa = prompt("Digite o ID da tarefa:");
    const resultadoDaBusca = listaDeTarefas[buscaTarefa];
    console.log("Tarefa encontrada: ", resultadoDaBusca);
}