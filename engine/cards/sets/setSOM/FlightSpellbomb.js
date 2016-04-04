"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlightSpellbomb extends Card {
  constructor(game) {
    super(game, "Flight Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FlightSpellbomb;
