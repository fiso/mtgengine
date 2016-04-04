"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinSkyRaiderBase = require("../setDPA/GoblinSkyRaider.js");

class GoblinSkyRaider extends GoblinSkyRaiderBase {
  constructor(game) {
    super(game, "Goblin Sky Raider", "Onslaught", "ONS");
  }
}

module.exports = GoblinSkyRaider;
