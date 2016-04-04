"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrygonPredatorBase = require("../setC15/TrygonPredator.js");

class TrygonPredator extends TrygonPredatorBase {
  constructor(game) {
    super(game, "Trygon Predator", "Dissension", "DIS");
  }
}

module.exports = TrygonPredator;
