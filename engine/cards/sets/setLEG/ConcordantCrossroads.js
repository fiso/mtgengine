"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConcordantCrossroadsBase = require("../setCHR/ConcordantCrossroads.js");

class ConcordantCrossroads extends ConcordantCrossroadsBase {
  constructor(game) {
    super(game, "Concordant Crossroads", "Legends", "LEG");
  }
}

module.exports = ConcordantCrossroads;
