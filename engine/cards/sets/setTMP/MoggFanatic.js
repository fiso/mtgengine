"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggFanaticBase = require("../setATH/MoggFanatic.js");

class MoggFanatic extends MoggFanaticBase {
  constructor(game) {
    super(game, "Mogg Fanatic", "Tempest", "TMP");
  }
}

module.exports = MoggFanatic;
