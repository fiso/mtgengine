"use strict";
const Constants = require ("../../../Constants");
const ProwlingNightstalkerBase = require("../setME4/ProwlingNightstalker");

class ProwlingNightstalker extends ProwlingNightstalkerBase {
  constructor (game) {
    super(game, "Prowling Nightstalker", "Portal Second Age", "PO2");
  }
}

module.exports = ProwlingNightstalker;
