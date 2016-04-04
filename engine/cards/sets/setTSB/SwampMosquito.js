"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwampMosquitoBase = require("../setALL/SwampMosquito.js");

class SwampMosquito extends SwampMosquitoBase {
  constructor(game) {
    super(game, "Swamp Mosquito", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SwampMosquito;
