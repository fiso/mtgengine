"use strict";
const Constants = require ("../../../Constants");
const WindScarredCragBase = require("../setCM2/WindScarredCrag");

class WindScarredCrag extends WindScarredCragBase {
  constructor (game) {
    super(game, "Wind-Scarred Crag", "Khans of Tarkir", "KTK");
  }
}

module.exports = WindScarredCrag;
