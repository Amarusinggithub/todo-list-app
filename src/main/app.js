const taskInputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const main = document.getElementById("main");

function makeTask() {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer-div");
  const span = document.createElement("span");

  span.textContent = taskInputBox.value;
  span.classList.add("span");
  const deleteBtn = createDeleteBtn(taskContainer);
  const checkBoxBtn = createCheckBoxBtn(span);
  taskContainer.appendChild(checkBoxBtn);
  taskContainer.appendChild(span);
  taskContainer.appendChild(deleteBtn);
  return taskContainer;
}

function addTaskToBody() {
  const task = makeTask();
  const secondElement = task.children[1];
  if ((secondElement.value = taskInputBox.value)) {
    main.appendChild(task);
  } else {
    main = "";
  }
  taskInputBox.value = "";
  return task;
}

function createDeleteBtn(taskContainer) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.classList.add("delete-button");
  deleteBtn.addEventListener("click", () => {
    main.removeChild(taskContainer);
  });
  return deleteBtn;
}

function createCheckBoxBtn(span) {
  const checkBoxBtn = document.createElement("button");
  checkBoxBtn.classList.add("checkBox-button");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "ionicon");
  svg.setAttribute("viewBox", "0 0 512 512");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("stroke-width", "32");
  path.setAttribute("d", "M416 128L192 384l-96-96");
  svg.appendChild(path);
  svg.style.height = "40px";
  svg.style.width = "28px";
  svg.style.fontSize = "12px";
  let isChecked = false;

  function toggleCheckbox() {
    isChecked = !isChecked;
    if (isChecked) {
      span.style.textDecoration = "line-through";
      span.style.color = "grey";
      checkBoxBtn.appendChild(svg);
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
      checkBoxBtn.removeChild(svg);
    }
  }

  checkBoxBtn.addEventListener("click", toggleCheckbox);
  return checkBoxBtn;
}

addBtn.addEventListener("click", addTaskToBody);
