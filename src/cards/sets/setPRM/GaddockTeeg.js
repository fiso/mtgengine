"use strict";
const Constants = require ("../../../Constants");
const GaddockTeegBase = require("../setJ17/GaddockTeeg");

class GaddockTeeg extends GaddockTeegBase {
  constructor (game) {
    super(game, "Gaddock Teeg", "Magic Online Promos", "PRM");
  }
}

module.exports = GaddockTeeg;
