"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaReflection extends Card {
  constructor(game) {
    super(game, "Mana Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = ManaReflection;
