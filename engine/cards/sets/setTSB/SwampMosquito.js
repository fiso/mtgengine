"use strict";
const Constants = require ("../../../Constants");
const SwampMosquitoBase = require("../setALL/SwampMosquito");

class SwampMosquito extends SwampMosquitoBase {
  constructor(game) {
    super(game, "Swamp Mosquito", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = SwampMosquito;
