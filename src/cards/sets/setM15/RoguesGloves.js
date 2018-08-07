"use strict";
const Constants = require ("../../../Constants");
const RoguesGlovesBase = require("../setM19/RoguesGloves");

class RoguesGloves extends RoguesGlovesBase {
  constructor (game) {
    super(game, "Rogue's Gloves", "Magic 2015", "M15");
  }
}

module.exports = RoguesGloves;
