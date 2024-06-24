"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ode_1 = require("typescript-ode");
const GatewalInjector_1 = __importDefault(require("../../../../features/manage_tasks/gateway/GatewalInjector"));
class TaskControllerImpl extends GatewalInjector_1.default {
    constructor(addTask) {
        super();
        this.addTask = addTask;
        this.addTask = addTask;
    }
    handle_error(error) {
        console.log(`handle_error: ${error.message}.`);
    }
    handle_success(value) {
        if (value !== undefined) {
            return this.on_sequence(value);
        }
    }
    on_sequence(tasks) {
        const sequence = typescript_ode_1.SequenceUseCase.builder();
        tasks.forEach(task => {
            sequence.add(this.addTask, task);
        });
        const usecases = sequence.build();
        this.dispatchUseCase(null, usecases);
    }
    add_task(task) {
        // const params = new ParamsAPI(page, "casas");
        console.log(task);
        this.dispatchUseCase(task, this.addTask);
    }
}
exports.default = TaskControllerImpl;
