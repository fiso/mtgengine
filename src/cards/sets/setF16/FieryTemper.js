"use strict";
const Constants = require ("../../../Constants");
const FieryTemperBase = require("../setSOI/FieryTemper");

class FieryTemper extends FieryTemperBase {
  constructor (game) {
    super(game, "Fiery Temper", "Friday Night Magic 2016", "F16");
  }
}

module.exports = FieryTemper;
