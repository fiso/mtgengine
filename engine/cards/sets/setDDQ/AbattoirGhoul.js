"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbattoirGhoul extends Card {
  constructor(game) {
    super(game, "Abattoir Ghoul", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = AbattoirGhoul;
