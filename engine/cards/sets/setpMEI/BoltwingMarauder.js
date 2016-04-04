"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoltwingMarauderBase = require("../setDTK/BoltwingMarauder.js");

class BoltwingMarauder extends BoltwingMarauderBase {
  constructor(game) {
    super(game, "Boltwing Marauder", "Media Inserts", "pMEI");
  }
}

module.exports = BoltwingMarauder;
