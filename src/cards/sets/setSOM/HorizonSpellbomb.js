"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorizonSpellbomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Horizon Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HorizonSpellbomb;
