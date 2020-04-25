import { tsThisType, thisExpression } from "@babel/types";
import { isNullOrUndefined } from "util";
import { LightningElement, track } from 'lwc';

/*
In JS you can use an Array as a Stack
The araay methods would be push, pop, peek and length.
But here I am going to make my own stack to learn the basics
*/

export default class App extends LightningElement {

  inputNumber;
  @track myStack = new Stack()
  @track poppedElement
  @track stackSize
  @track stackElements = []
  
  pushElement(event) {
    this.myStack.push(this.inputNumber);
    this.stackSize = this.myStack.size();
    this.stackElements = this.myStack.fetchAllElements();
  }

  popElement(event) {
    this.poppedElement = this.myStack.pop();
    this.stackSize = this.myStack.size();
    this.stackElements = this.myStack.fetchAllElements();
  }

  changeInputNumber(event) {
    this.inputNumber = event.target.value;
  }

}


const stackDisplayFunction = () => {
  return 'I will build stack function here';
};

class Stack {

  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push = (element) => {
    this.storage[this.count] = element;
    this.count++;
  }

  pop = () => {
    if(this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  fetchAllElements = () => {
    var returnArray = [];
    for(let x in this.storage) {
      returnArray.push(this.storage[x]);
    }
    return returnArray;
  }

  size = () => this.count

  peek = (index) => this.storage[index]

}


export { stackDisplayFunction, Stack };