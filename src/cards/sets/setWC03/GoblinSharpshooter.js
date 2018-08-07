"use strict";
const Constants = require ("../../../Constants");
const GoblinSharpshooterBase = require("../setPZ1/GoblinSharpshooter");

class GoblinSharpshooter extends GoblinSharpshooterBase {
  constructor (game) {
    super(game, "Goblin Sharpshooter", "World Championship Decks 2003", "WC03");
  }
}

module.exports = GoblinSharpshooter;
