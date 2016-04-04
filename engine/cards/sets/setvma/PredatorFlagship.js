"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PredatorFlagshipBase = require("../setC14/PredatorFlagship.js");

class PredatorFlagship extends PredatorFlagshipBase {
  constructor(game) {
    super(game, "Predator, Flagship", "Vintage Masters", "VMA");
  }
}

module.exports = PredatorFlagship;
