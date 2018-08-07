"use strict";
const Constants = require ("../../../Constants");
const WindbriskHeightsBase = require("../setC16/WindbriskHeights");

class WindbriskHeights extends WindbriskHeightsBase {
  constructor (game) {
    super(game, "Windbrisk Heights", "From the Vault: Realms", "V12");
  }
}

module.exports = WindbriskHeights;
