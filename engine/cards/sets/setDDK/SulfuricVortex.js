"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SulfuricVortex extends Card {
  constructor(game) {
    super(game, "Sulfuric Vortex", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SulfuricVortex;
