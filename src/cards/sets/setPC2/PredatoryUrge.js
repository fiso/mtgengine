"use strict";
const Constants = require ("../../../Constants");
const PredatoryUrgeBase = require("../setPCA/PredatoryUrge");

class PredatoryUrge extends PredatoryUrgeBase {
  constructor (game) {
    super(game, "Predatory Urge", "Planechase 2012", "PC2");
  }
}

module.exports = PredatoryUrge;
