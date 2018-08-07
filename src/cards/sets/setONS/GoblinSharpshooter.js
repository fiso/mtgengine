"use strict";
const Constants = require ("../../../Constants");
const GoblinSharpshooterBase = require("../setPZ1/GoblinSharpshooter");

class GoblinSharpshooter extends GoblinSharpshooterBase {
  constructor (game) {
    super(game, "Goblin Sharpshooter", "Onslaught", "ONS");
  }
}

module.exports = GoblinSharpshooter;
