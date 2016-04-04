"use strict";
const Constants = require ("../../../Constants");
const NorwoodRangerBase = require("../set8ED/NorwoodRanger");

class NorwoodRanger extends NorwoodRangerBase {
  constructor(game) {
    super(game, "Norwood Ranger", "Ninth Edition", "9ED");
  }
}

module.exports = NorwoodRanger;
