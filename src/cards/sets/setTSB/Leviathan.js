"use strict";
const Constants = require ("../../../Constants");
const LeviathanBase = require("../setBTD/Leviathan");

class Leviathan extends LeviathanBase {
  constructor (game) {
    super(game, "Leviathan", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Leviathan;
