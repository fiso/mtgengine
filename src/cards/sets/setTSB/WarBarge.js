"use strict";
const Constants = require ("../../../Constants");
const WarBargeBase = require("../setDRK/WarBarge");

class WarBarge extends WarBargeBase {
  constructor (game) {
    super(game, "War Barge", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = WarBarge;
