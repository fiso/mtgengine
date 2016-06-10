"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellCounter extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Counter", "Unhinged", "UNH");
  }
}

module.exports = SpellCounter;
