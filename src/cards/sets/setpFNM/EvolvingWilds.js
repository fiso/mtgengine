"use strict";
const Constants = require ("../../../Constants");
const EvolvingWildsBase = require("../setBFZ/EvolvingWilds");

class EvolvingWilds extends EvolvingWildsBase {
  constructor (game) {
    super(game, "Evolving Wilds", "Friday Night Magic", "pFNM");
  }
}

module.exports = EvolvingWilds;
