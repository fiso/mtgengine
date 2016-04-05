"use strict";
const Constants = require ("../../../Constants");
const ConcordantCrossroadsBase = require("../setCHR/ConcordantCrossroads");

class ConcordantCrossroads extends ConcordantCrossroadsBase {
  constructor(game) {
    super(game, "Concordant Crossroads", "Legends", "LEG");
  }
}

module.exports = ConcordantCrossroads;
