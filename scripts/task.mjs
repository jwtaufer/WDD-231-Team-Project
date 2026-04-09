import Goal from "./goal.mjs";

class Task {
    constructor(name, date, goal) {
        this.id;
        this.name = name;
        this.dueDate = date || "";
        this.goal = goal || "";
    }

    setId(id) {
        this.id = id;
    }

    renterItem() {
        return `<li class="task">
                    <span class="task-label">
                        <input type="checkbox">
                        <p>Task Name</p>
                        <button class="drop-down-button">&#9666;</button>
                    </span>
                    <span class="drop-down closed">
                        <p>Due: mm/dd/yyyy</p>
                        <p>Associated Goal: <em>goal</em></p>
                    </span>
                </li>`
    }
}

export default Task;

