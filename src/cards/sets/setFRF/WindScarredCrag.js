"use strict";
const Constants = require ("../../../Constants");
const WindScarredCragBase = require("../setCM2/WindScarredCrag");

class WindScarredCrag extends WindScarredCragBase {
  constructor (game) {
    super(game, "Wind-Scarred Crag", "Fate Reforged", "FRF");
  }
}

module.exports = WindScarredCrag;
