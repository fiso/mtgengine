"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiregrafGhoul extends Card {
  constructor(game) {
    super(game, "Diregraf Ghoul", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DiregrafGhoul;
