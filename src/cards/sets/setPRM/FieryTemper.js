"use strict";
const Constants = require ("../../../Constants");
const FieryTemperBase = require("../setSOI/FieryTemper");

class FieryTemper extends FieryTemperBase {
  constructor (game) {
    super(game, "Fiery Temper", "Magic Online Promos", "PRM");
  }
}

module.exports = FieryTemper;
