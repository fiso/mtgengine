"use strict";
const Constants = require ("../../../Constants");
const FeldonsCaneBase = require("../setATQ/FeldonsCane");

class FeldonsCane extends FeldonsCaneBase {
  constructor (game) {
    super(game, "Feldon's Cane", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = FeldonsCane;
