"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PredatoryNightstalkerBase = require("../setPO2/PredatoryNightstalker.js");

class PredatoryNightstalker extends PredatoryNightstalkerBase {
  constructor(game) {
    super(game, "Predatory Nightstalker", "Vintage Masters", "VMA");
  }
}

module.exports = PredatoryNightstalker;
