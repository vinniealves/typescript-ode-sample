import { AddTaskInput } from "../domain/AddTaskInput";

export default abstract class TaskController {
    abstract add_task(task: AddTaskInput): void;
}