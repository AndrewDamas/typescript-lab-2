class Greeter {
    greeting: string
    constructor(string: string){
        this.greeting = string;
    }
    greet(name: string):string{
        return `${this.greeting}, ${name}!`
    }
}

export {Greeter}