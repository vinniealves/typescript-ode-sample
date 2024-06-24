import AddTaskUseCase from "../../../../features/manage_tasks/business/AddTaskUseCase";
import TaskController from "../../../../features/manage_tasks/gateway/TaskController";
import TaskRepositoryImpl from "../TaskRepositoryImpl";
import TaskControllerImpl from "./TaskControllerImpl";

export default class GatewayInjectorImpl {
    static inject(): TaskController {
        const repoAPI = new TaskRepositoryImpl();
        const addTaskUseCase = new AddTaskUseCase(repoAPI);

        return new TaskControllerImpl(addTaskUseCase);
    }
}