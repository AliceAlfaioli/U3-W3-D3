const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const ulList = document.getElementById("listul");

let function1 = function () {
  const inputLista = document.getElementById("input1");
  const myData = {
    inserisciLista: inputLista.value,
  };
  let li = document.createElement("li");
  li.innerText = myData.inserisciLista;
  li.addEventListener("click", function2);
  ulList.appendChild(li);
  inputLista.value = "";
  console.log(ulList);
};

const buttonClick = document.getElementById("add");
buttonClick.onlick = function1;

const function2 = function (e) {
  e.currentTarget.classList.add("addClass");
};
