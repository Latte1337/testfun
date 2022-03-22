/*jshint esversion: 8 */
var expect  = require('chai').expect;

class Pool{
    constructor(assets, ratio) {
        this.assets = assets;
        this.ratio = ratio;
      }

      amountToIncreaseOrDecrease(totalPoolAmount){
        let goalAmount = totalPoolAmount * this.ratio;
        if(goalAmount > this.assets){ // need to incease
            let amountToIncrease = goalAmount - this.assets;
            return amountToIncrease;
        }else if(goalAmount  < this.assets){ // need to decrease
            let amountToDecrease = this.assets - goalAmount;
            return amountToDecrease;
        }
        else{
            return 0;
        }
      }

      increase(totalPoolAmount){
        let goalAmount = totalPoolAmount * this.ratio;
        if(goalAmount >= this.assets){ // need to incease
            return true;
        }else if(goalAmount  < this.assets){ // need to decrease
            return false;
        }
      }

      currentRatio(totalPoolAmount){
          var currentRatio = this.assets / totalPoolAmount;
          return currentRatio;
      }

}

let pool1 = new Pool(5000, 0.5), pool2 = new Pool(4000, 0.4), pool3 = new Pool(1000, 0.1); 
    

    it("Should withdraw 2000 from first pool and then rebalance all with current funds and then meet expected ratio", () => {

        pool1.assets -= 2000; 

        var poolTotalAmount = pool1.assets + pool2.assets + pool3.assets;

        var pool1Difference = pool1.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool2Difference = pool2.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool3Difference = pool3.amountToIncreaseOrDecrease(poolTotalAmount);

        var pool1Incease = pool1.increase(poolTotalAmount);
        var pool2Increase = pool2.increase(poolTotalAmount);
        var pool3Increase = pool3.increase(poolTotalAmount);

        if(pool1Incease){
            pool1.assets += pool1Difference;
        }else{
            pool1.assets -= pool1Difference;
        }

        if(pool2Increase){
            pool2.assets += pool2Difference;
        }else{
            pool2.assets -= pool2Difference;
        }

        if(pool3Increase){
            pool3.assets += pool3Difference;
        }else{
            pool3.assets -= pool3Difference;
        }

        console.log("assets of pool 1 : ", pool1.assets);
        console.log("current ratio of pool1: ", pool1.currentRatio(poolTotalAmount));
        console.log("assets of pool 2 : ", pool2.assets);
        console.log("current ratio of pool2: ", pool2.currentRatio(poolTotalAmount));
        console.log("assets of pool 3 : ", pool3.assets);
        console.log("current ratio of pool3: ", pool3.currentRatio(poolTotalAmount));

        expect(pool1.currentRatio(poolTotalAmount)).to.equal(0.5);
        expect(pool2.currentRatio(poolTotalAmount)).to.equal(0.4);
        expect(pool3.currentRatio(poolTotalAmount)).to.equal(0.1);
    });

    it("Should withdraw 3000 from first pool and then rebalance all with current funds and then meet expected ratio", () => {

        pool1.assets -= 3000; 

        var poolTotalAmount = pool1.assets + pool2.assets + pool3.assets;

        var pool1Difference = pool1.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool2Difference = pool2.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool3Difference = pool3.amountToIncreaseOrDecrease(poolTotalAmount);

        var pool1Incease = pool1.increase(poolTotalAmount);
        var pool2Increase = pool2.increase(poolTotalAmount);
        var pool3Increase = pool3.increase(poolTotalAmount);

        if(pool1Incease){
            pool1.assets += pool1Difference;
        }else{
            pool1.assets -= pool1Difference;
        }

        if(pool2Increase){
            pool2.assets += pool2Difference;
        }else{
            pool2.assets -= pool2Difference;
        }

        if(pool3Increase){
            pool3.assets += pool3Difference;
        }else{
            pool3.assets -= pool3Difference;
        }

        console.log("assets of pool 1 : ", pool1.assets);
        console.log("current ratio of pool1: ", pool1.currentRatio(poolTotalAmount));
        console.log("assets of pool 2 : ", pool2.assets);
        console.log("current ratio of pool2: ", pool2.currentRatio(poolTotalAmount));
        console.log("assets of pool 3 : ", pool3.assets);
        console.log("current ratio of pool3: ", pool3.currentRatio(poolTotalAmount));

        expect(pool1.currentRatio(poolTotalAmount)).to.equal(0.5);
        expect(pool2.currentRatio(poolTotalAmount)).to.equal(0.4);
        expect(pool3.currentRatio(poolTotalAmount)).to.equal(0.1);
    });

    it("Should withdraw 1000 from second pool and 500 from third pool and then rebalance all with current funds and then meet expected ratio", () => {

        pool2.assets -= 1000;
        pool3.assets -= 500; 

        var poolTotalAmount = pool1.assets + pool2.assets + pool3.assets;

        var pool1Difference = pool1.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool2Difference = pool2.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool3Difference = pool3.amountToIncreaseOrDecrease(poolTotalAmount);

        var pool1Incease = pool1.increase(poolTotalAmount);
        var pool2Increase = pool2.increase(poolTotalAmount);
        var pool3Increase = pool3.increase(poolTotalAmount);

        if(pool1Incease){
            pool1.assets += pool1Difference;
        }else{
            pool1.assets -= pool1Difference;
        }

        if(pool2Increase){
            pool2.assets += pool2Difference;
        }else{
            pool2.assets -= pool2Difference;
        }

        if(pool3Increase){
            pool3.assets += pool3Difference;
        }else{
            pool3.assets -= pool3Difference;
        }

        console.log("assets of pool 1 : ", pool1.assets);
        console.log("current ratio of pool1: ", pool1.currentRatio(poolTotalAmount));
        console.log("assets of pool 2 : ", pool2.assets);
        console.log("current ratio of pool2: ", pool2.currentRatio(poolTotalAmount));
        console.log("assets of pool 3 : ", pool3.assets);
        console.log("current ratio of pool3: ", pool3.currentRatio(poolTotalAmount));

        expect(pool1.currentRatio(poolTotalAmount)).to.equal(0.5);
        expect(pool2.currentRatio(poolTotalAmount)).to.equal(0.4);
        expect(pool3.currentRatio(poolTotalAmount)).to.equal(0.1);
    });

    it("Should deposit 1000 to first pool and then rebalance all with current funds and then meet expected ratio", () => {

        pool1.assets += 1000;

        var poolTotalAmount = pool1.assets + pool2.assets + pool3.assets;

        var pool1Difference = pool1.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool2Difference = pool2.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool3Difference = pool3.amountToIncreaseOrDecrease(poolTotalAmount);

        var pool1Incease = pool1.increase(poolTotalAmount);
        var pool2Increase = pool2.increase(poolTotalAmount);
        var pool3Increase = pool3.increase(poolTotalAmount);

        if(pool1Incease){
            pool1.assets += pool1Difference;
        }else{
            pool1.assets -= pool1Difference;
        }

        if(pool2Increase){
            pool2.assets += pool2Difference;
        }else{
            pool2.assets -= pool2Difference;
        }

        if(pool3Increase){
            pool3.assets += pool3Difference;
        }else{
            pool3.assets -= pool3Difference;
        }

        console.log("assets of pool 1 : ", pool1.assets);
        console.log("current ratio of pool1: ", pool1.currentRatio(poolTotalAmount));
        console.log("assets of pool 2 : ", pool2.assets);
        console.log("current ratio of pool2: ", pool2.currentRatio(poolTotalAmount));
        console.log("assets of pool 3 : ", pool3.assets);
        console.log("current ratio of pool3: ", pool3.currentRatio(poolTotalAmount));

        expect(pool1.currentRatio(poolTotalAmount)).to.equal(0.5);
        expect(pool2.currentRatio(poolTotalAmount)).to.equal(0.4);
        expect(pool3.currentRatio(poolTotalAmount)).to.equal(0.1);
    });

    it("Should deposit 1000 to first pool and then rebalance all with current funds and then meet expected ratio, no extra deposit needed", () => {

        var depositAmount = 1000;
        var previewAmount = pool1.assets + depositAmount; // you can ofc store this in a memory valuable, no need to write to storage until all calculations are done, basicly modify the functions 

        var poolTotalAmount = previewAmount + pool2.assets + pool3.assets;

        var pool1Difference = pool1.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool2Difference = pool2.amountToIncreaseOrDecrease(poolTotalAmount);
        var pool3Difference = pool3.amountToIncreaseOrDecrease(poolTotalAmount);

        var pool1Incease = pool1.increase(poolTotalAmount);
        var pool2Increase = pool2.increase(poolTotalAmount);
        var pool3Increase = pool3.increase(poolTotalAmount);

        console.log("pool1Incease", pool1Incease);
        console.log("pool1Difference", pool1Difference);

        if(pool1Incease){
            
            var valueToIncrease = depositAmount - pool1Difference;
            console.log("valueToIncrease", valueToIncrease);
            pool1.assets += valueToIncrease;
        }else{
            var valueToDecrease = depositAmount + pool1Difference;
            console.log("pool1Difference", pool1Difference);
            pool1.assets -= valueToDecrease;
        }

        if(pool2Increase){
            pool2.assets += pool2Difference;
        }else{
            pool2.assets -= pool2Difference;
        }

        if(pool3Increase){
            pool3.assets += pool3Difference;
        }else{
            pool3.assets -= pool3Difference;
        }

        console.log("assets of pool 1 : ", pool1.assets);
        console.log("current ratio of pool1: ", pool1.currentRatio(poolTotalAmount));
        console.log("assets of pool 2 : ", pool2.assets);
        console.log("current ratio of pool2: ", pool2.currentRatio(poolTotalAmount));
        console.log("assets of pool 3 : ", pool3.assets);
        console.log("current ratio of pool3: ", pool3.currentRatio(poolTotalAmount));

        expect(pool1.currentRatio(poolTotalAmount)).to.equal(0.5);
        expect(pool2.currentRatio(poolTotalAmount)).to.equal(0.4);
        expect(pool3.currentRatio(poolTotalAmount)).to.equal(0.1);
    });
