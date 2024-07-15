import { SequenceUseCase } from "typescript-ode";
import AddTaskUseCase from "../../../../features/manage_tasks/business/AddTaskUseCase";
import { Task } from "../../../../features/manage_tasks/domain/Task";
import TaskController from "../../../../features/manage_tasks/gateway/TaskController";
import GatewayInjector from "../../../../features/manage_tasks/gateway/GatewalInjector";
import { AddTaskInput } from "../../../../features/manage_tasks/domain/AddTaskInput";

export default class TaskControllerImpl extends GatewayInjector implements TaskController {
    constructor(private addTask: AddTaskUseCase) {
        super();
        this.addTask = addTask;
    }

    handle_error(error: Error) {
        console.log(`handle_error: ${error.message}.`);
    }

    handle_success(value: any) {
        if (value as Task[] !== undefined) {
            return this.on_sequence(value as Task[]);
        }
    }

    on_sequence(tasks: Task[]) {
        const sequence = SequenceUseCase.builder();
        tasks.forEach(task => {
            sequence.add(this.addTask, task);
        });

        const usecases = sequence.build();
        this.dispatchUseCase(null, usecases);
    }

    add_task(task: AddTaskInput) {
        this.dispatchUseCase(task as Task, this.addTask)
    }
}


