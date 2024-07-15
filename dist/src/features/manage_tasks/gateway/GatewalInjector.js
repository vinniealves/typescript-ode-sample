"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ode_1 = require("typescript-ode");
class GatewayInjector extends typescript_ode_1.BaseViewModel {
    static set instance(instance) {
        GatewayInjector._instance = instance;
    }
    static get instance() {
        if (GatewayInjector._instance === null) {
            throw new Error("GatewayInjector.self not initialized");
        }
        return GatewayInjector._instance;
    }
    get presenter() {
        console.log('GatewayInjector');
        return GatewayInjector.instance.presenter;
    }
}
GatewayInjector._instance = null;
exports.default = GatewayInjector;
