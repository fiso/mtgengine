"use strict";
const Constants = require ("../../../Constants");
const EvolvingWildsBase = require("../setC18/EvolvingWilds");

class EvolvingWilds extends EvolvingWildsBase {
  constructor (game) {
    super(game, "Evolving Wilds", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = EvolvingWilds;
