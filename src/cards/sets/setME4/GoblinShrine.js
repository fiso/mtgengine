"use strict";
const Constants = require ("../../../Constants");
const GoblinShrineBase = require("../setCHR/GoblinShrine");

class GoblinShrine extends GoblinShrineBase {
  constructor (game) {
    super(game, "Goblin Shrine", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinShrine;
