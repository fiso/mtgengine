"use strict";
const Constants = require ("../../../Constants");
const GoblinDiplomatsBase = require("../setDDT/GoblinDiplomats");

class GoblinDiplomats extends GoblinDiplomatsBase {
  constructor (game) {
    super(game, "Goblin Diplomats", "Magic Online Promos", "PRM");
  }
}

module.exports = GoblinDiplomats;
