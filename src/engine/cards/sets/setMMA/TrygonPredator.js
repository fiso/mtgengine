"use strict";
const Constants = require ("../../../Constants");
const TrygonPredatorBase = require("../setEMA/TrygonPredator");

class TrygonPredator extends TrygonPredatorBase {
  constructor (game) {
    super(game, "Trygon Predator", "Modern Masters", "MMA");
  }
}

module.exports = TrygonPredator;
