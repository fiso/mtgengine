"use strict";
const Constants = require ("../../../Constants");
const BloodKnightBase = require("../setpCMP/BloodKnight");

class BloodKnight extends BloodKnightBase {
  constructor(game) {
    super(game, "Blood Knight", "Planar Chaos", "PLC");
  }
}

module.exports = BloodKnight;
