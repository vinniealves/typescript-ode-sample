"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddTaskUseCase_1 = __importDefault(require("../../../../features/manage_tasks/business/AddTaskUseCase"));
const TaskRepositoryImpl_1 = __importDefault(require("../TaskRepositoryImpl"));
const TaskControllerImpl_1 = __importDefault(require("./TaskControllerImpl"));
class GatewayInjectorImpl {
    static inject() {
        const repoAPI = new TaskRepositoryImpl_1.default();
        const addTaskUseCase = new AddTaskUseCase_1.default(repoAPI);
        return new TaskControllerImpl_1.default(addTaskUseCase);
    }
}
exports.default = GatewayInjectorImpl;
