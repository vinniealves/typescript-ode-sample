import { BaseViewModel } from "typescript-ode";
import TaskController from "./TaskController";


export default class GatewayInjector extends BaseViewModel {
    private static _instance: GatewayInjector | null = null;



    static set instance(instance: GatewayInjector) {
        GatewayInjector._instance = instance;
    }

    static get instance(): GatewayInjector {
        if (GatewayInjector._instance === null) {
            throw new Error("GatewayInjector.self not initialized");
        }
        return GatewayInjector._instance;
    }

    get presenter(): TaskController {
        console.log('GatewayInjector')
        return GatewayInjector.instance.presenter;
    }
}
