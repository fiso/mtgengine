"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpireBarrage extends Card {
  constructor(game) {
    super(game, "Spire Barrage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SpireBarrage;
