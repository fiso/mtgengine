"use strict";
const Constants = require ("../../../Constants");
const BlueSunsZenithBase = require("../setA25/BlueSunsZenith");

class BlueSunsZenith extends BlueSunsZenithBase {
  constructor (game) {
    super(game, "Blue Sun's Zenith", "Commander Anthology", "CMA");
  }
}

module.exports = BlueSunsZenith;
