"use strict";
const Constants = require ("../../../Constants");
const ShivanGorgeBase = require("../setV12/ShivanGorge");

class ShivanGorge extends ShivanGorgeBase {
  constructor (game) {
    super(game, "Shivan Gorge", "Urza's Saga", "USG");
  }
}

module.exports = ShivanGorge;
