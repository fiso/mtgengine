"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NihilSpellbomb extends Card {
  constructor(game) {
    super(game, "Nihil Spellbomb", "Commander 2013 Edition", "C13");
  }
}

module.exports = NihilSpellbomb;
