"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor() {
        // Get all defined class methods
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        // Bind all methods
        methods
            .filter((method) => method !== "constructor")
            .forEach((method) => {
            //@ts-ignore
            this[method] = this[method].bind(this);
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map