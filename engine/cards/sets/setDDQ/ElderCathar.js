"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElderCathar extends Card {
  constructor(game) {
    super(game, "Elder Cathar", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ElderCathar;
