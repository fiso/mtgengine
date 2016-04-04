"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarpedDevotionBase = require("../set8ED/WarpedDevotion.js");

class WarpedDevotion extends WarpedDevotionBase {
  constructor(game) {
    super(game, "Warped Devotion", "Planeshift", "PLS");
  }
}

module.exports = WarpedDevotion;
