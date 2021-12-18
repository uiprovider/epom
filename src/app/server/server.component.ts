import { Component } from "@angular/core";

@Component({
    selector: 'ecom-app-server'
})
export class ServerComponent {
    title: string | undefined;
}
const getClassNameSymbol = Symbol();
class C {
  [getClassNameSymbol]() {
    return "C";
  }
}
let c = new C();
let className = c[getClassNameSymbol]();