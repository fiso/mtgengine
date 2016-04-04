"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadshipReefBase = require("../setCMD/DreadshipReef.js");

class DreadshipReef extends DreadshipReefBase {
  constructor(game) {
    super(game, "Dreadship Reef", "Time Spiral", "TSP");
  }
}

module.exports = DreadshipReef;
