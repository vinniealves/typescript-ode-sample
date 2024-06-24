import { CompleteTaskInput } from "../domain/CompleteTaskInput";
import TaskRepository from "./TaskRepository";

export default class CompleteTaskUseCase {
    constructor(private taskRepository: TaskRepository) { }

    execute(input: CompleteTaskInput): void {
        this.taskRepository.complete(input.id);
    }
}
