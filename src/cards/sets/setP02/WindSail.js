"use strict";
const Constants = require ("../../../Constants");
const WindSailBase = require("../setS99/WindSail");

class WindSail extends WindSailBase {
  constructor (game) {
    super(game, "Wind Sail", "Portal Second Age", "P02");
  }
}

module.exports = WindSail;
