"use strict";
const Constants = require ("../../../Constants");
const BoltwingMarauderBase = require("../setDTK/BoltwingMarauder");

class BoltwingMarauder extends BoltwingMarauderBase {
  constructor(game) {
    super(game, "Boltwing Marauder", "Media Inserts", "pMEI");
  }
}

module.exports = BoltwingMarauder;
