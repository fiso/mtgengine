"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShivanGorgeBase = require("../setV12/ShivanGorge.js");

class ShivanGorge extends ShivanGorgeBase {
  constructor(game) {
    super(game, "Shivan Gorge", "Urza's Saga", "USG");
  }
}

module.exports = ShivanGorge;
