"use strict";
const Constants = require ("../../../Constants");
const EvolvingWildsBase = require("../setBFZ/EvolvingWilds");

class EvolvingWilds extends EvolvingWildsBase {
  constructor(game) {
    super(game, "Evolving Wilds", "Media Inserts", "pMEI");
  }
}

module.exports = EvolvingWilds;
