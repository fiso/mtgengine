"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VaporSnag extends Card {
  constructor(game) {
    super(game, "Vapor Snag", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = VaporSnag;
