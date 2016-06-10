"use strict";
const Constants = require ("../../../Constants");
const NorwoodRangerBase = require("../set8ED/NorwoodRanger");

class NorwoodRanger extends NorwoodRangerBase {
  constructor (game) {
    super(game, "Norwood Ranger", "Starter 1999", "S99");
  }
}

module.exports = NorwoodRanger;
