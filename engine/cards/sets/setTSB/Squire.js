"use strict";
const Constants = require ("../../../Constants");
const SquireBase = require("../setDRK/Squire");

class Squire extends SquireBase {
  constructor(game) {
    super(game, "Squire", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Squire;
