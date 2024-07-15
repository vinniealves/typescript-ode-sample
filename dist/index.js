"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GatewayInjectorImpl_1 = __importDefault(require("./src/plugin/features/manage_tasks/gateway/GatewayInjectorImpl"));
// const completeTaskUseCase = new CompleteTaskUseCase(taskRepository);
// const listTasksUseCase = new ListTasksUseCase(taskRepository);
const presenter = GatewayInjectorImpl_1.default.inject();
// Adicionar algumas tarefas
presenter.add_task({ title: 'Teste' });
// addTaskUseCase.execute({ title: 'Desenvolver uma biblioteca' });
// // Completar uma tarefa
// const tasks = listTasksUseCase.execute();
// completeTaskUseCase.execute({ id: tasks[0].id });
// // Listar todas as tarefas
// const updatedTasks = listTasksUseCase.execute();
// console.log(updatedTasks);
// export default class GETUseCase extends UseCase<string, any> {
//     private repo: Repository;
//     constructor(repo: Repository) {
//         super();
//         this.repo = repo;
//     }
//     execute(param: string | null): Output<any> {
//         const pokemon = this.repo.doFetch(param);
//         return new ValueOutput<any>(pokemon);
//     }
// }
