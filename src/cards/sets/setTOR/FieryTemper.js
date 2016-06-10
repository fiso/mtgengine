"use strict";
const Constants = require ("../../../Constants");
const FieryTemperBase = require("../setpGTW/FieryTemper");

class FieryTemper extends FieryTemperBase {
  constructor (game) {
    super(game, "Fiery Temper", "Torment", "TOR");
  }
}

module.exports = FieryTemper;
