"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkingSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Blinking Spirit", "Battle Royale Box Set", "BRB");
  }
}

module.exports = BlinkingSpirit;
