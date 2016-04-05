"use strict";
const Constants = require ("../../../Constants");
const DreadshipReefBase = require("../setCMD/DreadshipReef");

class DreadshipReef extends DreadshipReefBase {
  constructor(game) {
    super(game, "Dreadship Reef", "Time Spiral", "TSP");
  }
}

module.exports = DreadshipReef;
