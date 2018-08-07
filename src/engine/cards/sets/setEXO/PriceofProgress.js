"use strict";
const Constants = require ("../../../Constants");
const PriceofProgressBase = require("../setEMA/PriceofProgress");

class PriceofProgress extends PriceofProgressBase {
  constructor (game) {
    super(game, "Price of Progress", "Exodus", "EXO");
  }
}

module.exports = PriceofProgress;
