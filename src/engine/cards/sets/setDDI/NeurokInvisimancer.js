"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokInvisimancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Neurok Invisimancer", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = NeurokInvisimancer;
