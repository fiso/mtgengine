"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HorizonSpellbomb extends Card {
  constructor(game) {
    super(game, "Horizon Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HorizonSpellbomb;
