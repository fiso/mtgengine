"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinSharpshooterBase = require("../setC13/GoblinSharpshooter.js");

class GoblinSharpshooter extends GoblinSharpshooterBase {
  constructor(game) {
    super(game, "Goblin Sharpshooter", "Onslaught", "ONS");
  }
}

module.exports = GoblinSharpshooter;
