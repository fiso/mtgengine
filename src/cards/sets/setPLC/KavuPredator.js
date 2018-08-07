"use strict";
const Constants = require ("../../../Constants");
const KavuPredatorBase = require("../setA25/KavuPredator");

class KavuPredator extends KavuPredatorBase {
  constructor (game) {
    super(game, "Kavu Predator", "Planar Chaos", "PLC");
  }
}

module.exports = KavuPredator;
