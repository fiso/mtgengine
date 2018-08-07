"use strict";
const Constants = require ("../../../Constants");
const AncientExcavationBase = require("../setCM2/AncientExcavation");

class AncientExcavation extends AncientExcavationBase {
  constructor (game) {
    super(game, "Ancient Excavation", "You Make the Cube", "PZ2");
  }
}

module.exports = AncientExcavation;
