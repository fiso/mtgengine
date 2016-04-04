"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaribouRangeBase = require("../set5ED/CaribouRange.js");

class CaribouRange extends CaribouRangeBase {
  constructor(game) {
    super(game, "Caribou Range", "Masters Edition II", "ME2");
  }
}

module.exports = CaribouRange;
