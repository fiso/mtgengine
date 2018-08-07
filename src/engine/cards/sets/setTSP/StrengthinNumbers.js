"use strict";
const Constants = require ("../../../Constants");
const StrengthinNumbersBase = require("../setMM3/StrengthinNumbers");

class StrengthinNumbers extends StrengthinNumbersBase {
  constructor (game) {
    super(game, "Strength in Numbers", "Time Spiral", "TSP");
  }
}

module.exports = StrengthinNumbers;
