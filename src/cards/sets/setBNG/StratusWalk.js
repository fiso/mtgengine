"use strict";
const Constants = require ("../../../Constants");
const StratusWalkBase = require("../setORI/StratusWalk");

class StratusWalk extends StratusWalkBase {
  constructor (game) {
    super(game, "Stratus Walk", "Born of the Gods", "BNG");
  }
}

module.exports = StratusWalk;
