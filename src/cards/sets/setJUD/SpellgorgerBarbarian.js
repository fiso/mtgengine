"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellgorgerBarbarian extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellgorger Barbarian", "Judgment", "JUD");
  }
}

module.exports = SpellgorgerBarbarian;
