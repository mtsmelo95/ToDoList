// Aguarda o carregamento do DOM antes de executar o código JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const btnAdd = document.getElementById("btn-add");
    const list = document.getElementById("list");
  
    btnAdd.addEventListener("click", function () {
      const taskText = inputText.value.trim();
      if (taskText === "") {
        alert("Por favor, insira uma tarefa válida.");
        return;
      }
  
      // Cria um novo item da lista
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div class="container-li">
          <input type="checkbox" class="task-checkbox">
          <span>${taskText}</span>
          <button class="delete">Remover</button>
        </div>
      `;
  
      list.appendChild(listItem);
  
      // Limpa o campo de entrada
      inputText.value = "";
  
      // Adiciona um evento de clique ao botão de remover
      const deleteButton = listItem.querySelector(".delete");
      deleteButton.addEventListener("click", function () {
        list.removeChild(listItem);
      });
  
      // Adiciona um evento de clique à caixa de seleção
      const checkbox = listItem.querySelector(".task-checkbox");
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          listItem.classList.add("completed");
        } else {
          listItem.classList.remove("completed");
        }
      });
    });

    // Adiciona um event listener para a tecla Enter
    inputText.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        // Simula um clique no botão "Adicionar" quando a tecla Enter é pressionada
        btnAdd.click();
      }
    });
});
