"use strict";
const Constants = require ("../../../Constants");
const ConcordantCrossroadsBase = require("../setTD0/ConcordantCrossroads");

class ConcordantCrossroads extends ConcordantCrossroadsBase {
  constructor (game) {
    super(game, "Concordant Crossroads", "Chronicles", "CHR");
  }
}

module.exports = ConcordantCrossroads;
