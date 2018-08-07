"use strict";
const Constants = require ("../../../Constants");
const GoblinGuideBase = require("../setMM3/GoblinGuide");

class GoblinGuide extends GoblinGuideBase {
  constructor (game) {
    super(game, "Goblin Guide", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = GoblinGuide;
