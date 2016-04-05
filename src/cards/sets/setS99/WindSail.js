"use strict";
const Constants = require ("../../../Constants");
const WindSailBase = require("../setPO2/WindSail");

class WindSail extends WindSailBase {
  constructor(game) {
    super(game, "Wind Sail", "Starter 1999", "S99");
  }
}

module.exports = WindSail;
