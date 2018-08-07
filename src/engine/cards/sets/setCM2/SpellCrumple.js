"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellCrumple extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Crumple", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SpellCrumple;
