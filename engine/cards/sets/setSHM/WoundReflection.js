"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoundReflection extends Card {
  constructor(game) {
    super(game, "Wound Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = WoundReflection;
