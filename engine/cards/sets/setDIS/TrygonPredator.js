"use strict";
const Constants = require ("../../../Constants");
const TrygonPredatorBase = require("../setC15/TrygonPredator");

class TrygonPredator extends TrygonPredatorBase {
  constructor(game) {
    super(game, "Trygon Predator", "Dissension", "DIS");
  }
}

module.exports = TrygonPredator;
