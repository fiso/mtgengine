"use strict";
const Constants = require ("../../../Constants");
const FleetingDistractionBase = require("../setCN2/FleetingDistraction");

class FleetingDistraction extends FleetingDistractionBase {
  constructor (game) {
    super(game, "Fleeting Distraction", "Avacyn Restored", "AVR");
  }
}

module.exports = FleetingDistraction;
