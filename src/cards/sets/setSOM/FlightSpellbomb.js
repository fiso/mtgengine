"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlightSpellbomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Flight Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FlightSpellbomb;
