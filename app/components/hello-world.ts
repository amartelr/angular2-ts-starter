//import the Component and View from angular
import {Component, View} from 'angular2/core';

@Component({
      selector: 'hello-world',
})

@View({
   template: `
      <h1>This is our first component named:  {{name}}!</h1>
      <button (click)="onClickHandler()">Change me</button>
   `
})

export class HelloWorldComponent {
   name : string;

   constructor() {
      this.name = "HelloWorldComponent";
   }

   onClickHandler(){
      this.name = "Changed"
   }
}
