"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinGuideBase = require("../setpGPX/GoblinGuide.js");

class GoblinGuide extends GoblinGuideBase {
  constructor(game) {
    super(game, "Goblin Guide", "Zendikar", "ZEN");
  }
}

module.exports = GoblinGuide;
