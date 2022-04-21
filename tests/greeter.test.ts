import { Greeter } from "../src/greeter";
import { JavaScriptGreeter } from "../src/javascriptgreeter";
import {LoudGreeter} from "../src/loudgreeter";
import { HtmlGreeter } from "../src/htmlgreeter";

describe("Testing the Greeter Class", () => {
    test("Hello, Andrew!", () => {
        let hello = new Greeter("Hello");
        expect(hello.greet("Andrew")).toBe("Hello, Andrew!")
    })
    test("Yassou, Vasilios!", () => {
        let hello = new Greeter("Yassou");
        expect(hello.greet("Vasilios")).toBe("Yassou, Vasilios!")
    })
    test("What's good, Lexi!", () => {
        let hello = new Greeter("What's good");
        expect(hello.greet("Lexi")).toBe("What's good, Lexi!")
    })
})

describe("Testing the JavaScriptGreeter Class", () => {
    test("console.log(Hello, Andrew!)", () => {
        let hello = new JavaScriptGreeter("Hello");
        expect(hello.greet("Andrew")).toBe("console.log(Hello, Andrew!)")
    })
    test("console.log(Yassou, Vasilios!)", () => {
        let hello = new JavaScriptGreeter("Yassou");
        expect(hello.greet("Vasilios")).toBe("console.log(Yassou, Vasilios!)")
    })
    test("console.log(What's good, Lexi!)", () => {
        let hello = new JavaScriptGreeter("What's good");
        expect(hello.greet("Lexi")).toBe("console.log(What's good, Lexi!)")
    })
})

describe("Testing the LoudGreeter Class", () => {
    test("Hello, Andrew!!", () => {
        let hello = new LoudGreeter("Hello");
        expect(hello.greet("Andrew")).toBe("Hello, Andrew!!")
    })
    test("Yassou, Vasilios!!!", () => {
        let hello = new LoudGreeter("Yassou");
        hello.addVolume();
        expect(hello.greet("Vasilios")).toBe("Yassou, Vasilios!!!")
    })
    test("What's good, Lexi!!!!!", () => {
        let hello = new LoudGreeter("What's good");
        hello.addVolume();
        hello.addVolume();
        hello.addVolume();
        expect(hello.greet("Lexi")).toBe("What's good, Lexi!!!!!")
    })
})

describe("Testing the HtmlGreeter Class", () => {
    test("<h1>Hello, Andrew!</h1>", () => {
        let hello = new HtmlGreeter("Hello");
        expect(hello.greet("Andrew")).toBe("<h1>Hello, Andrew!</h1>")
    })
    test("<p>Yassou, Vasilios!</p>", () => {
        let hello = new HtmlGreeter("Yassou", "p");
        expect(hello.greet("Vasilios")).toBe("<p>Yassou, Vasilios!</p>")
    })
    test("<div>What's good, Lexi!</div>", () => {
        let hello = new HtmlGreeter("What's good", "div");
        expect(hello.greet("Lexi")).toBe("<div>What's good, Lexi!</div>")
    })
})