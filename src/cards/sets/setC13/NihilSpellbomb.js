"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NihilSpellbomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Nihil Spellbomb", "Commander 2013 Edition", "C13");
  }
}

module.exports = NihilSpellbomb;
