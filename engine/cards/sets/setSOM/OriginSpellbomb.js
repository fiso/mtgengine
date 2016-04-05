"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OriginSpellbomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Origin Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = OriginSpellbomb;
