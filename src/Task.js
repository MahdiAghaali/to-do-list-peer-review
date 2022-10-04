export default class Task {
  constructor(id, description, isCompleted) {
    this.id = id;
    this.description = description;
    this.isCompleted = isCompleted;
  }

  showTask(container) {
    const htmlString = `<li id="${this.id}" class='task ${this.isCompleted ? 'checked' : ''}'>
        <div>
          <input type="checkbox" id="${this.id}" ${this.isCompleted ? 'checked' : ''}>
          <input type="text" id="${this.id}" value="${this.description}"/>
        </div>
        <div class='iconContainer'>
          <i class="fa-solid fa-trash-can remove"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        </li>`;
    container.insertAdjacentHTML('beforeend', htmlString);
  }
}