"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Torchling extends UnimplementedCard {
  constructor(game) {
    super(game, "Torchling", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Torchling;
