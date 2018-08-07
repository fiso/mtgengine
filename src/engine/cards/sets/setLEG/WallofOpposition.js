"use strict";
const Constants = require ("../../../Constants");
const WallofOppositionBase = require("../setCHR/WallofOpposition");

class WallofOpposition extends WallofOppositionBase {
  constructor (game) {
    super(game, "Wall of Opposition", "Legends", "LEG");
  }
}

module.exports = WallofOpposition;
