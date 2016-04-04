"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PanicSpellbomb extends Card {
  constructor(game) {
    super(game, "Panic Spellbomb", "Commander 2014", "C14");
  }
}

module.exports = PanicSpellbomb;
