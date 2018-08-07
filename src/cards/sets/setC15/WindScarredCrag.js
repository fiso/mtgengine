"use strict";
const Constants = require ("../../../Constants");
const WindScarredCragBase = require("../setCM2/WindScarredCrag");

class WindScarredCrag extends WindScarredCragBase {
  constructor (game) {
    super(game, "Wind-Scarred Crag", "Commander 2015", "C15");
  }
}

module.exports = WindScarredCrag;
