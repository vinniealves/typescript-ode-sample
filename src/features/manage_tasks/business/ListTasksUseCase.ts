import { Task } from "../domain/Task";
import TaskRepository from "./TaskRepository";

export default class ListTasksUseCase {
    constructor(private taskRepository: TaskRepository) { }

    execute(): Task[] {
        return this.taskRepository.list();
    }
}