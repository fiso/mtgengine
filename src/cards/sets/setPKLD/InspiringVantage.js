"use strict";
const Constants = require ("../../../Constants");
const InspiringVantageBase = require("../setKLD/InspiringVantage");

class InspiringVantage extends InspiringVantageBase {
  constructor (game) {
    super(game, "Inspiring Vantage", "Kaladesh Promos", "PKLD");
  }
}

module.exports = InspiringVantage;
