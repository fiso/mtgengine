"use strict";
const Constants = require ("../../../Constants");
const TreasureCruiseBase = require("../setCM2/TreasureCruise");

class TreasureCruise extends TreasureCruiseBase {
  constructor (game) {
    super(game, "Treasure Cruise", "Khans of Tarkir", "KTK");
  }
}

module.exports = TreasureCruise;
