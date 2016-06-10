"use strict";
const Constants = require ("../../../Constants");
const StuporBase = require("../setpARL/Stupor");

class Stupor extends StuporBase {
  constructor (game) {
    super(game, "Stupor", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Stupor;
