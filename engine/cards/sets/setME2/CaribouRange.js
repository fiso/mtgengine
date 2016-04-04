"use strict";
const Constants = require ("../../../Constants");
const CaribouRangeBase = require("../set5ED/CaribouRange");

class CaribouRange extends CaribouRangeBase {
  constructor(game) {
    super(game, "Caribou Range", "Masters Edition II", "ME2");
  }
}

module.exports = CaribouRange;
