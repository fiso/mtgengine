"use strict";
const Constants = require ("../../../Constants");
const GoblinDiplomatsBase = require("../setDDT/GoblinDiplomats");

class GoblinDiplomats extends GoblinDiplomatsBase {
  constructor (game) {
    super(game, "Goblin Diplomats", "Magic 2014 Promos", "PM14");
  }
}

module.exports = GoblinDiplomats;
