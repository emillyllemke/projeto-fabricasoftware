const btnNovo = document.querySelector(".btn-novo");
const modal = document.querySelector(".modal-overlay");
const btnCancelar = document.querySelector(".btn-cancelar");

const form = document.querySelector(".task-form");
const tituloInput = document.getElementById("titulo");
const dataInput = document.getElementById("data");
const descricaoInput = document.getElementById("descricao");

const pendingTasks = document.getElementById("pending-tasks");
const doneTasks = document.getElementById("done-tasks");

btnNovo.addEventListener("click", () => {
    modal.style.display = "flex";
});

btnCancelar.addEventListener("click", () => {
    modal.style.display = "none";
    form.reset();
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const titulo = tituloInput.value;
    const data = dataInput.value;
    const descricao = descricaoInput.value;

    const task = document.createElement("div");
    task.classList.add("task-card");

    task.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        <small>${data || "Sem data"}</small>
        <button class="btn-concluir">Concluir</button>
    `;

    pendingTasks.appendChild(task);

    const btnConcluir = task.querySelector(".btn-concluir");

    btnConcluir.addEventListener("click", () => {
        task.classList.add("done");
        doneTasks.appendChild(task);
        btnConcluir.remove();
    });

    form.reset();
    modal.style.display = "none";
});