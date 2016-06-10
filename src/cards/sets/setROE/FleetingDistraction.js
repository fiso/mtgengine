"use strict";
const Constants = require ("../../../Constants");
const FleetingDistractionBase = require("../setAVR/FleetingDistraction");

class FleetingDistraction extends FleetingDistractionBase {
  constructor (game) {
    super(game, "Fleeting Distraction", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = FleetingDistraction;
