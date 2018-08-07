"use strict";
const Constants = require ("../../../Constants");
const BrainFreezeBase = require("../setVMA/BrainFreeze");

class BrainFreeze extends BrainFreezeBase {
  constructor (game) {
    super(game, "Brain Freeze", "Scourge", "SCG");
  }
}

module.exports = BrainFreeze;
