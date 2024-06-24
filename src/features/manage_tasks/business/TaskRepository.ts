import { Task } from "../domain/Task";

export default abstract class TaskRepository {
    abstract add(task: Task): void;
    abstract complete(id: string): void;
    abstract list(): Task[];
}