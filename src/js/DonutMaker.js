class DonutMaker {
    constructor() {
        this._donutCount = 0;
        this._numberOfAutoClickers = 0;
        this._autoClickerCost = 100;
    }

    stashDonutsforTesting() { //------------- Testing-----------------
        this._donutCount += 1000;
    }

    recordClick() { //-------------------------Click------------------
        this._donutCount++;
    }
    get clickCount() {
        return this._donutCount;
    }
    recordAutoClick() { //------------------Auto Clicker--------------
        this._donutCount++;
    }
    get autoClickCount() {
        return this._donutCount;
    }


    get autoClickerCost() {
        let unRoundedCost = 100 * Math.pow(1.1, this._numberOfAutoClickers - 1);
        this._autoClickerCost = Math.round(unRoundedCost)
        return this._autoClickerCost;

    }

    buyAutoClicker() {
        if (this.autoClickersPurchased == 0) {
            if (this._donutCount >= 100) {
                this._numberOfAutoClickers++;
                this._donutCount -= 100;
            } else {}
        } else {
            if (this._donutCount >= this.autoClickerCost) {
                this._numberOfAutoClickers++;
                this._donutCount -= this.autoClickerCost;
            } else {}
        }
    }

    get autoClickersPurchased() {
        return this._numberOfAutoClickers;
    }

    activateAutoClickers() {
        var i = 0
        while (i < this._numberOfAutoClickers) {
            this._donutCount++
                i++;
        }

    }

}