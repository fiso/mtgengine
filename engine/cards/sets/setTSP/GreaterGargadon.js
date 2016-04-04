"use strict";
const Constants = require ("../../../Constants");
const GreaterGargadonBase = require("../setMMA/GreaterGargadon");

class GreaterGargadon extends GreaterGargadonBase {
  constructor(game) {
    super(game, "Greater Gargadon", "Time Spiral", "TSP");
  }
}

module.exports = GreaterGargadon;
