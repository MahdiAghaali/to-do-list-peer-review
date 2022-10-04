import Task from './Task.js';

export default class ToDoList {
  constructor(element) {
    this.container = element;
    this.tasks = [];
    if (localStorage.getItem('ToDoList') !== null) {
      this.tasks = JSON.parse(localStorage.getItem('ToDoList'));
    }
  }

  updateList() {
    this.container.innerHTML = '';
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].id = i + 1;
      const { description, isCompleted, id } = this.tasks[i];
      const task = new Task(id, description, isCompleted);
      task.showTask(this.container);

      const lastInput = document.querySelectorAll(`input[id ="${i + 1}"]`);
      lastInput[0].addEventListener('keyup', (e) => {
        console.log(e.target.value);
        this.tasks[i].description = e.target.value;
        localStorage.setItem('ToDoList', JSON.stringify(this.tasks));
      });

      const lastcheckbox = document.querySelectorAll(`input[type="checkbox"][id ="${i + 1}"]`);
      lastcheckbox[0].addEventListener('change', () => {
        this.toggleTask(i);
        localStorage.setItem('ToDoList', JSON.stringify(this.tasks));
      });
    }

    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button, i) => {
      button.addEventListener('click', () => {
        this.removeTask(i);
      });
    });

    const tasks = document.querySelectorAll('.task');
    tasks.forEach((task, i) => {
      task.addEventListener('click', () => {
        this.selectTask(i);
      });
    });
    localStorage.setItem('ToDoList', JSON.stringify(this.tasks));
  }

  addTask(task) {
    this.tasks.push(task);
    this.updateList();
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.updateList();
  }

  // eslint-disable-next-line class-methods-use-this
  selectTask(index) {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((task, i) => {
      task.classList.remove('selected');
      if (index === i) {
        task.classList.add('selected');
      }
    });
  }

  toggleTask(i) {
    if (this.tasks[i].isCompleted === true) {
      this.tasks[i].isCompleted = false;
    } else {
      this.tasks[i].isCompleted = true;
    }
    this.updateList();
  }
}
