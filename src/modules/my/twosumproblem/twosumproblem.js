import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

  inputArray;
  inputNumber = [];

  @track outputArray = [];

  changeInputNumber(event) {
    this.inputNumber = event.target.value;
  }

  changeInputArray(event) {
    this.inputArray = event.target.value;
  }

  calculate() {

    let inputArrayNumber = this.inputArray.split(',').map(item => {
      return parseInt(item, 10)
    });

    this.outputArray = this.twoSum(inputArrayNumber, this.inputNumber);
    
  }

  twoSum (nums, target) {
    
    let myMap = new Map();
    let count=0;
    let returnArray = [];
    nums.forEach(element => {
        myMap.set(element, count);
        count++;
    });
    
    
    myMap.forEach((value, key) => {
        if(myMap.has(target-key)) {
           returnArray = [value, myMap.get(target-key)];
        }
    });
    
    return returnArray;
  }

}