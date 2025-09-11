function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let c of ca) {
    c = c.trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

function saveTodos() {
  const todos = Array.from(document.querySelectorAll("#ft_list .todo"))
                     .map(div => div.textContent);
  setCookie("todos", JSON.stringify(todos), 7);
}

function loadTodos() {
  const data = getCookie("todos");
  if (data) {
    try {
      const todos = JSON.parse(data);
      todos.forEach(text => addTodo(text, false));
    } catch (e) {
      console.error("Cookie parse error:", e);
    }
  }
}

function addTodo(text, save = true) {
  if (!text) return;
  const ftList = document.getElementById("ft_list");
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;
  div.addEventListener("click", () => {
    if (confirm(`Do you want to remove "${text}"?`)) {
      div.remove();
      saveTodos();
    }
  });
  ftList.appendChild(div);
  if (save) saveTodos();
}

document.getElementById("new-btn").addEventListener("click", () => {
  const text = prompt("Enter your new TO DO:");
  if (text && text.trim() !== "") {
    addTodo(text.trim());
  }
});

window.onload = loadTodos;
