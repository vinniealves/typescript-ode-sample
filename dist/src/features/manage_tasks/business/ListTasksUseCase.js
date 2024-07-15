"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListTasksUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute() {
        return this.taskRepository.list();
    }
}
exports.default = ListTasksUseCase;
