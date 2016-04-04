"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PredatoryUrgeBase = require("../setPC2/PredatoryUrge.js");

class PredatoryUrge extends PredatoryUrgeBase {
  constructor(game) {
    super(game, "Predatory Urge", "Zendikar", "ZEN");
  }
}

module.exports = PredatoryUrge;
