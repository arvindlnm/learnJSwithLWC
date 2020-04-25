import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

  @track showStack = false;
  @track showTwoSum = false;

  showStackTemplate(state) {
    this.showStack = true;
    this.showTwoSum = false;
  }

  showTwoSumSolution(state) {
    this.showTwoSum = true;
    this.showStack = false;

  }
}
