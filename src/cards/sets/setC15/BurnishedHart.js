"use strict";
const Constants = require ("../../../Constants");
const BurnishedHartBase = require("../setC14/BurnishedHart");

class BurnishedHart extends BurnishedHartBase {
  constructor (game) {
    super(game, "Burnished Hart", "Commander 2015", "C15");
  }
}

module.exports = BurnishedHart;
