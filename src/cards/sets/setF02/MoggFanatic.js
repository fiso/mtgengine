"use strict";
const Constants = require ("../../../Constants");
const MoggFanaticBase = require("../setEMA/MoggFanatic");

class MoggFanatic extends MoggFanaticBase {
  constructor (game) {
    super(game, "Mogg Fanatic", "Friday Night Magic 2002", "F02");
  }
}

module.exports = MoggFanatic;
