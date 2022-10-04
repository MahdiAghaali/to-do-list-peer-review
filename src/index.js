import './style.css';
import ToDoList from './ToDoList.js';

const listContainer = document.getElementById('list');
const list = new ToDoList(listContainer);
const taskInput = document.getElementById('taskInput');
const btnClearAll = document.getElementById('removeAll');

list.updateList();

const submit = () => {
  if (taskInput.value === '') {
    return;
  }
  const task = {
    description: taskInput.value,
    isCompleted: false,
    id: list.tasks.length + 1,
  };
  list.addTask(task);
  taskInput.value = '';
};

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submit();
  }
});

document.getElementById('enter').addEventListener('click', submit);

btnClearAll.addEventListener('click', () => {
  for (let i = list.tasks.length - 1; i >= 0; i -= 1) {
    if (list.tasks[i].isCompleted === true) {
      list.removeTask(i);
    }
  }
});