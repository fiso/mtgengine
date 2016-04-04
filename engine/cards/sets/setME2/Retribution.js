"use strict";
const Constants = require ("../../../Constants");
const RetributionBase = require("../setHML/Retribution");

class Retribution extends RetributionBase {
  constructor(game) {
    super(game, "Retribution", "Masters Edition II", "ME2");
  }
}

module.exports = Retribution;
