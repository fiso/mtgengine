"use strict";
const Constants = require ("../../../Constants");
const MulldrifterBase = require("../setC18/Mulldrifter");

class Mulldrifter extends MulldrifterBase {
  constructor (game) {
    super(game, "Mulldrifter", "Commander 2014", "C14");
  }
}

module.exports = Mulldrifter;
