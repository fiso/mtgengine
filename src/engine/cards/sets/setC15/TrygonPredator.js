"use strict";
const Constants = require ("../../../Constants");
const TrygonPredatorBase = require("../setEMA/TrygonPredator");

class TrygonPredator extends TrygonPredatorBase {
  constructor (game) {
    super(game, "Trygon Predator", "Commander 2015", "C15");
  }
}

module.exports = TrygonPredator;
