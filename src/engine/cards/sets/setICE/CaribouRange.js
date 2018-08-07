"use strict";
const Constants = require ("../../../Constants");
const CaribouRangeBase = require("../setME2/CaribouRange");

class CaribouRange extends CaribouRangeBase {
  constructor (game) {
    super(game, "Caribou Range", "Ice Age", "ICE");
  }
}

module.exports = CaribouRange;
