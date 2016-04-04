"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FleetingDistractionBase = require("../setAVR/FleetingDistraction.js");

class FleetingDistraction extends FleetingDistractionBase {
  constructor(game) {
    super(game, "Fleeting Distraction", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FleetingDistraction;
