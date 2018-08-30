/*
    In programming languages such as JavaScript, 0.1 + 0.2 does not equal 0.3 (floating-point arithmetic)

    make a class called CashAmount that accepts double
    values (e.g., 14.72) and will never suffer from precision problems.
    CashAmount represents a collection of bills and coins

    you can do this by converting to pennies for all denominations so you are always working with integers,
    then converting back to a two-decimal float as needed


*/

class CashAmount {
  constructor(amount) {
    this.amount = amount;
  }

  totalInPennies() {
    return this.amount * 100;
  }

  addDoubleAmount(toAdd) {
    let first = this;
    if (toAdd !== undefined) {
      let second = new CashAmount(toAdd);
      this.amount = (this.totalInPennies() + second.totalInPennies()) / 100;
    }
  }

  quantityOfEachDenomination() {
    let billsCoins = [10000, 5000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    let billCoinNames = {
      10000: "hundreds",
      5000: "fifties",
      2000: "twenties",
      1000: "tens",
      500: "fives",
      100: "ones",
      25: "quarters",
      10: "dimes",
      5: "nickels",
      1: "pennies"
    };
    let result = {};

    var recurse = function(amount, i) {
      let numOfAmount = 0;
      let curBillCoin = billsCoins[i];

      while (amount >= curBillCoin) {
        amount = amount - curBillCoin;
        numOfAmount++;
      }
      if (amount < curBillCoin && i < billsCoins.length) {
        result[billCoinNames[curBillCoin]] = numOfAmount;
        return recurse(amount, i + 1);
      }
    };

    recurse(this.amount * 100, 0);
  }

  toDouble() {
    return this.amount;
  }

  toDoubleString() {
    return String(this.amount);
  }
}

// var c = new CashAmount(967.93);
//
// c.quantityOfEachDenomination();
