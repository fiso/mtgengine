"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessAbandon extends Card {
  constructor(game) {
    super(game, "Reckless Abandon", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = RecklessAbandon;
