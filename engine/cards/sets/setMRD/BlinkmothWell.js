"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlinkmothWell extends Card {
  constructor(game) {
    super(game, "Blinkmoth Well", "Mirrodin", "MRD");
  }
}

module.exports = BlinkmothWell;
