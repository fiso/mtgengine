"use strict";
const Constants = require ("../../../Constants");
const EvolvingWildsBase = require("../setBFZ/EvolvingWilds");

class EvolvingWilds extends EvolvingWildsBase {
  constructor(game) {
    super(game, "Evolving Wilds", "Commander 2014", "C14");
  }
}

module.exports = EvolvingWilds;
