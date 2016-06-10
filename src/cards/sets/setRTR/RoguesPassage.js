"use strict";
const Constants = require ("../../../Constants");
const RoguesPassageBase = require("../setC15/RoguesPassage");

class RoguesPassage extends RoguesPassageBase {
  constructor (game) {
    super(game, "Rogue's Passage", "Return to Ravnica", "RTR");
  }
}

module.exports = RoguesPassage;
