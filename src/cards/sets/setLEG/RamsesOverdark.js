"use strict";
const Constants = require ("../../../Constants");
const RamsesOverdarkBase = require("../setME3/RamsesOverdark");

class RamsesOverdark extends RamsesOverdarkBase {
  constructor (game) {
    super(game, "Ramses Overdark", "Legends", "LEG");
  }
}

module.exports = RamsesOverdark;
