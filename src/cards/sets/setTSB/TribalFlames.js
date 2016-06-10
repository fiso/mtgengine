"use strict";
const Constants = require ("../../../Constants");
const TribalFlamesBase = require("../setDDE/TribalFlames");

class TribalFlames extends TribalFlamesBase {
  constructor (game) {
    super(game, "Tribal Flames", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = TribalFlames;
