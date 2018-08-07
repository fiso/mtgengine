"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellSuck extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Suck", "Unstable", "UST");
  }
}

module.exports = SpellSuck;
