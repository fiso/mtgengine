"use strict";
const Constants = require ("../../../Constants");
const AncientExcavationBase = require("../setCM2/AncientExcavation");

class AncientExcavation extends AncientExcavationBase {
  constructor (game) {
    super(game, "Ancient Excavation", "Commander 2016", "C16");
  }
}

module.exports = AncientExcavation;
