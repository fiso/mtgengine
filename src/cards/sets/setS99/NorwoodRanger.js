"use strict";
const Constants = require ("../../../Constants");
const NorwoodRangerBase = require("../set9ED/NorwoodRanger");

class NorwoodRanger extends NorwoodRangerBase {
  constructor (game) {
    super(game, "Norwood Ranger", "Starter 1999", "S99");
  }
}

module.exports = NorwoodRanger;
