"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarefulConsiderationBase = require("../setMMA/CarefulConsideration.js");

class CarefulConsideration extends CarefulConsiderationBase {
  constructor(game) {
    super(game, "Careful Consideration", "Time Spiral", "TSP");
  }
}

module.exports = CarefulConsideration;
