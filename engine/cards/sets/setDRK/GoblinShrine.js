"use strict";
const Constants = require ("../../../Constants");
const GoblinShrineBase = require("../setCHR/GoblinShrine");

class GoblinShrine extends GoblinShrineBase {
  constructor(game) {
    super(game, "Goblin Shrine", "The Dark", "DRK");
  }
}

module.exports = GoblinShrine;
