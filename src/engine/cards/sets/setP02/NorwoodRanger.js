"use strict";
const Constants = require ("../../../Constants");
const NorwoodRangerBase = require("../set9ED/NorwoodRanger");

class NorwoodRanger extends NorwoodRangerBase {
  constructor (game) {
    super(game, "Norwood Ranger", "Portal Second Age", "P02");
  }
}

module.exports = NorwoodRanger;
