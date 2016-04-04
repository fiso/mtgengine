"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlithStrider extends Card {
  constructor(game) {
    super(game, "Slith Strider", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SlithStrider;
