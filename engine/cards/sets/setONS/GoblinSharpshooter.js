"use strict";
const Constants = require ("../../../Constants");
const GoblinSharpshooterBase = require("../setC13/GoblinSharpshooter");

class GoblinSharpshooter extends GoblinSharpshooterBase {
  constructor(game) {
    super(game, "Goblin Sharpshooter", "Onslaught", "ONS");
  }
}

module.exports = GoblinSharpshooter;
