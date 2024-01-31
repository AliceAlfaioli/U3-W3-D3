const taskname = document.getElementById("taskaname");

const bottone = document.getElementById("add");
bottone.onclick = function () {
  if (taskname.value !== "") {
    console.log(taskname.value);
    const lista = document.getElementById("lista");
    console.log(lista);
    const li = document.createElement("li");
    li.onclick = function (e) {
      e.target.remove();
    };
    li.innerText = taskname.value;
    console.log(li);
    lista.appendChild(li);
    taskname.value = "";
  }
};
