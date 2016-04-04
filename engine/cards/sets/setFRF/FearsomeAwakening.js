"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FearsomeAwakening extends Card {
  constructor(game) {
    super(game, "Fearsome Awakening", "Fate Reforged", "FRF");
  }
}

module.exports = FearsomeAwakening;
