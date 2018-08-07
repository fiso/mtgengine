"use strict";
const Constants = require ("../../../Constants");
const HondenofNightsReachBase = require("../setEMA/HondenofNightsReach");

class HondenofNightsReach extends HondenofNightsReachBase {
  constructor (game) {
    super(game, "Honden of Night's Reach", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HondenofNightsReach;
