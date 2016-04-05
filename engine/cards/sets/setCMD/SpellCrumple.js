"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellCrumple extends UnimplementedCard {
  constructor(game) {
    super(game, "Spell Crumple", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SpellCrumple;
