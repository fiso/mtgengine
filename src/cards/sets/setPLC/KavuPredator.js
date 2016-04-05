"use strict";
const Constants = require ("../../../Constants");
const KavuPredatorBase = require("../setDDL/KavuPredator");

class KavuPredator extends KavuPredatorBase {
  constructor(game) {
    super(game, "Kavu Predator", "Planar Chaos", "PLC");
  }
}

module.exports = KavuPredator;
