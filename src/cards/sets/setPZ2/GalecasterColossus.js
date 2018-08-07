"use strict";
const Constants = require ("../../../Constants");
const GalecasterColossusBase = require("../setC17/GalecasterColossus");

class GalecasterColossus extends GalecasterColossusBase {
  constructor (game) {
    super(game, "Galecaster Colossus", "You Make the Cube", "PZ2");
  }
}

module.exports = GalecasterColossus;
