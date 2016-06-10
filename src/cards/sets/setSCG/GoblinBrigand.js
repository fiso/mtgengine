"use strict";
const Constants = require ("../../../Constants");
const GoblinBrigandBase = require("../set9ED/GoblinBrigand");

class GoblinBrigand extends GoblinBrigandBase {
  constructor (game) {
    super(game, "Goblin Brigand", "Scourge", "SCG");
  }
}

module.exports = GoblinBrigand;
