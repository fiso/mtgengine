"use strict";
const Constants = require ("../../../Constants");
const MoggFanaticBase = require("../setATH/MoggFanatic");

class MoggFanatic extends MoggFanaticBase {
  constructor (game) {
    super(game, "Mogg Fanatic", "Tempest", "TMP");
  }
}

module.exports = MoggFanatic;
