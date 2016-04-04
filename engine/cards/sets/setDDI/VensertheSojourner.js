"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VensertheSojourner extends Card {
  constructor(game) {
    super(game, "Venser, the Sojourner", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VensertheSojourner;
