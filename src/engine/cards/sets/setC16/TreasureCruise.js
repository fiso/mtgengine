"use strict";
const Constants = require ("../../../Constants");
const TreasureCruiseBase = require("../setCM2/TreasureCruise");

class TreasureCruise extends TreasureCruiseBase {
  constructor (game) {
    super(game, "Treasure Cruise", "Commander 2016", "C16");
  }
}

module.exports = TreasureCruise;
