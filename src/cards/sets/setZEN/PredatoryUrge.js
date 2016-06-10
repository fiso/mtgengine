"use strict";
const Constants = require ("../../../Constants");
const PredatoryUrgeBase = require("../setPC2/PredatoryUrge");

class PredatoryUrge extends PredatoryUrgeBase {
  constructor (game) {
    super(game, "Predatory Urge", "Zendikar", "ZEN");
  }
}

module.exports = PredatoryUrge;
