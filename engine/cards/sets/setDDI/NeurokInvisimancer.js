"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeurokInvisimancer extends Card {
  constructor(game) {
    super(game, "Neurok Invisimancer", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = NeurokInvisimancer;
