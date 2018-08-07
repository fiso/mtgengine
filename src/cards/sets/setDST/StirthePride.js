"use strict";
const Constants = require ("../../../Constants");
const StirthePrideBase = require("../setMMA/StirthePride");

class StirthePride extends StirthePrideBase {
  constructor (game) {
    super(game, "Stir the Pride", "Darksteel", "DST");
  }
}

module.exports = StirthePride;
