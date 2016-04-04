"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlinkingSpirit extends Card {
  constructor(game) {
    super(game, "Blinking Spirit", "Battle Royale Box Set", "BRB");
  }
}

module.exports = BlinkingSpirit;
