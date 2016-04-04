"use strict";
const Constants = require ("../../../Constants");
const CaribouRangeBase = require("../set5ED/CaribouRange");

class CaribouRange extends CaribouRangeBase {
  constructor(game) {
    super(game, "Caribou Range", "Ice Age", "ICE");
  }
}

module.exports = CaribouRange;
