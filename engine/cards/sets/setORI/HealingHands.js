"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HealingHands extends Card {
  constructor(game) {
    super(game, "Healing Hands", "Magic Origins", "ORI");
  }
}

module.exports = HealingHands;
