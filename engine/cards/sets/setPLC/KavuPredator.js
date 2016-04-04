"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KavuPredatorBase = require("../setDDL/KavuPredator.js");

class KavuPredator extends KavuPredatorBase {
  constructor(game) {
    super(game, "Kavu Predator", "Planar Chaos", "PLC");
  }
}

module.exports = KavuPredator;
