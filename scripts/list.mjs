import Goal from "./goal.mjs";
import Task from "./task.mjs";

class TaskList {
    constructor() {
        this.list = [];
    }

    add() {
        this.list.push(task);
    }

    remove(task) {
        this.list = this.list.filter(t => t !== task);
    }

    renderList() {
        const tasks = this.list.map(task => task.renderItem()).join("");

        return `<form><ul>${tasks}</ul></form>`;
    }
}

class GoalList {
    constructor() {
        this.list = [];
    }
}

// initialize lists

const q1 = new TaskList();
const q2 = new TaskList();
const q3 = new TaskList();
const q4 = new TaskList();
// const goals = new List();

q1.add(new Task("Homework", "04/08/2026", "Finish Semester"));
q1.add(new Task("Vacuum"));

document.querySelector("#quadrant1").innerHTML = q1.renderList();