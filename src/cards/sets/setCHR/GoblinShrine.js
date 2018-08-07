"use strict";
const Constants = require ("../../../Constants");
const GoblinShrineBase = require("../setME4/GoblinShrine");

class GoblinShrine extends GoblinShrineBase {
  constructor (game) {
    super(game, "Goblin Shrine", "Chronicles", "CHR");
  }
}

module.exports = GoblinShrine;
