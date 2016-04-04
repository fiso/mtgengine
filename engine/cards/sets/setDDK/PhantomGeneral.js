"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantomGeneral extends Card {
  constructor(game) {
    super(game, "Phantom General", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = PhantomGeneral;
