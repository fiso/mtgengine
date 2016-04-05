"use strict";
const Constants = require ("../../../Constants");
const GoblinSkyRaiderBase = require("../setDPA/GoblinSkyRaider");

class GoblinSkyRaider extends GoblinSkyRaiderBase {
  constructor(game) {
    super(game, "Goblin Sky Raider", "Onslaught", "ONS");
  }
}

module.exports = GoblinSkyRaider;
