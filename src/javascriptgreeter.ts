import { Greeter } from "./greeter";

class JavaScriptGreeter extends Greeter {
    greet(name: string){
        return `console.log(${this.greeting}, ${name}!)`
    }
}

export {JavaScriptGreeter}