"use strict";
const Constants = require ("../../../Constants");
const LurkingPredatorsBase = require("../setC16/LurkingPredators");

class LurkingPredators extends LurkingPredatorsBase {
  constructor (game) {
    super(game, "Lurking Predators", "Magic 2010", "M10");
  }
}

module.exports = LurkingPredators;
