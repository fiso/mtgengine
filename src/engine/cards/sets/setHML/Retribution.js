"use strict";
const Constants = require ("../../../Constants");
const RetributionBase = require("../setME2/Retribution");

class Retribution extends RetributionBase {
  constructor (game) {
    super(game, "Retribution", "Homelands", "HML");
  }
}

module.exports = Retribution;
