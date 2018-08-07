"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiratesPillage extends UnimplementedCard {
  constructor (game) {
    super(game, "Pirate's Pillage", "Rivals of Ixalan", "RIX");
  }
}

module.exports = PiratesPillage;
