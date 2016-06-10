"use strict";
const Constants = require ("../../../Constants");
const StirthePrideBase = require("../setDST/StirthePride");

class StirthePride extends StirthePrideBase {
  constructor (game) {
    super(game, "Stir the Pride", "Modern Masters", "MMA");
  }
}

module.exports = StirthePride;
