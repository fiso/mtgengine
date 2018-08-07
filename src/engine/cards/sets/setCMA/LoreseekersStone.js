"use strict";
const Constants = require ("../../../Constants");
const LoreseekersStoneBase = require("../setCM2/LoreseekersStone");

class LoreseekersStone extends LoreseekersStoneBase {
  constructor (game) {
    super(game, "Loreseeker's Stone", "Commander Anthology", "CMA");
  }
}

module.exports = LoreseekersStone;
