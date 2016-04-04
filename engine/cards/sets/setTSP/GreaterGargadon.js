"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreaterGargadonBase = require("../setMMA/GreaterGargadon.js");

class GreaterGargadon extends GreaterGargadonBase {
  constructor(game) {
    super(game, "Greater Gargadon", "Time Spiral", "TSP");
  }
}

module.exports = GreaterGargadon;
