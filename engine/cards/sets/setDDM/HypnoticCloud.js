"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HypnoticCloud extends Card {
  constructor(game) {
    super(game, "Hypnotic Cloud", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = HypnoticCloud;
