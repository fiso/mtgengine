"use strict";
const Constants = require ("../../../Constants");
const GoblinBurrowsBase = require("../setEVG/GoblinBurrows");

class GoblinBurrows extends GoblinBurrowsBase {
  constructor (game) {
    super(game, "Goblin Burrows", "Onslaught", "ONS");
  }
}

module.exports = GoblinBurrows;
