"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodKnightBase = require("../setpCMP/BloodKnight.js");

class BloodKnight extends BloodKnightBase {
  constructor(game) {
    super(game, "Blood Knight", "Planar Chaos", "PLC");
  }
}

module.exports = BloodKnight;
