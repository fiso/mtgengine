"use strict";
const Constants = require ("../../../Constants");
const BlightedGorgeBase = require("../setDDT/BlightedGorge");

class BlightedGorge extends BlightedGorgeBase {
  constructor (game) {
    super(game, "Blighted Gorge", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedGorge;
