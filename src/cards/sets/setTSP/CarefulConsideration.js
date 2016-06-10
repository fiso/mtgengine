"use strict";
const Constants = require ("../../../Constants");
const CarefulConsiderationBase = require("../setMMA/CarefulConsideration");

class CarefulConsideration extends CarefulConsiderationBase {
  constructor (game) {
    super(game, "Careful Consideration", "Time Spiral", "TSP");
  }
}

module.exports = CarefulConsideration;
