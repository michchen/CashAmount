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
    // const cash = new CashAmount(10.50);
    // cash.totalInPennies(); // -> 1050
    return this.amount * 100;
  }

  addDoubleAmount(toAdd) {
    // const cash = new CashAmount(10.50);
    // cash.addDoubleAmount(29.33);
    // cash.totalInPennies(); // -> 3983

    let first = this; // amount of cash, aka "this"
    let second = new CashAmount(toAdd); // amount of second cash value (param)

    // convert both to pennies, add together

    this.amount = this.amount + second.amount;
  }

  quantityOfEachDenomination() {
    // const cash = new CashAmount(967.93);
    // cash.quantityOfEachDenomination()
    // -> { 'hundreds': 9, 'fifties': 1, 'twenties': 0, 'tens': 1, 'fives': 1, 'ones': 2, 'quarters': 3, 'dimes': 1, 'nickels': 1, 'pennies': 3 }
    //     let c = this.amount;

    // let billsAndCoins = [100, 50, 20, 10, 5, 1,0.25, 0.10, 0.05, 0.01];
    let billsAndCoins = {
      100: "hundreds",
      50: "fifties",
      20: "twenties",
      10: "tens",
      5: "fives",
      1: "ones",
      0.25: "quarters",
      0.1: "dimes",
      0.05: "nickels",
      0.01: "pennies;"
    };
    //     let names = ['hundreds': 9, 'fifties': 1, 'twenties': 0, 'tens': 1, 'fives': 1, 'ones': 2, 'quarters': 3, 'dimes': 1, 'nickels': 1, 'pennies': 3
    let quantity = {};

    var recurse = function(amount, i) {
      while (amount >= billsAndCoins[i]) {
        amount = amount - billsAndCoins[i];
      }
      if (amount < billsAndCoins[i] && i < billsAndCoins.length - 1) {
        return recurse(amount, i + 1);
      }
    };
    recurse(this.amount, 0);
  }

  toDouble() {
    // const cash = new CashAmount(10.50);
    // cash.addDoubleAmount(29.33);
    // cash.toDouble(); // -> 39.83
  }

  toDoubleString() {
    // const cash = new CashAmount(10.50);
    // cash.addDoubleAmount(29.33);
    // cash.toDoubleString(); // -> '39.83'
  }
}

var c = new CashAmount(6.93);

c.quantityOfEachDenomination();
