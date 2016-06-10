"use strict";
const Constants = require ("../../../Constants");
const GoblinGuideBase = require("../setpGPX/GoblinGuide");

class GoblinGuide extends GoblinGuideBase {
  constructor (game) {
    super(game, "Goblin Guide", "Zendikar", "ZEN");
  }
}

module.exports = GoblinGuide;
