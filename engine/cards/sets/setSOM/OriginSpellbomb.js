"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OriginSpellbomb extends Card {
  constructor(game) {
    super(game, "Origin Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = OriginSpellbomb;
