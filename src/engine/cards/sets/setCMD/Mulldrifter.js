"use strict";
const Constants = require ("../../../Constants");
const MulldrifterBase = require("../setC18/Mulldrifter");

class Mulldrifter extends MulldrifterBase {
  constructor (game) {
    super(game, "Mulldrifter", "Commander 2011", "CMD");
  }
}

module.exports = Mulldrifter;
