"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskRepository_1 = __importDefault(require("../../../features/manage_tasks/business/TaskRepository"));
class TaskRepositoryImpl extends TaskRepository_1.default {
    constructor() {
        super(...arguments);
        this.tasks = [];
    }
    add(task) {
        this.tasks.push(task);
        console.log('TASK REPOSITORY', this.tasks);
    }
    complete(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
    }
    list() {
        return this.tasks;
    }
}
exports.default = TaskRepositoryImpl;
