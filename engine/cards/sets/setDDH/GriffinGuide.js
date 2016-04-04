"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GriffinGuide extends Card {
  constructor(game) {
    super(game, "Griffin Guide", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = GriffinGuide;
