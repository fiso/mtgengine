"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FallenIdealBase = require("../setC15/FallenIdeal.js");

class FallenIdeal extends FallenIdealBase {
  constructor(game) {
    super(game, "Fallen Ideal", "Time Spiral", "TSP");
  }
}

module.exports = FallenIdeal;
