"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellShrivel extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Shrivel", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SpellShrivel;
