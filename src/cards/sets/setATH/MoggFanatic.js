"use strict";
const Constants = require ("../../../Constants");
const MoggFanaticBase = require("../setEMA/MoggFanatic");

class MoggFanatic extends MoggFanaticBase {
  constructor (game) {
    super(game, "Mogg Fanatic", "Anthologies", "ATH");
  }
}

module.exports = MoggFanatic;
