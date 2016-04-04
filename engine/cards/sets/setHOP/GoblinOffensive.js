"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinOffensiveBase = require("../setATH/GoblinOffensive.js");

class GoblinOffensive extends GoblinOffensiveBase {
  constructor(game) {
    super(game, "Goblin Offensive", "Planechase", "HOP");
  }
}

module.exports = GoblinOffensive;
