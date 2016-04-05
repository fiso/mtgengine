"use strict";
const Constants = require ("../../../Constants");
const GoblinDiplomatsBase = require("../setM14/GoblinDiplomats");

class GoblinDiplomats extends GoblinDiplomatsBase {
  constructor(game) {
    super(game, "Goblin Diplomats", "Magic Game Day", "pMGD");
  }
}

module.exports = GoblinDiplomats;
