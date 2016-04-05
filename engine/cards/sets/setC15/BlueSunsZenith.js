"use strict";
const Constants = require ("../../../Constants");
const BlueSunsZenithBase = require("../setC13/BlueSunsZenith");

class BlueSunsZenith extends BlueSunsZenithBase {
  constructor(game) {
    super(game, "Blue Sun's Zenith", "Commander 2015", "C15");
  }
}

module.exports = BlueSunsZenith;
