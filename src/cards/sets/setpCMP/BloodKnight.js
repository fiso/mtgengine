"use strict";
const Constants = require ("../../../Constants");
const BloodKnightBase = require("../setPLC/BloodKnight");

class BloodKnight extends BloodKnightBase {
  constructor (game) {
    super(game, "Blood Knight", "Champs and States", "PCMP");
  }
}

module.exports = BloodKnight;
