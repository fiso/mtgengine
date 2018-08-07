"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellSnare extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Snare", "Battlebond", "BBD");
  }
}

module.exports = SpellSnare;
