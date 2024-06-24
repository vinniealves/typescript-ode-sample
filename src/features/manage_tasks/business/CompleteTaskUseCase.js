"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompleteTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute(input) {
        this.taskRepository.complete(input.id);
    }
}
exports.default = CompleteTaskUseCase;
