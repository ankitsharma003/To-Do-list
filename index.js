const inputbox = document.getElementById("input-box");
const task = document.getElementById("list");
function addtask() {
  if (inputbox.value === "") {
    alert("you must write an task");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerHTML = inputbox.value;
    task.appendChild(li);
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  savedata();
}
document.getElementById("list").addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("item");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);
function savedata() {
  localStorage.setItem("data", task.innerHTML);
}
function showdata() {
  task.innerHTML = localStorage.getItem("data");
}
showdata();
