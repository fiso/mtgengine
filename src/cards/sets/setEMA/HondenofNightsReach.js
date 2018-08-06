"use strict";
const Constants = require ("../../../Constants");
const HondenofNightsReachBase = require("../setCHK/HondenofNightsReach");

class HondenofNightsReach extends HondenofNightsReachBase {
  constructor (game) {
    super(game, "Honden of Night's Reach", "Eternal Masters", "EMA");
  }
}

module.exports = HondenofNightsReach;
