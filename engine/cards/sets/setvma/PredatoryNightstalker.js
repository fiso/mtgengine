"use strict";
const Constants = require ("../../../Constants");
const PredatoryNightstalkerBase = require("../setPO2/PredatoryNightstalker");

class PredatoryNightstalker extends PredatoryNightstalkerBase {
  constructor(game) {
    super(game, "Predatory Nightstalker", "Vintage Masters", "VMA");
  }
}

module.exports = PredatoryNightstalker;
