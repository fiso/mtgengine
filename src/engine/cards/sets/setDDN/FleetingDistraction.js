"use strict";
const Constants = require ("../../../Constants");
const FleetingDistractionBase = require("../setCN2/FleetingDistraction");

class FleetingDistraction extends FleetingDistractionBase {
  constructor (game) {
    super(game, "Fleeting Distraction", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FleetingDistraction;
