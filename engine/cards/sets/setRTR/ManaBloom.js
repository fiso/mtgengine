"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaBloom extends Card {
  constructor(game) {
    super(game, "Mana Bloom", "Return to Ravnica", "RTR");
  }
}

module.exports = ManaBloom;
