"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Torchling extends Card {
  constructor(game) {
    super(game, "Torchling", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Torchling;
