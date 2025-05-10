let list = document.getElementById("task-list");

function add() {
  let inp = document.getElementById("inp").value;

  if (inp.trim() === "") {
    alert("Add Task");
    return false;
  } else {
    let li = document.createElement("li");
    li.innerText = inp;
    list.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = '&times;';
    li.appendChild(span);
    
    document.getElementById("inp").value = "";
    data();
  }
}

list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("uncheck");
    data();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    data();
  }
});

function data() {
  localStorage.setItem("task", list.innerHTML);`  `
}

function show() {
  list.innerHTML = localStorage.getItem("task");
}

show();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service Worker registration failed:', error);
    });
}

