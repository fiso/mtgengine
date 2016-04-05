"use strict";
const Constants = require ("../../../Constants");
const BrainFreezeBase = require("../setSCG/BrainFreeze");

class BrainFreeze extends BrainFreezeBase {
  constructor(game) {
    super(game, "Brain Freeze", "Vintage Masters", "VMA");
  }
}

module.exports = BrainFreeze;
