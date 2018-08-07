"use strict";
const Constants = require ("../../../Constants");
const PredatoryNightstalkerBase = require("../setVMA/PredatoryNightstalker");

class PredatoryNightstalker extends PredatoryNightstalkerBase {
  constructor (game) {
    super(game, "Predatory Nightstalker", "Portal Second Age", "P02");
  }
}

module.exports = PredatoryNightstalker;
