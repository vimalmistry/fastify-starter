export default class Controller {
   constructor() {
      // Get all defined class methods
      const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

      // Bind all methods
      methods
         .filter((method: string) => method !== "constructor")
         .forEach((method: string) => {
            //@ts-ignore
            this[method] = this[method].bind(this);
         });
   }
}
