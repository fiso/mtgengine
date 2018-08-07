"use strict";
const Constants = require ("../../../Constants");
const WarpedDevotionBase = require("../set8ED/WarpedDevotion");

class WarpedDevotion extends WarpedDevotionBase {
  constructor (game) {
    super(game, "Warped Devotion", "Planeshift", "PLS");
  }
}

module.exports = WarpedDevotion;
