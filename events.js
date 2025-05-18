let tasks = [];

function renderTasks(tasks) {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // clear current list

  tasks.forEach(task => {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('strike');

    li.innerHTML = `
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    `;
    todoList.appendChild(li);
  });
}

function newTask() {
  const input = document.getElementById('todo');
  const taskText = input.value.trim();
  if (taskText !== '') {
    tasks.push({ detail: taskText, completed: false });
    input.value = '';
    renderTasks(tasks);
  }
}

function removeTask(taskElement) {
  const taskText = taskElement.querySelector('p').innerText;
  tasks = tasks.filter(task => task.detail !== taskText);
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskText = taskElement.querySelector('p').innerText;
  const taskIndex = tasks.findIndex(task => task.detail === taskText);
  if (taskIndex > -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    taskElement.classList.toggle('strike');
  }
}

function manageTasks(event) {
  const action = event.target.dataset.action;
  const taskElement = event.target.closest('li');

  if (!action || !taskElement) return;

  if (action === 'delete') {
    removeTask(taskElement);
  } else if (action === 'complete') {
    completeTask(taskElement);
  }
}

// Add event listeners
document.getElementById('submitTask').addEventListener('click', newTask);
document.getElementById('todoList').addEventListener('click', manageTasks);
