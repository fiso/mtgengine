"use strict";
const Constants = require ("../../../Constants");
const VoidBase = require("../setINV/Void");

class Void extends VoidBase {
  constructor (game) {
    super(game, "Void", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Void;
