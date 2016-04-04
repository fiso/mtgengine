"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhituEncampment extends Card {
  constructor(game) {
    super(game, "Ghitu Encampment", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = GhituEncampment;
