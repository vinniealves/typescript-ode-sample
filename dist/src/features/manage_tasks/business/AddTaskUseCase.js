"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ode_1 = require("typescript-ode");
class AddTaskUseCase extends typescript_ode_1.UseCase {
    constructor(taskRepository) {
        super();
        this.taskRepository = taskRepository;
        this.taskRepository = taskRepository;
    }
    execute(param) {
        const task = {
            id: Math.random().toString(36).substr(2, 9),
            title: param.title,
            completed: false,
        };
        this.taskRepository.add(task);
        return Promise.resolve(new typescript_ode_1.ValueOutput(task));
    }
}
exports.default = AddTaskUseCase;
