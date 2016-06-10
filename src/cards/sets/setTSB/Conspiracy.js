"use strict";
const Constants = require ("../../../Constants");
const ConspiracyBase = require("../setMMQ/Conspiracy");

class Conspiracy extends ConspiracyBase {
  constructor (game) {
    super(game, "Conspiracy", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Conspiracy;
