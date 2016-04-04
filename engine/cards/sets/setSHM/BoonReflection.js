"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoonReflection extends Card {
  constructor(game) {
    super(game, "Boon Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = BoonReflection;
