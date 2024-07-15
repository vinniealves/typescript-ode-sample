import { Output, UseCase, ValueOutput } from 'typescript-ode';
import { AddTaskInput } from "../domain/AddTaskInput";
import { Task } from "../domain/Task";
import TaskRepository from './TaskRepository';

export default class AddTaskUseCase extends UseCase<AddTaskInput, Task> {
    constructor(private taskRepository: TaskRepository) {
        super();
        console.log('INICIEI', this.taskRepository)
        this.taskRepository = taskRepository
    }

    execute(param: AddTaskInput): Promise<Output<Task>> {
        console.log('CHEGUEI')
        const task: Task = {
            id: Math.random().toString(36).substr(2, 9),
            title: param.title,
            completed: false,
        };
        // this.taskRepository.add(task)
        return Promise.resolve(new ValueOutput(task))
    }
}