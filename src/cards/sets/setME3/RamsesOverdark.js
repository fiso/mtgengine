"use strict";
const Constants = require ("../../../Constants");
const RamsesOverdarkBase = require("../setLEG/RamsesOverdark");

class RamsesOverdark extends RamsesOverdarkBase {
  constructor(game) {
    super(game, "Ramses Overdark", "Masters Edition III", "ME3");
  }
}

module.exports = RamsesOverdark;
