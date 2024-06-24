import TaskRepository from "../../../features/manage_tasks/business/TaskRepository";
import { Task } from "../../../features/manage_tasks/domain/Task";

export default class TaskRepositoryImpl extends TaskRepository {
    private tasks: Task[] = [];

    add(task: Task): void {
        this.tasks.push(task);
        console.log(this.tasks)
    }

    complete(id: string): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
    }

    list(): Task[] {
        return this.tasks;
    }
}