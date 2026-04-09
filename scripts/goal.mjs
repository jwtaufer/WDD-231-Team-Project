class Goal {
    constructor() {
        this.name;
    }

    setGoal(goalName) {
        this.goal = goalName;
    }

    getGoal() {
        return this.name;
    }

    renderItem() {
        return `<li>${this.name}</li>`
    }
}

export default Goal;